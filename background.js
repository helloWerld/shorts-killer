import { PLATFORM_PATTERNS } from "./url-patterns.js";

const DEFAULT_REDIRECT_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const platformIds = [
  "youtube",
  "facebook",
  "instagram",
  "tiktok",
  "twitter",
  "snapchat",
  "linkedin",
  "pinterest",
  "reddit",
];

// Store URLs in an object with tabId as key
const tabStates = {};

// Helper to map pattern index to platform id
function getPlatformIdByIndex(index) {
  return platformIds[index];
}

// Helper to validate URL
function isValidUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// Helper to check if a URL is short-form content
function isShortFormContent(url) {
  return PLATFORM_PATTERNS.some((pattern) => pattern.match(url));
}

// Get the most recent non-short-form URL from history
async function getLastNonShortFormUrl() {
  return new Promise((resolve) => {
    chrome.history.search({ text: "", maxResults: 10 }, (items) => {
      for (const item of items) {
        if (!isShortFormContent(item.url)) {
          resolve(item.url);
          return;
        }
      }
      resolve(null);
    });
  });
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (!changeInfo.url) return;

  // Initialize tab state if needed
  if (!tabStates[tabId]) {
    tabStates[tabId] = {
      lastNonShortFormUrl: null,
      isProcessingRedirect: false,
    };
  }

  // If we're already processing a redirect for this tab, ignore
  if (tabStates[tabId].isProcessingRedirect) {
    return;
  }

  const newUrl = changeInfo.url;

  // If this is not a short-form content URL, update lastNonShortFormUrl
  if (!isShortFormContent(newUrl)) {
    tabStates[tabId].lastNonShortFormUrl = newUrl;
    return;
  }

  // Get platform settings
  chrome.storage.sync.get(
    [...platformIds, "customRedirectUrl"],
    async (result) => {
      for (let i = 0; i < PLATFORM_PATTERNS.length; i++) {
        const pattern = PLATFORM_PATTERNS[i];
        const platformId = getPlatformIdByIndex(i);
        const enabled = result[platformId] !== false;

        if (enabled && pattern.match(newUrl)) {
          // Mark that we're processing a redirect
          tabStates[tabId].isProcessingRedirect = true;

          // If we don't have a last non-short-form URL for this tab, try to get it from history
          if (!tabStates[tabId].lastNonShortFormUrl) {
            tabStates[tabId].lastNonShortFormUrl =
              await getLastNonShortFormUrl();
          }

          const customUrl = result.customRedirectUrl;
          const redirectUrl =
            customUrl && isValidUrl(customUrl)
              ? customUrl
              : DEFAULT_REDIRECT_URL;

          chrome.tabs.update(tabId, { url: redirectUrl });
          break;
        }
      }
    }
  );
});

// Clean up tab state when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabStates[tabId];
});

// Listen for popup connection
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    port.onMessage.addListener((message) => {
      if (message.type === "GET_LAST_URL") {
        // Get the current tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length === 0) return;
          const currentTab = tabs[0];
          const tabState = tabStates[currentTab.id] || {};

          port.postMessage({
            type: "LAST_URL",
            url: tabState.lastNonShortFormUrl || null,
          });
        });
      }
    });
  }
});

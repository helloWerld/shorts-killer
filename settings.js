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

const DEFAULT_REDIRECT_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

function loadToggles() {
  chrome.storage.sync.get(platformIds, (result) => {
    platformIds.forEach((id) => {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = result[id] !== false; // default to true
      }
    });
  });
}

function saveToggles(e) {
  e.preventDefault();
  const newSettings = {};
  platformIds.forEach((id) => {
    const checkbox = document.getElementById(id);
    newSettings[id] = checkbox ? checkbox.checked : true;
  });
  chrome.storage.sync.set(newSettings, () => {
    const status = document.getElementById("status");
    if (status) {
      status.textContent = "Settings saved!";
      setTimeout(() => (status.textContent = ""), 1500);
    }
  });
}

function isValidUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function updateCurrentRedirectDisplay(url) {
  const currentRedirect = document.getElementById("current-redirect-url");
  if (currentRedirect) {
    currentRedirect.textContent = url;
    currentRedirect.href = url;
  }
}

function loadCustomRedirectUrl() {
  chrome.storage.sync.get(["customRedirectUrl"], (result) => {
    const input = document.getElementById("custom-redirect-url");
    const url = result.customRedirectUrl || DEFAULT_REDIRECT_URL;
    if (input) {
      input.value = result.customRedirectUrl || "";
    }
    updateCurrentRedirectDisplay(url);
  });
}

function saveCustomRedirectUrl() {
  const input = document.getElementById("custom-redirect-url");
  const status = document.getElementById("redirect-status");
  if (!input) return;
  const url = input.value.trim();
  if (!isValidUrl(url)) {
    if (status) {
      status.textContent =
        "Please enter a valid URL (must start with http:// or https://)";
      status.style.color = "#ff5c5c";
    }
    return;
  }
  chrome.storage.sync.set({ customRedirectUrl: url }, () => {
    if (status) {
      status.textContent = "Custom redirect URL saved!";
      status.style.color = "#0ff1ce";
      setTimeout(() => (status.textContent = ""), 1500);
    }
    updateCurrentRedirectDisplay(url);
  });
}

function testCustomRedirectUrl() {
  const input = document.getElementById("custom-redirect-url");
  const status = document.getElementById("redirect-status");
  if (!input) return;
  const url = input.value.trim();
  if (!isValidUrl(url)) {
    if (status) {
      status.textContent =
        "Please enter a valid URL (must start with http:// or https://)";
      status.style.color = "#ff5c5c";
    }
    return;
  }
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  loadToggles();
  loadCustomRedirectUrl();
  document
    .getElementById("platform-form")
    .addEventListener("submit", saveToggles);
  document
    .getElementById("save-redirect-url")
    .addEventListener("click", saveCustomRedirectUrl);
  document
    .getElementById("test-redirect-url")
    .addEventListener("click", testCustomRedirectUrl);
});

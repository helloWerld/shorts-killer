// Centralized URL patterns for Shorts Killer extension

export const PLATFORM_PATTERNS = [
  {
    name: "YouTube Shorts",
    match: (url) => url.includes("youtube.com") && url.includes("/shorts"),
  },
  {
    name: "Facebook Reels",
    match: (url) => url.includes("facebook.com") && url.includes("reel"),
  },
  {
    name: "Instagram Shorts",
    match: (url) => url.includes("instagram.com") && url.includes("shorts"),
  },
  {
    name: "TikTok",
    match: (url) => url.includes("tiktok.com") && url.includes("/video/"),
  },
  {
    name: "Twitter/X",
    match: (url) =>
      (url.includes("twitter.com") || url.includes("x.com")) &&
      url.includes("/status/"),
  },
  {
    name: "Snapchat Spotlight",
    match: (url) => url.includes("snapchat.com") && url.includes("/spotlight/"),
  },
  {
    name: "LinkedIn Feed",
    match: (url) => url.includes("linkedin.com") && url.includes("/feed/"),
  },
  {
    name: "Pinterest Idea Pins",
    match: (url) => url.includes("pinterest.com") && url.includes("/pin/"),
  },
  {
    name: "Reddit Shorts",
    match: (url) =>
      url.includes("reddit.com") &&
      (url.includes("/r/") || url.includes("/shorts/")),
  },
];

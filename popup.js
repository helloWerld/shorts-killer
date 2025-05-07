"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const lastLink = document.getElementById("last");
  if (!lastLink) return;

  const port = chrome.runtime.connect({ name: "popup" });
  port.postMessage({ type: "GET_LAST_URL" });

  port.onMessage.addListener((message) => {
    if (message.type === "LAST_URL") {
      // Only show and enable the "go back" link if we have a non-short-form URL to go back to
      if (message.url) {
        lastLink.href = message.url;
        lastLink.style.display = "inline";
        lastLink.classList.remove("disabled");
      } else {
        lastLink.style.display = "inline";
        lastLink.classList.add("disabled");
        lastLink.href = "#";
        lastLink.title = "No previous page to return to";
      }
    }
  });

  // Prevent clicking if disabled
  lastLink.addEventListener("click", (e) => {
    if (lastLink.classList.contains("disabled")) {
      e.preventDefault();
    }
  });
});

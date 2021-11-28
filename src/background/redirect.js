import browser from "webextension-polyfill";

(function () {
  // Fallback when Browser is not already running
  const url = location.href;
  browser.runtime.sendMessage({ action: "convertURL", url }, response => {
    if (response !== url) {
      location.href = response;
    }
  });
})();

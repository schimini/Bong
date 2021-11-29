import browser from "webextension-polyfill";

(function () {
  // Fallback when Browser is not already running
  const url = location.href;
  browser.runtime
    .sendMessage({ action: "convertURL", url })
    .then(response => {
      if (response !== url) {
        location.href = response;
      }
    });
})();

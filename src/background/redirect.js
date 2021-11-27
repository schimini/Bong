(function() {
  "use strict";
  // Fallback when Browser is not already running
  var url = location.href;
  browser.runtime.sendMessage({ action: "convertURL", url: url }, function(
    response,
  ) {
    if (response !== url) {
      location.href = response;
    }
  });
})();

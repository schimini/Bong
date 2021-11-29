import browser from "webextension-polyfill";
import optionsStorage from "../utl/options-storage";

const start = async function () {
  let useCustomEngine;
  let customEngine;
  let storageChange;
  let enableOpenWebsite;
  let cortanaOnly;
  let excludeSettingsApp;
  function convertURL(url) {
    const querystringparams = getUrlVars(url);
    const source = getKeyValue(querystringparams, "form");
    if (
      (cortanaOnly === true && source !== "WNSGPH" && source !== "WNSBOX")
      || (excludeSettingsApp === true && source === "S00028")
    ) {
      // Cortana is not the source don't redirect
      // Settings app source
      return url;
    }

    url = url.replace(/%20/g, "+");
    const uri = /\?q=([\w-.~:/?#[\]@!$'()*+,;=%]*)($|(&))/.exec(url)[1];
    if (enableOpenWebsite === true) {
      const match
        = /^((go\+to\+)|(open\+)|())([\w-.~:/?#[\]@!$'()*+,;=%]*\.[a-z]+)/i.exec(
          uri
        );
      if (match) {
        return "http://" + match[5];
      }
    }

    if (useCustomEngine || storageChange === "Custom") {
      return customEngine + uri;
    }

    if (storageChange === "Google.com") {
      return "https://www.google.com/search?q=" + uri;
    }

    if (storageChange === "Yahoo.com") {
      return "https://search.yahoo.com/search?p=" + uri;
    }

    return "https://www.duckduckgo.com?q=" + uri;
  }

  function getUrlVars(url) {
    const vars = [];
    let hash;
    const hashes = url.slice(url.indexOf("?") + 1).split("&");
    for (const hash_ of hashes) {
      hash = hash_.split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    return vars;
  }

  function getKeyValue(dictionary, key) {
    if (key in dictionary) {
      return dictionary[key];
    }

    return "";
  }

  async function updateOptions() {
    const options = await optionsStorage.getAll();
    useCustomEngine = options.useCustomEngine;
    storageChange = options.searchEngine;
    enableOpenWebsite = options.enableOpenWebsite;
    cortanaOnly = options.cortanaOnly;
    excludeSettingsApp = options.excludeSettingsApp;
    customEngine = options.customEngine;
    console.log("Fetched values", options);
  }

  updateOptions();

  browser.storage.onChanged.addListener(() => {
    updateOptions();
  });

  browser.webNavigation.onBeforeNavigate.addListener(
    navigate => {
      console.log(navigate);
      if (navigate.parentFrameId === -1) {
        const newurl = convertURL(navigate.url);
        browser.tabs.update(navigate.tabId, {
          url: newurl
        });
      }
    },
    {
      url: [
        {
          hostSuffix: "bing.com",
          pathPrefix: "/search"
        }
      ]
    }
  );

  // Fallback when Browser is not already running
  browser.runtime.onMessage.addListener(onMessage);
  function onMessage(request, sender, callback) {
    if (request.action === "convertURL") {
      callback(convertURL(request.url));
    }

    return true;
  }
};

start();

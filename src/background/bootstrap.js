import browser from 'webextension-polyfill';
import optionsStorage from '../utl/options-storage.js';
const start = async function () {
  "use strict";
  var use_custom_engine;
  var custom_engine;
  var storageChange;
  var enable_open_website;
  var cortana_only;
  var exclude_settings_app;
  function convertURL(url) {
    var querystringparams = getUrlVars(url);
    var source = getKeyValue(querystringparams, "form");
    if (cortana_only === true) {
      //Cortana is not the source don't redirect
      if (source !== "WNSGPH" && source !== "WNSBOX") {
        return url;
      }
    }

    if (exclude_settings_app === true) {
      //settings app source
      if (source === "S00028") {
        return url;
      }
    }

    url = url.replace(/%20/g, "+");
    var uri = /\?q\=([0-9a-zA-Z-._~:\/?#[\]@!$'()*+,;=%]*)($|(\&))/.exec(
      url
    )[1];
    if (enable_open_website === true) {
      var match =
        /^((go\+to\+)|(open\+)|())([0-9a-zA-Z-._~:\/?#[\]@!$'()*+,;=%]*\.[a-z]+)/i.exec(
          uri
        );
      if (match) {
        return "http://" + match[5];
      }
    }
    if (use_custom_engine || storageChange === "Custom") {
      return custom_engine + uri;
    }
    if (storageChange === "Google.com") {
      return "https://www.google.com/search?q=" + uri;
    }
    if (storageChange === "DuckDuckGo.com") {
      return "https://www.duckduckgo.com?q=" + uri;
    }
    if (storageChange === "Yahoo.com") {
      return "https://search.yahoo.com/search?p=" + uri;
    }
    return "https://www.google.com/search?q=" + uri;
  }
  function getUrlVars(url) {
    var vars = [],
      hash;
    var hashes = url.slice(url.indexOf("?") + 1).split("&");
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
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
  const options = await optionsStorage.getAll();
  use_custom_engine = options.use_custom_engine;
  storageChange = options.search_engine;
  enable_open_website = options.enable_open_website;
  cortana_only = options.cortana_only;
  exclude_settings_app = options.exclude_settings_app;
  custom_engine = options.custom_engine;
  console.log("Fetched values", options);

  browser.storage.onChanged.addListener(function (changes) {
    if (typeof changes.search_engine !== "undefined") {
      storageChange = changes.search_engine.newValue;
    }
    if (typeof changes.custom_engine !== "undefined") {
      custom_engine = changes.custom_engine.newValue;
    }
    if (typeof changes.enable_open_website !== "undefined") {
      enable_open_website = changes.enable_open_website.newValue;
    }
    if (typeof changes.cortana_only !== "undefined") {
      cortana_only = changes.cortana_only.newValue;
    }
    if (typeof changes.exclude_settings_app !== "undefined") {
      exclude_settings_app = changes.exclude_settings_app.newValue;
    }
    if (typeof changes.use_custom_engine !== "undefined") {
      use_custom_engine = changes.use_custom_engine.newValue;
    }
  });

  browser.webRequest.onBeforeRequest.addListener(
    function (details) {
      var newurl = convertURL(details.url);
      if (newurl !== details.url) {
        return { redirectUrl: newurl };
      }
    },
    { urls: ["*://*.bing.com/search*"] },
    ["blocking"]
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

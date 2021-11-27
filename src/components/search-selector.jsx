import { useCallback, useEffect } from "preact/hooks";
import { useBrowserStorage } from "../hooks/use-browser-storage";
import optionsStorage from '../utl/options-storage.js';
export const SearchSelector = () => {

  const [engine, setEngine] = useBrowserStorage("search_engine");
  return (
    <div id="app-root">
      <h2>Select your preferred search engine</h2>
      <div className="search-select-popout">
        <div>
          <img
            src="/src/images/google.png"
            onClick={() => setEngine("Google.com")}
            alt="Select Google as your default search"
            className={`search-option${
              engine === "Google.com" ? " search-option--selected" : ""
            }`}
          />
        </div>
        <div>
          <img
            src="/src/images/duck.png"
            onClick={() => setEngine("DuckDuckGo.com")}
            alt="Select DuckDuckGo as your default search"
            className={`search-option${
              engine === "DuckDuckGo.com" ? " search-option--selected" : ""
            }`}
          />
        </div>
        <div>
          <img
            src="/src/images/yahoo.png"
            onClick={() => setEngine("Yahoo.com")}
            alt="Select Yahoo as your default search"
            className={`search-option${
              engine === "Yahoo.com" ? " search-option--selected" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};
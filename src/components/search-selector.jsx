import { useFromStorage } from "../hooks/use-browser-storage";

export const SearchSelector = () => {
  const [engine, setEngine] = useFromStorage("searchEngine");
  return (
    <div id="main">
      <h2>Select your preferred search engine</h2>
      <div className="search-select-popout">
        <div>
          <img
            src="/src/images/google.png"
            alt="Select Google as your default search"
            className={`search-option${
              engine === "Google.com" ? " search-option--selected" : ""
            }`}
            onClick={() => setEngine("Google.com")}
          />
        </div>
        <div>
          <img
            src="/src/images/duck.png"
            alt="Select DuckDuckGo as your default search"
            className={`search-option${
              engine === "DuckDuckGo.com" ? " search-option--selected" : ""
            }`}
            onClick={() => setEngine("DuckDuckGo.com")}
          />
        </div>
        <div>
          <img
            src="/src/images/yahoo.png"
            alt="Select Yahoo as your default search"
            className={`search-option${
              engine === "Yahoo.com" ? " search-option--selected" : ""
            }`}
            onClick={() => setEngine("Yahoo.com")}
          />
        </div>
      </div>
    </div>
  );
};

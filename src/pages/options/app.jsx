import { useState } from "preact/hooks";
import "./app.scss";
import { SearchSelector } from "../../components/search-selector";
import { AdditionalSettings } from "../../components/additional-settings";
import optionsStorage from "../../utl/options-storage";

const App = () => {
  optionsStorage.getAll().then(console.log);
  const [page, setPage] = useState(0);
  return (
    <div id="app-root">
      {page === 0 && (
        <div>
          <SearchSelector/>
          <button
            type="button"
            className="additional-settings pure-button"
            onClick={() => setPage(1)}
          >
            Additional Settings
          </button>
        </div>
      )}
      {page === 1 && (
        <div>
          <AdditionalSettings/>
          <button
            type="button"
            className="additional-settings pure-button"
            onClick={() => setPage(0)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

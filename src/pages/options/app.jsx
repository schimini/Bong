import { useState } from "preact/hooks";
import "./app.scss";
import { SearchSelector } from "../../components/search-selector";
import { AdditionalSettings } from "../../components/additional-settings";
import optionsStorage from "../../utl/options-storage";

const App = () => {
  optionsStorage.getAll().then(console.log);
  const [page, setPage] = useState(false);
  return (
    <div id="app-root">
      <div>
        {!page && <SearchSelector />}
        {page && (<AdditionalSettings />)}
        <button
          type="button"
          className="additional-settings pure-button"
          onClick={() => setPage(!page)}
        >
          {!page ? "Additional Settings" : "Back"}
        </button>
      </div>
    </div>
  );
};

export default App;

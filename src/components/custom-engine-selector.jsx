import { useBrowserStorage } from "../hooks/use-browser-storage";
export const CustomEngineSelect = () => {
  const [isCustomEngineChecked, setUseCustomEngine] = useBrowserStorage(
    "use_custom_engine"
  );
  const [customEngine, setCustomEngine] = useBrowserStorage("custom_engine");

  return (
    <div>
      <input
        type="checkbox"
        id="custom"
        name="Custom Search Engine"
        checked={isCustomEngineChecked}
        onChange={e => setUseCustomEngine(e.target.checked)}
      />
      <label for="custom">Custom Search Engine</label>
      {isCustomEngineChecked && (
        <div>
          <input
            type="text"
            id="custom-engine-url"
            name="Custom Engine URL"
            defaultValue={customEngine}
            onChange={e => setCustomEngine(e.target.value)}
          />
          <label for="custom-engine-url">Custom Engine URL</label>
        </div>
      )}
    </div>
  );
};
import { useBrowserStorage } from "../hooks/use-browser-storage";

export const CustomEngineSelect = () => {
  const [isCustomEngineChecked, setUseCustomEngine]
    = useBrowserStorage("useCustomEngine");
  const [customEngine, setCustomEngine] = useBrowserStorage("customEngine");

  return (
    <div>
      <input
        type="checkbox"
        id="custom"
        name="Custom Search Engine"
        checked={isCustomEngineChecked}
        onChange={event => setUseCustomEngine(event.target.checked)}
      />
      <label htmlFor="custom">Custom Search Engine</label>
      {isCustomEngineChecked && (
        <div>
          <input
            type="text"
            id="custom-engine-url"
            name="Custom Engine URL"
            defaultValue={customEngine}
            onChange={event => setCustomEngine(event.target.value)}
          />
          <label htmlFor="custom-engine-url">Custom Engine URL</label>
        </div>
      )}
    </div>
  );
};

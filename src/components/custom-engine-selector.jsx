import { fromStorage } from "../hooks/use-browser-storage";

export const CustomEngineSelect = () => {
  const [isCustomEngineChecked, setUseCustomEngine] =
    fromStorage("useCustomEngine");
  const [customEngine, setCustomEngine] = fromStorage("customEngine");

  return (
    <div>
      <input
        type="checkbox"
        id="custom"
        name="Custom Search Engine"
        checked={isCustomEngineChecked}
        onChange={(event) => setUseCustomEngine(event.target.checked)}
      />
      <label htmlFor="custom">Custom Search Engine</label>
      {isCustomEngineChecked && (
        <div>
          <input
            type="text"
            id="custom-engine-url"
            name="Custom Engine URL"
            defaultValue={customEngine}
            onChange={(event) => setCustomEngine(event.target.value)}
          />
          <label htmlFor="custom-engine-url">Custom Engine URL</label>
        </div>
      )}
    </div>
  );
};

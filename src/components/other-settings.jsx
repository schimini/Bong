import { fromStorage } from "../hooks/use-browser-storage";
export const OtherSettings = () => {
  const [openWebsite, setOpenWebsite] = fromStorage(
    "enableOpenWebsite"
  );
  const [excludeSettings, setExcludeSettings] = fromStorage(
    "excludeSettingsApp"
  );
  const [cortanaOnly, setCortanaOnly] = fromStorage("cortanaOnly");

  return (
    <div className="flex-column">
      <div>
        <input
          type="checkbox"
          id="open-website-command"
          name="Open Website"
          checked={openWebsite}
          onChange={event => setOpenWebsite(event.target.checked)}
        />
        <label htmlFor="open-website-command">Enable &quot;open website&quot; command</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="exclude-settings"
          name="Exclude Settings"
          checked={excludeSettings}
          onChange={event => setExcludeSettings(event.target.checked)}
        />
        <label htmlFor="exclude-settings">
          Exclude searches made by the Settings app
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="cortana-only"
          name="Cortana Only"
          checked={cortanaOnly}
          onChange={event => setCortanaOnly(event.target.checked)}
        />
        <label htmlFor="cortana-only">Only redirect Cortana searches</label>
      </div>
    </div>
  );
};

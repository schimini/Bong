import { useBrowserStorage } from "../hooks/use-browser-storage";
export const OtherSettings = () => {
  const [openWebsite, setOpenWebsite] = useBrowserStorage(
    "enable_open_website",
    false
  );
  const [excludeSettings, setExcludeSettings] = useBrowserStorage(
    "exclude_settings_app",
    true
  );
  const [cortanaOnly, setCortanaOnly] = useBrowserStorage("cortana_only", true);

  return (
    <div className="flex-column">
      <div>
        <input
          type="checkbox"
          id="open-website-command"
          name="Open Website"
          checked={openWebsite}
          onChange={(e) => setOpenWebsite(e.target.checked)}
        />
        <label for="open-website-command">Enable "open website" command</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="exclude-settings"
          name="Exclude Settings"
          checked={excludeSettings}
          onChange={(e) => setExcludeSettings(e.target.checked)}
        />
        <label for="exclude-settings">
          Exclude searches made by the Settings app
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="cortana-only"
          name="Cortana Only"
          checked={cortanaOnly}
          onChange={(e) => setCortanaOnly(e.target.checked)}
        />
        <label for="cortana-only">Only redirect Cortana searches</label>
      </div>
    </div>
  );
};

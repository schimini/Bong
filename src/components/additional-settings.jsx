import { OtherSettings } from "./other-settings";
import { CustomEngineSelect } from "./custom-engine-selector";

export const AdditionalSettings = () => (
  <div className="flex-column">
    <h2>Additional Settings</h2>
    <OtherSettings/>
    <CustomEngineSelect/>
  </div>
);

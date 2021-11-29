import OptionsSync from "webext-options-sync";

export default new OptionsSync({
  defaults: {
    searchEngine: null,
    useCustomEngine: false,
    customEngine: "",
    enableOpenWebsite: false,
    excludeSettingsApp: true,
    cortanaOnly: false
  },
  migrations: [
    OptionsSync.migrations.removeUnused
  ],
  logging: true
});

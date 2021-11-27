import OptionsSync from 'webext-options-sync';

export default new OptionsSync({
	defaults: {
    search_engine: null,
    use_custom_engine: false,
		custom_engine: "",
    enable_open_website: false,
		exclude_settings_app: true,
    cortana_only: true,
	},
	migrations: [
		OptionsSync.migrations.removeUnused,
	],
	logging: true,
});
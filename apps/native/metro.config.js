// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const { withNativeWind } = require("nativewind/metro");
const path = require("node:path");

const config = withTurborepoManagedCache(
	withMonorepoPaths(
		withNativeWind(getDefaultConfig(__dirname), {
			input: "./global.css",
			configPath: "./tailwind.config.js",
		}),
	),
);

config.resolver.unstable_enablePackageExports = true;

config.resolver.disableHierarchicalLookup = true;

module.exports = config;

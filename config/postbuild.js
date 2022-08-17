const rimraf = require("rimraf");
const path = require("path");
const ncp = require("ncp").ncp;

const basePath = path.resolve(__dirname, "../../template/resources/");
const currentBuildPath = path.resolve(__dirname, "../dist/template/resources/");
const currentSourcePath = path.resolve(__dirname, "../src/");
const resources = [
	{
		name: "js",
		path: currentBuildPath,
	},
	{
		name: "css",
		path: currentBuildPath,
	},
	{
		name: "images",
		path: currentSourcePath,
	},
];

const postBuild = () => {
	resources.forEach((res) => {
		const destPath = path.resolve(basePath, res.name);
		const sourcePath = path.resolve(res.path, res.name);
		console.log("Clean:", res.name);
		rimraf.sync(destPath);
		console.log("Clean done. Copying...");
		ncp(sourcePath, destPath, () => {
			console.log("Copy:", res.name);
			console.log("Done");
		});
	});
};

module.exports = postBuild;

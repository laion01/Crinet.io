const rimraf = require("rimraf");
const path = require("path");
const ncp = require("ncp").ncp;

const basePath = path.resolve(__dirname, "../dist/template/resources/");
const currentSourcePath = path.resolve(__dirname, "../src/");
const resources = [
	{
		name: "videos",
		path: currentSourcePath,
	},
	{
		name: "pdfs",
		path: currentSourcePath,
	},
];

const postBuildVideo = () => {
	resources.forEach((resource) => {
		const destPath = path.resolve(basePath, resource.name);
		const sourcePath = path.resolve(resource.path, resource.name);
		console.log("Clean:", resource.name);
		rimraf.sync(destPath);
		console.log("Clean done. Copying...");
		console.log("sourcePath", sourcePath);
		console.log("destPath", destPath);
		ncp(sourcePath, destPath, (err) => {
			if (err) console.log(destPath, err);
			console.log("Copy:", resource.name);
			console.log("Done");
		});
	});
};

module.exports = postBuildVideo;

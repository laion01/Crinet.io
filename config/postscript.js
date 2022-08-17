const renameAssets = require("./renameAssets");
const postBuild = require("./postbuild");
const postBuildVideo = require("./postbuild-video");

renameAssets();
postBuild();
postBuildVideo();

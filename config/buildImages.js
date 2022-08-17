const path = require("path");
const ncp = require("ncp").ncp;
const del = require("del");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminWebp = require("imagemin-webp");

const src = path.resolve(__dirname, "../src");

buildImages();

function buildImages() {
	del([`${src}/images/*`, `!${src}/images/svg-icons`, `!${src}/images/svg-icons/*`, `!${src}/images/sprite.svg`])
		.then(() => {
			optimizeImages() // Оптимизируем все jpg и png с допустимой потерей качества
				.then(convertToWebP) // Конвертируем jpg и png в webp с допустимой потерей качества
				.then(moveOrigin); // Копируем все изображения из директории origin без изменений
		})
		.catch((err) => {
			throw err;
		});
}

function optimizeImages() {
	return imagemin([`${src}/images-src/compress/*.{jpg,png}`], `${src}/images`, {
		plugins: [imageminMozjpeg({ quality: 90 }), imageminPngquant({ quality: 90 })],
	}).then((files) => {
		console.log(`${files.length} image(s) optimized`);
	});
}

function convertToWebP() {
	return imagemin([`${src}/images-src/compress/*.{jpg,png}`], `${src}/images`, {
		plugins: [imageminWebp({ quality: 90 })],
	}).then((files) => {
		console.log(`${files.length} image(s) converted to .webp`);
	});
}

function moveOrigin() {
	const options = {
		filter: (name) => !/gitkeep/.test(name),
	};
	ncp(`${src}/images-src/origin`, `${src}/images`, options, (err) => {
		if (err) throw err;

		console.log("All done!");
	});
}

module.exports = buildImages;

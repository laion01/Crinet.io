<template>
	<section class="v-video">
		<video class="v-video-main" autoplay loop muted playsinline>
			<source :src="`${resourcePath}/videos/video.m4v`" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
		</video>
	</section>
</template>

<script>
export default {
	computed: {
		resourcePath() {
			console.log(this.$root.resourcePath);
			return this.$root.resourcePath;
		},
	},
};
</script>

<style>
.v-video {
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	padding-top: 70px;
	/* background-color: lightgrey; */
	&:before {
		position: absolute;
		content: "";
		right: 120px;
		top: 20px;
		width: 150px;
		height: 150px;
		z-index: -1;
		background: url("../../images/features_bg.png") center no-repeat;
		background-size: contain;
		@media (max-width: 600px) {
			display: none;
		}
	}
	&:after {
		position: absolute;
		content: "";
		left: 120px;
		top: 150px;
		width: 150px;
		height: 150px;
		z-index: -1;
		background: url("../../images/features_bg.png") center no-repeat;
		background-size: contain;
		@media (max-width: 600px) {
			display: none;
		}
	}
}
.v-video-main {
	width: 45%;
	border-radius: 10px;
	box-shadow: 5px 10px 8px 10px #dbdbdb;
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
}
</style>

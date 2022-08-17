<template>
	<section class="v-desc-block">
		<div class="tm-wrapper__desc wrapper">
			<div class="v-desc-block_text-block">
				<h2>Our goal is to connect every Crypto user, from newbies to pros, all in one Decentralized App</h2>
				<p>
					Stop jumping from Twitter for the crypto tweets, then on Telegram to chat with communities, then on TradingView for the charts, then on CryptoNews to get updated with the news,
					then on Binance for buying the dips.
				</p>
			</div>
			<div class="v-desc-block_img-block">
				<img :src="`${resourcePath}/images/desc_img.png`" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	computed: {
		resourcePath() {
			return this.$root.resourcePath;
		},
	},
};
</script>

<style>
.v-desc-block {
	padding: 70px 0 95px;
	& .tm-wrapper__desc {
		display: flex;
		justify-content: space-between;
		max-width: 1112px;
		@media (max-width: 700px) {
			display: block;
		}
	}
	@media (max-width: 1408px) {
	}
	@media (max-width: 700px) {
	}
}

.v-desc-block_text-block {
	max-width: 100%;
	width: 595px;
	padding-top: 60px;
	& h2 {
		margin-bottom: 32px;
	}
	& p {
		font-size: 24px;
		line-height: 34px;
	}
	@media (max-width: 1000px) {
		& p {
			font-size: 16px;
			line-height: 22px;
		}
	}
	@media (max-width: 700px) {
		padding-top: 20px;
		width: 100%;
		& h2 {
			text-align: center;
			margin-bottom: 15px;
		}
		& p {
			text-align: center;
			margin-bottom: 35px;
		}
	}
}

.v-desc-block_img-block {
	max-width: 430px;
	width: 100%;
	& img {
		width: 100%;
	}
	@media (max-width: 1000px) {
		width: 312px;
	}
	@media (max-width: 700px) {
		margin: 0 auto;
	}
}
</style>

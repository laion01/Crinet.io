<template>
	<section class="v-fees">
		<div class="v-fees_wave">
			<div class="wrapper">
				<div class="v-fees_title-block v-earn v-earn-title">
					<h2 class>Earn Money by sharing your ideas</h2>
				</div>

				<div class="v-earn__content__wrapper">
					<div class="v-earn__rigth">
						<img :src="`${resourcePath}/images/earn-money.png`" alt="img" />
					</div>
					<div class="v-earn__left">
						In Crinet we want to incentivize our users to share their ideas and materials, interact with others and learn from the community. Users will be rewarded by $CNT passive income
						for making actions such as posting, liking, commenting, sharing and so on! We are the first ever decentralized social network which pays its users to use the platform. Crinet
						is USE-TO-EARN!
					</div>
				</div>
			</div>
		</div>

		<div class="v-fees_exchange">
			<div class="wrapper">
				<div class="v-fees_title-block v-fees_title-exchange">
					<h2>What are the fees for the Exchange?</h2>
					<p>The Exchange will be free to use! Our main goal is to grow the Crinet Community and let it become the biggest crypto community on earth.</p>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<div>
				<ul class="v-fees_fees-list">
					<li class="v-fees_fees-item">
						<p class="v-fees_fees-item-title">Basic Plan</p>
						<img class="v-fees_fees-item-img" :src="`${resourcePath}/images/fees_icon-basic.png`" />
						<p class="v-fees_fees-item-price">
							hold
							<b>10 000 CNT</b> or less
						</p>
						<p class="v-fees_fees-fee"><b>1.4%</b> transaction fee</p>
					</li>
					<li class="v-fees_fees-item">
						<p class="v-fees_fees-item-title">Pro Plan</p>
						<img class="v-fees_fees-item-img" :src="`${resourcePath}/images/fees_icon-pro.png`" />
						<p class="v-fees_fees-item-price">
							Hold
							<b>50 000 CNT</b>
						</p>
						<p class="v-fees_fees-fee"><b>0.9%</b> transaction fee</p>
					</li>
					<li class="v-fees_fees-item">
						<p class="v-fees_fees-item-title">Diamond Plan</p>
						<img class="v-fees_fees-item-img" :src="`${resourcePath}/images/fees_icon-diamond.png`" />
						<p class="v-fees_fees-item-price">
							Hold
							<b>200 000 CNT</b>
						</p>
						<p class="v-fees_fees-fee"><b>0.4%</b> transaction fee</p>
					</li>
					<li class="v-fees_fees-item">
						<p class="v-fees_fees-item-title">Master Plan</p>
						<img class="v-fees_fees-item-img" :src="`${resourcePath}/images/fees_icon-master.png`" />
						<p class="v-fees_fees-item-price">
							Hold
							<b>500 000 CNT</b>
						</p>
						<p class="v-fees_fees-fee"><b>0%</b> transaction fee</p>
					</li>
				</ul>
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
.v-fees_wave {
	position: relative;
	z-index: -2;
	background-image: url("../../images/wave.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding-top: 25px;
	&:before {
		position: absolute;
		content: "";
		right: 100px;
		top: 0px;
		width: 221px;
		height: 221px;
		z-index: -1;
		background: url("../../images/features_bg.png") center no-repeat;
		@media (max-width: 600px) {
			display: none;
		}
	}
}
.v-earn {
	padding: 60px 0;
}
.v-earn-title {
	position: relative;
	padding: 60px 0 0 0;
}
.v-earn__content__wrapper {
	/* margin-top: 20px; */
	margin-bottom: 60px;
	display: "flex";
	align-items: center;
	@media (max-width: 1000px) {
		flex-direction: column-reverse;
	}
}
.v-earn__left {
	width: 50%;
	font-size: 20px;
	line-height: 50px;
	margin-left: 20px;
	text-align: center;

	@media (max-width: 1000px) {
		width: 100%;
		margin-left: 0;
	}

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
}

.v-earn__rigth {
	width: 50%;

	& img {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1000px) {
		width: 100%;
		& img {
			/* margin-top: 20px; */
		}
	}
}
.v-earn__content__wrapper {
	display: flex;
}
.v-fees {
	padding-bottom: 230px !important;
	@media (max-width: 1100px) {
		padding-bottom: 70px !important;
	}
}
.v-fees_title-block {
	margin: 0 auto;
	width: 100%;
	max-width: 850px;
	text-align: center;
	& p {
		font-size: 24px;
		line-height: 34px;
		margin-bottom: 60px;
	}
	@media (max-width: 600px) {
		& p {
			font-size: 18px;
			line-height: 28px;
			margin: 16px 0 24px;
		}
	}
}
.v-fees_exchange {
	position: relative;
	width: 100%;
	&:before {
		position: absolute;
		content: "";
		left: 100px;
		top: 0px;
		width: 221px;
		height: 221px;
		z-index: -1;
		background: url("../../images/features_bg.png") center no-repeat;
		@media (max-width: 600px) {
			display: none;
		}
	}
}
.v-fees_title-exchange {
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 850px;
	text-align: center;
	& p {
		font-size: 24px;
		line-height: 34px;
		margin-bottom: 60px;
	}
	@media (max-width: 600px) {
		& p {
			font-size: 18px;
			line-height: 28px;
			margin: 16px 0 24px;
		}
	}
}
.v-fees_fees-list {
	display: flex;
	justify-content: space-between;
	@media (max-width: 1100px) {
		flex-wrap: wrap;
		justify-content: space-around;
	}
}

.v-fees_fees-item {
	width: calc(25% - 18px);
	background-color: color-mod(var(--c-gray-light) a(50%));
	border-radius: 10px;
	padding: 24px 24px 0 24px;
	transition: background-color 0.4s ease;
	&:hover {
		background-color: #eaf5ff;
	}
	@media (max-width: 1100px) {
		width: 40%;
		flex-shrink: 0;
		margin-bottom: 30px;
		min-width: 300px;
	}
}

.v-fees_fees-item-title {
	font-weight: 500;
	font-size: 28px;
	line-height: 34px;
	letter-spacing: -0.4px;
	margin: 0 0 32px 0;
}

.v-fees_fees-item-img {
	display: block;
	margin: 0 auto 45px;
}

.v-fees_fees-item-price {
	font-size: 18px;
	line-height: 23px;
	padding: 13px 0;
	border-top: 1px solid #aab2c1;
	border-bottom: 1px solid #aab2c1;
	text-align: center;
	margin: 0;
}

.v-fees_fees-fee {
	font-size: 18px;
	line-height: 23px;
	padding: 13px 0;
	text-align: center;
	margin: 0;
}
</style>

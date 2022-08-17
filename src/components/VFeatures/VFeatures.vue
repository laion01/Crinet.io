<template>
	<section class="v-features" id="menu-features">
		<div class="wrapper">
			<h2 class="v-features_title">WE ARE CREATING THESE 6 FEATURES, ALL IN ONE APP!</h2>
			<p class="v-features_desc">Thanks to CRINET, the Crypto Community will be finally connected inside one decentralized application available both on desktop and mobile (iOS&Android)</p>
			<div class="v-features-block">
				<div class="v-features_item" :class="{ __active: currentTab && item.id === currentTab.id }" v-for="item in features" :key="item.id">
					<div v-if="currentTab && currentTab.id === item.id" class="v-features_item-frame" :class="item.scrollable ? 'v-features_item-frame--scrollable' : ''">
						<img class="v-features_item-frame__menu" :src="item.menu" />
						<div class="v-features_item_wrapper">
							<img class="v-features_item-mockup" :class="item.scrollable ? 'v-features_item-mockup--scrollable' : ''" :src="item.img" />
						</div>
					</div>
					<div>
						<div
							v-if="currentTab && currentTab.id === item.id && item.img2"
							class="v-features_item-frame v-features_item-frame2"
							:class="item.scrollable ? 'v-features_item-frame--scrollable' : ''"
						>
							<div class="v-features_item_wrapper">
								<img class="v-features_item-mockup" :class="item.scrollable ? 'v-features_item-mockup--scrollable' : ''" :src="item.img2" />
							</div>
						</div>
					</div>

					<!-- <img:src="item.img"> -->
					<h3 class="v-features_item-title" @click="activatedTab(item)">
						{{ item.title }}
						<span class="v-features_item-title-icon" />
					</h3>
					<img v-if="currentTab && currentTab.id === item.id" class="v-features_item-img-mobile" :src="item.imgMobile" @click="showModal = true" />
					<p class="v-features_item-text" v-html="item.text"></p>
				</div>
			</div>

			<div class="v-download">
				<h1>Download at</h1>
				<div class="v-download_buttons">
					<div class="v-download_button">
						<img src="/images/download-appstore.svg" />
					</div>
					<div class="v-download_button">
						<img src="/images/download-googleplay.svg" />
					</div>
				</div>
			</div>
		</div>
		<v-modal v-if="showModal" @close="showModal = false">
			<div class="v-features_modal">
				<p class="v-features_modal-title">{{ currentTab.title }}</p>
				<img :src="currentTab.imgMobileBig" />
			</div>
		</v-modal>
	</section>
</template>

<script>
import VModal from "../VModal/VModal";
export default {
	components: {
		VModal,
	},
	data() {
		return {
			showModal: false,
			currentTab: null,
			features: [
				{
					id: 1,
					title: "The Social Network",
					text: "You’ll be able to freely share your ideas and thoughts about everything inside the crypto world like Cryptocurrencies, NFTs, De-fi, Farming, and so on… <br><br> This will let newbies learn from their favourite crypto pros & crinfluencers - at the same time, will let pros share their material and monetize. <br><br> \
    • Share everything you want about the Crypto World <br><br>\
    • Like, comment, repost and share the posts <br><br>\
    • Follow your favorite crypto pros <br><br>\
    • And much more…",
					img: "/images/home.png",
					menu: "/images/menunone.png",
					scrollable: true,
					imgMobile: "/images/home.png",
					imgMobileBig: "/images/home.png",
				},
				{
					id: 4,
					title: "Chats",
					text: "Join Private Chats, Groups and Channels of your favorite communities, directly on the App! You’ll be able to create safe Public & Private Chats, Groups and Channels. All the “Chats” section will be completely safe thanks to end-to-end encryption.",
					img: "/images/chats.png",
					menu: "/images/menuchats.png",
					scrollable: true,
					imgMobile: "/images/chats.png",
					imgMobileBig: "/images/chats.png",
				},
				{
					id: 2,
					title: "Discover",
					text: "Are you undecided about buying a crypto? The goal of this section is to get you the latest informations and discussions about the crypto you’re looking for, from users all from around the world. <br><br> You’ll see what people think about that crypto, if it’s mostly bullish or bearish, if it’s the right moment to buy it, and so on. You’ll never be alone again when buying! <br><br> Stay updated with the latest news about the Crypto Market, BTC and the Stock Market. Track Market moves with the Marketcap Charts, BTC Dominance, Hashrates Charts and much more for Crypto nerds!",
					img: "/images/discoverprimary.png",
					img2: "/images/discoversecondary.png",
					menu: "/images/menudiscovery.png",
					scrollable: true,
					imgMobile: "/images/discoverprimary.png",
					imgMobileBig: "/images/discoverprimary.png",
				},
				{
					id: 3,
					title: "Charts",
					text: "This is your chart-world. You’ll deeply analyze all the charts you need to, create your watchlist, set up custom alerts and much more. <br><br> You will also be able to find all the top movers based on their niches: <br><br> \
    • Top Gainers <br><br>\
    • Top Losers <br><br>\
    • Top Metaverse of the moment <br><br>\
    • Top De-Fi of the moment <br><br>\
    • Top Oracle of the moment <br><br>\
    • Top APY Staking of the moment <br><br>\
    • And much more!",
					img: "/images/chartsgainers.png",
					img2: "/images/chartslosers.png",
					menu: "/images/menucharts.png",
					scrollable: true,
					imgMobile: "/images/chartsgainers.png",
					imgMobileBig: "/images/chartsgainers.png",
				},
				{
					id: 5,
					title: "Wallet",
					text: "Keep track of your assets and buy, sell, transfer or swap your best cryptos at any time. Stake & Farm CNT with the highest APYs on the market.",
					img: "/images/wallet.png",
					menu: "/images/menuwallet.png",
					scrollable: true,
					imgMobile: "/images/wallet.png",
					imgMobileBig: "/images/wallet.png",
				},
				{
					id: 6,
					title: "Profile",
					text: "This is your profile’s section. Track all your posts, replies and show your NFT inventory to others. <br><br> Users will be able to set their own NFTs as profile picture.  ",
					img: "/images/profile.png",
					menu: "/images/menunone.png",
					scrollable: true,
					imgMobile: "/images/profile.png",
					imgMobileBig: "/images/profile.png",
				},
				{
					id: 7,
					title: "Notifications",
					text: "Get notified for everything among you. <br> You’ll get notifications for your price alerts, people who follow you or interact with your posts.",
					img: "/images/notifications.png",
					menu: "/images/menunone.png",
					scrollable: true,
					imgMobile: "/images/notifications.png",
					imgMobileBig: "/images/notifications.png",
				},
			],
		};
	},
	created() {
		this.activatedTab(this.features[0]);
	},
	methods: {
		activatedTab(tab) {
			if (this.currentTab === tab) {
				return;
			}
			this.currentTab = tab;
		},
	},
};
</script>

<style>
.v-features {
	padding-bottom: 20px;
	@media (max-width: 1000px) {
		padding-bottom: 20px;
	}
}

.v-features .wrapper {
	position: relative;
	&:before {
		position: absolute;
		content: "";
		right: 20px;
		top: 310px;
		width: 221px;
		height: 221px;
		background: url("../../images/features_bg.png") center no-repeat;
		@media (max-width: 600px) {
			display: none;
		}
	}
	@media (max-width: 1408px) {
		padding: 100px 40px 55px;
	}
	@media (max-width: 1150px) {
		padding: 20px 10px 0;
	}
}
.v-features_title {
	font-weight: 600;
	font-size: 56px;
	line-height: 70px;
	text-align: center;
	letter-spacing: -0.8px;
	background: linear-gradient(150deg, #9216c6 20%, #2c96fd 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: 1000px) {
		font-size: 40px;
		line-height: 44px;
	}
	@media (max-width: 768px) {
		font-size: 32px;
		line-height: 42px;
	}
}
.v-features_desc {
	font-weight: 600;
	padding: 0 110px;
	font-size: 24px;
	line-height: 34px;
	text-align: center;
	margin-bottom: 195px;
	background: linear-gradient(150deg, #9216c6 20%, #2c96fd 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: 1000px) {
		font-size: 16px;
		line-height: 22px;
		margin-bottom: 80px;
		padding: 0;
	}
}
.v-features-block {
	position: relative;
}

.v-features_item {
	width: 615px;
	&.__active {
		& .v-features_item-title-icon {
			border: 2px solid #2c96fd;
			&:after {
				opacity: 0;
			}
			&:before {
				background-color: #2c96fd;
			}
		}
		& .v-features_item-text {
			height: auto;
			opacity: 1;
			margin: 0 0 40px 0;
		}
	}
	@media (max-width: 1000px) {
		width: 100%;
	}
}

.v-features_item-img {
	position: absolute;
	right: 0;
	top: -90px;
	max-height: 780px;
	@media (max-width: 1200px) {
		width: 60%;
	}
	@media (max-width: 1000px) {
		display: none;
	}
}

.v-features_item-frame {
	position: absolute;
	right: 210px;
	top: -70px;
	height: 700px;

	@media (max-width: 1260px) {
		width: 60%;
		right: 0px;
	}

	@media (max-width: 1000px) {
		display: none;
	}

	width: 370px;
	background: url("/images/frame.png");
	background-size: 100% 100%;
	overflow: hidden;
	z-index: 10;
}

.v-features_item-frame2 {
	right: 100px;
	top: -30px;
	z-index: 9;
	height: 620px;
	width: 290px;
	transform: rotate(10deg);
}

.v-features_item-frame2::after {
	display: none;
}

.v-features_item-mockup {
	position: relative !important;
	width: 100%;
	height: 100%;
	z-index: 1 !important;
}

.v-features_item-frame__menu {
	position: absolute;
	margin-top: 600px;
	width: 320px;
	height: 73px;
	z-index: 100;
	margin-left: 27.2px;
	/* opacity: 0.95; */
	border-right: 2px black solid;
	border-left: 2px black solid;
	border-radius: 0 0 35px 35px;
}

.v-features_item-frame--scrollable .v-features_item_wrapper {
	overflow-y: scroll;
}

.v-features_item_wrapper {
	position: relative;
	width: calc(100% - 54px);
	height: calc(100% - 189px);
	left: 29px;
	right: 25px;
	top: 111px;
	bottom: 79px;
	background-color: #fff;
	-ms-overflow-style: none;
	scrollbar-width: thin;
	scrollbar-color: radial-gradient(94.45% 83.75% at 50% 0%, #2c96fd 0%, #9216c6 100%);
	/* overflow: hidden; */
	z-index: 9 !important;
}

.v-features_item_wrapper::-webkit-scrollbar {
	width: 5px;
	border-radius: 10px;
}

.v-features_item_wrapper::-webkit-scrollbar-track {
	background-color: #eee;
	border-radius: 10px;
}

.v-features_item_wrapper::-webkit-scrollbar-thumb {
	/* box-shadow: inset 0 0 6px #9216c6; */
	background: radial-gradient(94.45% 83.75% at 50% 0%, #2c96fd 0%, #9216c6 100%);
	opacity: 0.5;
	border-radius: 10px;
}

.v-features_item-frame--scrollable {
	margin-bottom: 10px;
}

.v-features_item-mockup--scrollable {
	height: auto;
	min-height: 100% !important;
}

.v-features_item-img-mobile {
	display: none;
	@media (max-width: 1000px) {
		display: block;
		width: 100%;
		margin-bottom: 24px;
		height: 550px;
		border: 1px #eee solid;
		border-radius: 10px;
		-o-object-fit: cover;
		object-fit: cover;
		object-position: top;
		margin-left: auto;
		margin-right: auto;
		max-width: 70%;
	}
	@media (max-width: 640px) {
		max-width: 90%;
	}
}

.v-features_item-title {
	position: relative;
	padding: 4px 22px 4px 60px;
	margin: 0 0 25px 0;
	font-weight: 500;
	font-size: 36px;
	line-height: 45px;
	letter-spacing: -0.8px;
	transition: background-color 0.3s ease;
	display: inline-block;
	border-radius: 40px;
	cursor: pointer;
	&:hover {
		background-color: #eaf5ff;
		& .v-features_item-title-icon {
			border: 2px solid #2c96fd;
		}
		& .v-features_item-title-icon:before,
		& .v-features_item-title-icon:after {
			background-color: #2c96fd;
		}
	}
	@media (max-width: 600px) {
		font-size: 26px;
		line-height: 32px;
	}
}

.v-features_item-title-icon {
	display: block;
	position: absolute;
	width: 36px;
	height: 36px;
	left: 10px;
	top: 9px;
	border-radius: 50%;
	border: 2px solid var(--c-accent);
	transition: all 0.6s ease;
	&:before,
	&:after {
		position: absolute;
		content: "";
		background: var(--c-accent);
		width: 14px;
		height: 2px;
		left: 9px;
		top: 16px;
		transition: background-color 0.6s ease, opacity 0.6s ease;
	}
	&:before {
		left: 9px;
	}
	&:after {
		transform: rotate(90deg);
	}
	@media (max-width: 600px) {
		width: 32px;
		height: 32px;
		top: 4px;
		&:before,
		&:after {
			width: 12px;
			left: 8px;
			top: 13px;
		}
	}
}

.v-features_item-text {
	padding-left: 60px;
	margin: 0;
	font-size: 20px;
	line-height: 28px;
	height: 0;
	opacity: 0;
	@media (max-width: 1000px) {
		padding: 0;
		font-size: 16px;
		line-height: 22px;
	}
}

.v-features_modal-title {
	font-weight: 500;
	font-size: 26px;
	line-height: 32px;
	margin: 26px 0 31px;
	text-align: left;
	letter-spacing: -0.8px;
	color: var(--c-white);
}

.v-features_modal img {
	width: 100%;
	height: 100%;
}

.v-download {
	margin: 30px 0;
}

.v-download h1 {
	margin-bottom: 30px;

	@media (max-width: 1000px) {
		text-align: center;
	}
}

.v-download_buttons {
	display: flex;
	flex-direction: row;
	@media (max-width: 1000px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
}

.v-download_button {
	width: 220px;
	border: 1px #eee solid;
	border-radius: 10px;
	position: relative;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	/* &:hover {
    border: 1px #ccc solid;
  } */
	& img {
		width: 100%;
		height: 100%;
	}

	&:first-child {
		@media (max-width: 1000px) {
			margin-bottom: 40px;
			margin-right: 0;
		}
	}
}

.v-download_button::after {
	position: absolute;
	content: "";
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #eee;
	opacity: 0.6;
	border-radius: 10px;
	cursor: default;
}

.v-download_button::before {
	position: absolute;
	content: "Coming soon";
	bottom: -25px;
	opacity: 0.6;
	border-radius: 10px;
	cursor: default;
}
</style>

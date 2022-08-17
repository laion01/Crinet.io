<template>
	<section class="v-team wrapper" id="menu-team">
		<h2 class="v-team_title">Our team</h2>
		<div class="v-team_scroll-block">
			<ul class="v-team_list">
				<li class="v-team_item">
					<div class="v-time__wrapper">
						<div class="v-team_img-block v-team-img">
							<img :src="`${resourcePath}/images/team_first.png`" />
						</div>
						<p class="v-team_name">Andrea Candiani</p>
						<p class="v-team_position">CEO & Founder</p>

						<a title="Discover on Linkedin" class="v-taem-link" href="https://ae.linkedin.com/in/andrea-candiani-a0aa34209" target="_blank"></a>
					</div>
				</li>

				<li class="v-team_item">
					<div class="v-time__wrapper">
						<div class="v-team_img-block v-team-img">
							<img :src="`${resourcePath}/images/team_second.png`" />
						</div>
						<p class="v-team_name">Mattia Ingenito</p>
						<p class="v-team_position">CTO</p>

						<a title="Discover on Linkedin" class="v-taem-link" href="https://it.linkedin.com/in/mattia-ingenito-5b5389164" target="_blank"></a>
					</div>
				</li>

				<li class="v-team_item">
					<div class="v-time__wrapper">
						<div class="v-team_img-block v-team-img">
							<img :src="`${resourcePath}/images/team_third.png`" />
						</div>
						<p class="v-team_name">Pasquale Polverino</p>
						<p class="v-team_position">Community Manager</p>
						<a title="Discover on Linkedin" class="v-taem-link" href="https://www.linkedin.com/in/pasquale-polverino-a842b7227" target="_blank"></a>
					</div>
				</li>

				<li class="v-team_item">
					<div class="v-time__wrapper">
						<div class="v-team_img-block v-team-img">
							<img :src="`${resourcePath}/images/team_fourth.png`" />
						</div>
						<p class="v-team_name">Cristian Messinese</p>
						<p class="v-team_position">CFO</p>
						<a title="Discover on Linkedin" class="v-taem-link" href="https://it.linkedin.com/in/cristian-messinese-5b45971ba" target="_blank"></a>
					</div>
				</li>
			</ul>
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
.v-team_title {
	position: relative;
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
.v-team {
	padding-bottom: 70px;
	& h2 {
		margin-bottom: 70px;
		@media (max-width: 600px) {
			text-align: center;
			margin-bottom: 20px;
		}
	}
	&.wrapper {
		@media (max-width: 750px) {
			padding: 0 0 70px 10px;
		}
	}
}

.v-time__wrapper {
	position: relative;
}

.v-time__wrapper:hover .v-team-img > img {
	transform: scale(1.1);
	transition: 0.3s linear;
}

.v-team-img > img {
	transition: 0.3s linear;
}

.v-team_scroll-block {
	@media (max-width: 750px) {
		overflow: scroll;
	}
}

.v-taem-link {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.v-team_list {
	display: flex;
	justify-content: space-between;
	max-width: 1085px;
	margin: 0 auto;
	padding-bottom: 10px;
	@media (max-width: 750px) {
		width: 750px;
		/* overflow: scroll; */
	}
}

.v-team_item {
	/* width: 180px; */
	position: relative;
	&:nth-child(2n) {
		margin-top: 120px;
	}
	@media (max-width: 750px) {
		&:nth-child(2n) {
			margin: 0;
		}
	}
}
.v-team_img-block {
	position: relative;
	margin-bottom: 20px;
}

.v-team_img-block img {
	width: 200px;
	height: 200px;
	/* position: relative; */
	top: -25px;
}

.v-team_name {
	font-weight: 500;
	font-size: 22px;
	line-height: 26px;
	text-align: center;
	letter-spacing: -0.4px;
	margin: 0 0 4px 0;
}
.v-team_position {
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	letter-spacing: -0.4px;
	color: var(--c-link);
	margin: 0;
}
</style>

import Vue from "vue";
import VHamburger from "./components/VUE/VHamburger";
import VHeader from "./components/VHeader/VHeader";
import VHero from "./components/VHero/VHero";
import VDescBlock from "./components/VDescBlock/VDescBlock";
import VVideo from "./components/VVideo/VVideo";
import VFeatures from "./components/VFeatures/VFeatures";
import VFees from "./components/VFees/VFees";
import VBuyCryptos from "./components/VBuyCryptos/VBuyCryptos";
import VFooter from "./components/VFooter/VFooter";
import VTokenomics from "./components/VTokenomics/VTokenomics";
import VTeam from "./components/VTeam/VTeam";
import VRoadmap from "./components/VRoadmap/VRoadmap";

import { resourcePath, screenWidth } from "@/mixins/index";

import { lazyLoad } from "@/plugins/index";
let VueScrollTo = require("vue-scrollto");

Vue.use(lazyLoad);
Vue.use(VueScrollTo);
new Vue({
	components: {
		VHamburger,
		VHeader,
		VHero,
		VVideo,
		VDescBlock,
		VFeatures,
		VFees,
		VBuyCryptos,
		VFooter,
		VTokenomics,
		VTeam,
		VRoadmap,
	},
	mixins: [resourcePath, screenWidth],
	data() {
		return {
			resourcePath: "",
		};
	},
	created() {
		this.setResourcePath();
	},
	methods: {
		setResourcePath() {
			const resourcePathEl = document.getElementById("resource-path");
			if (resourcePathEl) {
				this.resourcePath = resourcePathEl.getAttribute("data-path");
			}
		},
		scrollTo(id) {
			let el = document.getElementById(id);
			if (el) {
				this.$scrollTo(el, { offset: -100 });
			}
		},
	},
}).$mount("#app");

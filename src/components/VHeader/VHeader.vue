<template>
  <header>
    <v-nav v-if="menu" :list="menu"></v-nav>
  </header>
</template>

<script>
import VNav from "../VNav/VNav";
export default {
  components: {
    VNav,
  },
  data() {
    return {
      menu: [
        { title: "Join Pre-launch", anchor: "buy-on" },
        { title: "Project", anchor: "menu-features" },
        { title: "Roadmap", anchor: "menu-roadmap" },
        { title: "Tokenomics", anchor: "menu-tokenomics" },
        { title: "Team", anchor: "menu-team" },
      ],
    };
  },
};
</script>

<style scoped></style>

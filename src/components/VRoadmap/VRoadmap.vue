<template>
  <section class="v-roadmap" id="menu-roadmap">
    <h2>Roadmap</h2>
    <div class="v-roadmap_info-block" v-if="currentTab">
      <img
        class="v-roadmap_info-img"
        :src="`${resourcePath}/images/roadmap_img-step${currentTab.id}.png`"
      />
      <h4>{{ tabsInfo[currentTab.id - 1].title }}</h4>
      <ul class="v-roadmap_info-block-list">
        <li
          class="v-roadmap_info-block-item"
          v-for="(item, index) in tabsInfo[currentTab.id - 1].list"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="v-roadmap_scroll-block">
      <ul class="v-roadmap_tabs-list">
        <li
          class="v-roadmap_tabs-item"
          :class="{ __active: currentTab && currentTab.id === tab.id }"
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab(tab)"
        >
          <div :class="tab.done ? 'v-roadmap_tab--done' : '' " class="v-roadmap_tab">{{ tab.id }}</div>
          <p class="v-roadmap_tab-title">{{ tab.title }}</p>
          <p class="v-roadmap_tab-subtitle">{{ tab.subtitle }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentTab: null,
      tabs: [
        {
          title: "Phase 1",
          subtitle: "Q2 2021",
          id: 1,
          done: true
        },
        {
          title: "Phase 2",
          subtitle: "Q3 2021",
          id: 2,
          done: true
        },
        {
          title: "Phase 3",
          subtitle: "Q4 2021",
          id: 3,
          done: true
        },
        {
          title: "Phase 4",
          subtitle: "Q1 2022",
          id: 4,
        },
        {
          title: "Phase 5",
          subtitle: "Q2 2022",
          id: 5,
        },
        {
          title: "Phase 6",
          subtitle: "Q3—Q4 2022",
          id: 6,
        },
      ],
      tabsInfo: [
        {
          id: 1,
          title: "Phase 1, Q2 2021",
          list: [
            "Market research",
            "R&D confirming the feasibility of the project",
            "Validating business model",
            "Securing strategic partners & advisor",
            "Creating marketing strategy",
            "Establishing 3 year plan & vision",
          ],
        },
        {
          id: 2,
          title: "Phase 2, Q3 2021",
          list: [
            "First Core Team Formation",
            "BETA Website",
            "Development team formation",
            "Litepaper release & distribution",
          ],
        },
        {
          id: 3,
          title: "Phase 3, Q4 2021",
          list: [
            "Online community building",
            "Marketing team formation",
            "First marketing campaign",
            "Liquidity locked",
            "Website V.1",
          ],
        },
        {
          id: 4,
          title: "Phase 4, Q1 2022",
          list: [
            "ICO Launch - Presale",
            "CEX Listings",
            "Big marketing campaign",
            "First stage APP development",
            "First APP Beta release",
            "Initial negotiations with CEXs",
          ],
        },
        {
          id: 5,
          title: "Phase 5, Q2 2022",
          list: [
            "Public release of the APP v.1 on iOS & Android",
            "Biggest marketing campaigns ever",
            "Team expansion",
            "Crypto Celebrities Partnerships",
            "Other CEX listing tier 1/2",
          ],
        },
        {
          id: 6,
          title: "Phase 6, Q3—Q4 2022",
          list: [
            "Publishing constant updates",
            "Team expansion",
            "Biggest Marketing Campaigns in Crypto history",
            "Make CRINET the most used Decentralized Social network in the world"
          ],
        },
      ],
    };
  },
  computed: {
    resourcePath() {
      return this.$root.resourcePath;
    },
  },
  created() {
    this.activeTab(this.tabs[3]);
  },
  methods: {
    activeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style>
.v-roadmap {
  position: relative;
  background: #eaf5ff;
  border-radius: 20px;
  padding: 64px 125px 45px 113px;
  margin-bottom: 180px;
  & h2 {
    margin-bottom: 55px;
  }
  @media (max-width: 1100px) {
    padding: 64px 64px 45px;
    margin-bottom: 90px;
  }
  @media (max-width: 600px) {
    padding: 24px 0 24px 24px;
    & h2 {
      margin-bottom: 32px;
      text-align: center;
    }
  }
}

.v-roadmap_info-block {
  min-height: 400px;
  & h4 {
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.4px;
    margin: 0 0 16px 0;
  }
  @media (max-width: 1100px) {
    min-height: auto;
    margin-bottom: 32px;
  }
  @media (max-width: 600px) {
    & h4 {
      font-size: 20px;
      line-height: 24px;
      margin: 0 0 8px 0;
    }
  }
}

.v-roadmap_info-img {
  position: absolute;
  top: 80px;
  right: 195px;
  height: 402px;
  width: auto;
  @media (max-width: 1300px) {
    right: 80px;
  }
  @media (max-width: 1100px) {
    position: static;
    height: 300px;
    display: block;
    margin: 0 auto 32px;
  }
  @media (max-width: 600px) {
    height: 160px;
  }
}

.v-roadmap_info-block-list {
  @media (max-width: 600px) {
    padding-right: 24px;
    width: auto;
  }
  width: 65%;
}

.v-roadmap_info-block-item {
  position: relative;
  font-size: 24px;
  line-height: 38px;
  padding-left: 30px;
  &:before {
    position: absolute;
    content: "";
    left: 2px;
    top: 19px;
    width: 18px;
    height: 1px;
    background-color: var(--c-accent);
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 26px;
    padding-left: 20px;
    &:before {
      width: 12px;
      top: 12px;
    }
  }
}

.v-roadmap_scroll-block {
  @media (max-width: 1100px) {
    overflow: scroll;
  }
}

.v-roadmap_tabs-list {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 80px;
    top: 20px;
    height: 1px;
    background-color: #d5e6f6;
    z-index: -1;
  }

  @media (max-width: 700px) {
      &:after {
        left: 20px;
      }
  }

  @media (max-width: 1100px) {
    width: 650px;
    height: 100px;
    padding: 0 15px;


  }
}

.v-roadmap_tabs-item {
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    /* content: ""; */
    top: 20px;
    width: 160px;
    height: 2px;
    left: 40px;
    background-color: #d5e6f6;
  }
  &:last-child {
    &:before {
      display: none;
    }
  }
  &:hover {
    & .v-roadmap_tab {
      &:before {
        opacity: 0;
      }
      &::after {
      display: none;
    }
    }
    & .v-roadmap_tab-title,
    & .v-roadmap_tab-subtitle {
      color: var(--c-accent);
    }
  }
  &.__active {
    & .v-roadmap_tab {
      &:before {
        opacity: 0;
      }
      &::after {
      display: none;
    }
    }
    & .v-roadmap_tab-title {
      /* font-weight: 600; */
      text-shadow: 0.2px 0px black;
    }
    & .v-roadmap_tab-subtitle {
      color: var(--c-black);
    }
  }
  @media (max-width: 1100px) {
    flex-shrink: 0;
    &:before {
      width: 68px;
      top: 16px;
    }
  }
}

.v-roadmap_tab-title {
  font-size: 18px;
  line-height: 20px;
  margin: 0 0 7px 0;
  transition: color 0.4s ease;
  @media (max-width: 1100px) {
    font-size: 16px;
    line-height: 18px;
  }
}

.v-roadmap_tab-subtitle {
  font-size: 14px;
  line-height: 15px;
  color: #aab2c1;
  margin: 0;
  transition: color 0.4s ease;
  @media (max-width: 1100px) {
    font-size: 12px;
    line-height: 13px;
  }
}

.v-roadmap_tab {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: radial-gradient(
    94.45% 83.75% at 50% 0%,
    #2c96fd 0%,
    #9216c6 100%
  );
  opacity: 0.87;
  color: var(--c-white);
  border-radius: 50%;
  margin-bottom: 16px;
  box-shadow: 0 0 0 8px #eaf5ff;

  &:before {
    position: absolute;
    content: "";
    width: 36px;
    height: 36px;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: var(--c-white);
    transition: opacity 0.4s ease;
  }
  &.v-roadmap_tab--done::after {
    position: absolute;
    content: "✓";
    font-size: 1.2rem;
    color: #9216c6;
  }
  &:hover {
    &:before {
      opacity: 0;
    }
    &::after {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    width: 35px;
    height: 35px;
    &:before {
      width: 31px;
      height: 31px;
    }
  }
}
</style>

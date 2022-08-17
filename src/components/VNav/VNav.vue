<template>
  <nav class="v-nav">
    <div class="wrapper">
      <div class="v-nav__logo-block">
        <img :src="`${resourcePath}/images/crinet.png`" />
      </div>
      <ul class="v-nav__nav-list">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="v-nav__nav-item"
          :data-href="item.anchor"
          @click="$root.scrollTo(item.anchor)"
        >
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
      <div class="v-nav__btns">
        <v-button
          onclick="location.href = '../../pdfs/whitepaper.pdf';"
          class="v-nav_btn v-button"
          :link="'/images/icon_doc.png'"
          gradient
          >Whitepaper</v-button
        >
        <v-button
          onclick="location.href = '../../pdfs/audit.pdf';"
          class="v-nav_btn v-button"
          :link="'/images/icon_doc.png'"
          gradient
          >Audit</v-button
        >
        <v-button
          onclick="location.href = 'https://www.figma.com/proto/AnciupTXyPT0Us6SSaOP0v/Crinet-new-(Copy)?page-id=211%3A1386&node-id=211%3A3347&viewport=351%2C48%2C0.53&scaling=min-zoom&starting-point-node-id=211%3A3347';"
          class="v-nav_btn v-button __link"
          >Test demo</v-button
        >
        <!-- <v-button onclick="window.open('/pitchdeck.pdf', '_blank');" class="v-nav_btn v-button __link">Pitchdeck</v-button> -->
        <a
          href="../../pdfs/pitchdeck.pdf"
          class="v-button v-nav_mobile-btn __link"
          >Pitchdeck</a
        >
      </div>
      <v-hamburger
        class="v-nav_hamburger"
        @click="isOpen = !isOpen"
        :is-open="isOpen"
      ></v-hamburger>
    </div>
    <div class="v-nav_mobile-menu" v-if="isOpen">
      <ul class="v-nav_nav-mobile-list">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="v-nav__nav-item __mobile"
          :data-href="item.anchor"
          @click="$root.scrollTo(item.anchor)"
        >
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
      <div class="v-nav_btn-mobile-block">
        <v-button
          onclick="location.href = '../../pdfs/whitepaper.pdf';"
          class="v-nav_mobile-btn"
          :link="'/images/icon_doc.png'"
          gradient
          >Whitepaper</v-button
        >
        <v-button
          onclick="location.href = '../../pdfs/audit.pdf';"
          class="v-nav_mobile-btn"
          :link="'/images/icon_doc.png'"
          gradient
          >Audit</v-button
        >
        <v-button
          onclick="location.href = 'https://www.figma.com/proto/AnciupTXyPT0Us6SSaOP0v/Crinet-new-(Copy)?page-id=211%3A1386&node-id=211%3A3347&viewport=351%2C48%2C0.53&scaling=min-zoom&starting-point-node-id=211%3A3347';"
          class="v-button v-nav_mobile-btn __link"
          >Test demo</v-button
        >
        <!-- <v-button onclick="window.open('/pitchdeck.pdf', '_blank');" class="v-button v-nav_mobile-btn __link">Pitchdeck</v-button> -->
        <a
          href="../../pdfs/Source(delivery)-4agg.pdf"
          class="v-button v-nav_mobile-btn __link"
          >Pitchdeck</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import VButton from "../VUE/VButton";
import VHamburger from "../VUE/VHamburger";
export default {
  components: {
    VButton,
    VHamburger,
  },
  props: {
    list: { type: Array },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    resourcePath() {
      return this.$root.resourcePath;
    },
  },
};
</script>

<style>
.v-nav {
  position: fixed;
  width: 99%;
  min-height: 56px;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-radius: 6px;
  top: 8px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(120px);
  z-index: 50;
  & .wrapper {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1500px;
  }
  @media (max-width: 1000px) {
    width: calc(100% - 16px);
    margin: 0 auto;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(120px);
    border-radius: 6px;
    left: 0;
    right: 0;
    & .wrapper {
      padding: 0 16px;
    }
  }
}

.v-nav__logo-block {
  height: 36px;
  min-width: 130px;
  & img {
    width: 100%;
  }
}

.v-nav__nav-list {
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
}

.v-nav_btn {
  @media (max-width: 1000px) {
    display: none;
  }
}

.v-nav__nav-item {
  margin-left: 50px;
  font-family: var(--f-main);
  cursor: pointer;
  & a {
    display: block;
    position: relative;
    color: var(--c-black);
    font-family: var(--f-main);
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 56px;
    transition: all 0.4s ease;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: 0;
      height: 3px;
      background: linear-gradient(103.53deg, #9216c6 0%, #2c96fd 100%);
      transition: width 0.3s ease;
    }
  }
  &:hover {
    & a {
      background: linear-gradient(150deg, #9216c6 20%, #2c96fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:before {
        width: 100%;
      }
    }
  }
  &.__mobile {
    height: 58px;
    border-top: 1px solid var(--c-white);
    margin-left: 0;
    &:last-child {
      border-bottom: 1px solid var(--c-white);
    }
    & a {
      padding-left: 16px;
    }
  }
  @media (max-width: 1200px) {
    margin-left: 20px;
    & a {
      font-size: 14px;
      line-height: 32px;
    }
  }
}

.v-nav_hamburger {
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
}

.v-nav_btn-mobile-block {
  padding: 16px;
  margin: 0px 10px;
  & .v-button {
    width: 100%;
    height: 50px;
    @media (max-width: 1000px) {
      margin: 10px 0;
    }
  }
}

.v-nav__btns {
  display: flex;
  flex-direction: row;
  & .v-button {
    margin: 0px 10px;
    /* width: 100%; */
    height: 40px;
  }
  & a {
    text-decoration: none;
  }
}
</style>

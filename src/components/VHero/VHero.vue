<template>
  <section class="v-hero" id="menu-hero">
    <div class="wrapper">
      <div class="v-hero_text-block">
        <h1>
          The first Social Network designed
          <br />for the Crypto Community
        </h1>
        <p>
          Learn, Build
          <br />and Share Crypto ideas.
          <br />All-in-one Decentralized App
        </p>
        <div class="v-hero_btn-block">
          <v-button @click="$root.scrollTo('buy-on')" data-href="buy-on" gradient>Join presale</v-button>
          <v-button @click="() => openLink()">Test demo</v-button>
        </div>
      </div>
      <img :src="`${resourcePath}/images/hero_phone.png`" class="v-hero_img-phone" />
      <p class="v-hero_left-text">
        Interact with other users about your favorite cryptos, get updated with the latest news, keep a look at the charts and buy the dips,
        <br />all in ONE dAPP!
      </p>
    </div>
  </section>
</template>

<script>
import VButton from "../VUE/VButton";
export default {
  components: {
    VButton,
  },
  computed: {
    resourcePath() {
      return this.$root.resourcePath;
    },
  },
  methods: {

    openLink: function () { 
      if (window.outerWidth < 700) {
        window.open('https://www.figma.com/proto/AnciupTXyPT0Us6SSaOP0v/Crinet-new-(Copy)?page-id=148%3A1183&node-id=148%3A2542&viewport=351%2C48%2C0.1&scaling=scale-down-width&starting-point-node-id=148%3A2542', '_blank');
        return;
      } else {
        window.open('https://www.figma.com/proto/AnciupTXyPT0Us6SSaOP0v/Crinet-new-(Copy)?page-id=211%3A1386&node-id=211%3A3347&viewport=351%2C48%2C0.53&scaling=min-zoom&starting-point-node-id=211%3A3347', '_blank');
        return;
      }
    }
  }
};
</script>

<style>
.v-hero {
  background: var(--c-gray-light);
  & .wrapper {
    position: relative;
    padding: 130px 0 55px;
    &:before {
      position: absolute;
      content: "";
      width: 390px;
      height: 195px;
      right: 60px;
      top: 0;
      background: url("../../images/bg_hero-top.svg") no-repeat;
      background-size: contain;
      @media (max-width: 1150px) {
        right: 0;
      }
      @media (max-width: 600px) {
        width: 240px;
        height: 124px;
        right: 0;
        background-position: 100px 0;
      }
    }
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      max-width: 720px;
      height: 360px;
      bottom: 0;
      right: 192px;
      background: url("../../images/bg_hero-bot.svg") bottom no-repeat;
      background-size: contain;
      @media (max-width: 1150px) {
        right: 0;
        left: 0;
        margin: 0 auto;
      }
    }
    @media (max-width: 1408px) {
      padding: 130px 40px 55px;
    }
    @media (max-width: 1150px) {
      padding: 95px 10px 0;
    }
  }
}

.v-hero_text-block {
  position: relative;
  z-index: 2;
  max-width: 500px;
  & h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 55px;
    letter-spacing: -0.8px;
    margin-bottom: 22px;
  }
  & p {
    background: linear-gradient(150deg, #9216c6 20%, #2c96fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.4px;
    margin: 22px 0 77px;
  }
  @media (max-width: 1150px) {
    margin: 0 auto;
    text-align: center;
    & h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }
  @media (max-width: 600px) {
    & h1 {
      font-size: 28px;
      line-height: 37px;
      letter-spacing: -0.8px;
      margin-bottom: 8px;
    }
    & p {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 20px;
    }
  }
}

.v-hero_btn-block {
  display: flex;
  & .v-button.__gradient {
    margin-right: 25px;
  }
  @media (max-width: 1150px) {
    justify-content: center;
  }
}
.v-hero_img-phone {
  position: absolute;
  width: 100%;
  max-width: 620px;
  height: 682px;
  right: 170px;
  bottom: -90px;
  z-index: 1;
  @media (max-width: 1408px) {
    right: 210px;
  }
  @media (max-width: 1150px) {
    object-fit: contain;
    position: relative;
    display: block;
    max-width: 94%;
    height: 460px;
    margin: 0 auto;
    right: 0;
    top: 70px;
    left: 20px;
  }
  @media (max-width: 768px) {
    max-height: 410px;
    height: auto;
    width: auto;
  }
}
.v-hero_left-text {
  position: absolute;
  width: 256px;
  top: 328px;
  right: 0px;
  font-size: 18px;
  line-height: 24px;
  &:before {
    position: absolute;
    content: "";
    top: 5px;
    left: -77px;
    width: 73px;
    height: 14px;
    z-index: 5;
    background: url("../../images/hero_text-decore.png") no-repeat;
    background-size: cover;
  }
  @media (max-width: 1408px) {
    right: 40px;
  }

  @media (max-width: 1150px) {
    display: none;
  }
}
</style>

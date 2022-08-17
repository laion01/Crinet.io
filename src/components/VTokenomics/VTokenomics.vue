<template>
  <section class="v-tokenomics wrapper" id="menu-tokenomics">
    <h2 class="v-tokenomics_title">Tokenomics</h2>
    <div class="v-tokenomics-block">
      <img :src="`${resourcePath}/images/tokenomics.png`" />

      <div class="v-tokenomics_stat __eight __left">
        <div class="v-tokenomics_percent">10%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">CEX & Partnership</p>
          <p class="v-tokenomics_number">1 000 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __seven __left">
        <div class="v-tokenomics_percent">5%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Strategic Reserve</p>
          <p class="v-tokenomics_number">500 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __six __left">
        <div class="v-tokenomics_percent">9%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Marketing</p>
          <p class="v-tokenomics_number">800 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __five __left">
        <div class="v-tokenomics_percent">25%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Public sales</p>
          <p class="v-tokenomics_number">2 500 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __four __right">
        <div class="v-tokenomics_percent">10%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Use-to-Earn Rewards</p>
          <p class="v-tokenomics_number">600 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __three __right">
        <div class="v-tokenomics_percent">20%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Staking</p>
          <p class="v-tokenomics_number">2 000 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __two __right">
        <div class="v-tokenomics_percent">10%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Dev & Growth</p>
          <p class="v-tokenomics_number">1 000 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __one __right">
        <div class="v-tokenomics_percent">10%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Team</p>
          <p class="v-tokenomics_number">1 000 000 000</p>
        </div>
      </div>
      <div class="v-tokenomics_stat __ten __right">
        <div class="v-tokenomics_percent">1%</div>
        <div class="v-tokenomics_text-block">
          <p class="v-tokenomics_text">Private Sales & Seed</p>
          <p class="v-tokenomics_number">100 000 000</p>
        </div>
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
.v-tokenomics_title {
  position: relative;
  &:before {
    position: absolute;
    content: "";
    right: 100px;
    top: 100px;
    width: 221px;
    height: 221px;
    z-index: -1;
    background: url("../../images/features_bg.png") center no-repeat;
    @media (max-width: 600px) {
      display: none;
    }
  }
  &:after {
    position: absolute;
    content: "";
    left: 100px;
    top: 500px;
    width: 221px;
    height: 221px;
    z-index: -1;
    background: url("../../images/features_bg.png") center no-repeat;
    @media (max-width: 600px) {
      display: none;
    }
  }
}
.v-tokenomics {
  padding-bottom: 180px;
  & h2 {
    margin-bottom: 90px;
  }
  @media (max-width: 1100px) {
    padding-bottom: 80px;
    & h2 {
      margin-bottom: 45px;
    }
  }
}
.v-tokenomics-block {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  & img {
    width: 585px;
  }
  @media (max-width: 1100px) {
    display: block;
    & img {
      display: block;
      margin: 0 auto 50px;
      max-width: 480px;
      width: 100%;
    }
  }
}

.v-tokenomics_stat {
  position: absolute;
  display: flex;
  height: 56px;
  max-width: 350px;
  background: rgba(234, 246, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  /* backdrop-filter: blur(1px); */
  border-radius: 8px;
  @media (max-width: 1100px) {
    position: static;
    margin: 0 auto 5px;
  }
  &.__left {
    & .v-tokenomics_percent {
      border-right: 1px solid color-mod(var(--c-link), a(20%));
    }
    & .v-tokenomics_text-block {
      padding: 8px 0 8px 19px;
    }
    &:before {
      position: absolute;
      content: "";
      top: 13px;
      right: 13px;
      width: 21px;
      height: 28px;
    }
    @media (max-width: 1100px) {
      flex-direction: row-reverse;
      & .v-tokenomics_percent {
        border-left: 1px solid color-mod(var(--c-link), a(20%));
        border-right: none;
      }
      & .v-tokenomics_text-block {
        padding: 8px 0 8px 44px;
      }
      &:before {
        top: 13px;
        right: auto;
        left: 8px;
      }
    }
    @media (max-width: 600px) {
      &:before {
        left: 8px;
      }
      & .v-tokenomics_text-block {
        padding: 8px 0 8px 37px;
      }
    }
  }
  &.__right {
    flex-direction: row-reverse;
    & .v-tokenomics_percent {
      border-left: 1px solid color-mod(var(--c-link), a(20%));
    }
    & .v-tokenomics_text-block {
      padding: 8px 0 8px 44px;
    }
    &:before {
      position: absolute;
      content: "";
      top: 13px;
      left: 13px;
      width: 21px;
      height: 28px;
    }
    @media (max-width: 600px) {
      &:before {
        left: 8px;
      }
      & .v-tokenomics_text-block {
        padding: 8px 0 8px 37px;
      }
    }
  }
  &.__one {
    top: 45px;
    right: 225px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #66c8ff;
    }
    &:before {
      background: url("../../images/tokenomics_circle-one.png") center no-repeat;
    }
  }
  &.__two {
    top: 110px;
    right: 90px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #00a3ff;
    }
    &:before {
      background: url("../../images/tokenomics_circle-two.png") center no-repeat;
    }
  }
  &.__three {
    top: 310px;
    right: 35px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #3f71ff;
    }
    &:before {
      background: url("../../images/tokenomics_circle-three.png") center
        no-repeat;
    }
  }
  &.__four {
    bottom: 60px;
    right: 150px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #773cf8;
    }
    &:before {
      background: url("../../images/tokenomics_circle-four.png") center
        no-repeat;
    }
  }
  &.__five {
    bottom: 70px;
    left: 130px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #8833e7;
    }
    &:before {
      background: url("../../images/tokenomics_circle-five.png") center
        no-repeat;
    }
  }
  &.__six {
    top: 217px;
    left: 30px;

    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #9000e8;
    }
    &:before {
      background: url("../../images/tokenomics_circle-six.png") center no-repeat;
    }
  }
  &.__seven {
    top: 126px;
    left: 91px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #891eca;
    }
    &:before {
      background: url("../../images/tokenomics_circle-seven.png") center
        no-repeat;
    }
  }
  &.__eight {
    top: 55px;
    left: 174px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #9800b0;
    }
    &:before {
      background: url("../../images/tokenomics_circle-eight.png") center
        no-repeat;
    }
  }
  &.__nine {
    top: 45px;
    left: 180px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #8d00a4;
    }
  }
  &.__ten {
    top: 204px;
    right: 36px;
    & .v-tokenomics_number,
    & .v-tokenomics_percent {
      color: #3f71ff;
    }
    &:before {
      background: url("../../images/tokenomics_circle-three.png") center
        no-repeat;
    }
  }
  &:before {
    background: url("../../images/tokenomics_circle-nine.png") center no-repeat;
  }
}

.v-tokenomics_percent {
  display: flex;
  justify-content: center;
  width: 132px;
  font-size: 43px;
  line-height: 56px;
  text-align: center;
  color: #66c8ff;
  margin: 0;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 125px;
    font-size: 39px;
  }
  @media (max-width: 350px) {
    width: 95px;
    font-size: 33px;
  }
}

.v-tokenomics_text-block {
  padding: 8px 0;
  width: 214px;
}

.v-tokenomics_text {
  font-size: 15px;
  line-height: 23px;
  margin: 0;
  font-weight: 600;
}

.v-tokenomics_number {
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  font-weight: 600;
}
</style>

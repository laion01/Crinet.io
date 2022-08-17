<template>
  <section class="v-buy-cryptos">
    <img
      class="v-buy-cryptos_mobile-bg-img"
      :src="`${resourcePath}/images/buy_mobile_bg.png`"
    />
    <div class="v-buy_wave">
      <div class="wrapper">
        <div class="v-buy-cryptos_top-block">
          <h2>
            Buy your favorite cryptos directly
            <br />with your credit cards
          </h2>
          <p class="fs-24">
            You’ll be able to Trade, Swap, Withdraw your cryptos as well as
            buying them with Credit/Debit Cards, Bank Transfers & Apple Pay
            directly on the App!
          </p>
          <img
            class="v-buy-cryptos_logo-img"
            :src="`${resourcePath}/images/buy_top-logo.png`"
          />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="v-buy-on" id="buy-on"></div>
      <h2 class="v-buy_subtitle">Buy on</h2>
      <div class="v-buy_platform-top">
        <div class="v-buy_platform-top-item">
          <div class="v-buy_platform-top-img-block">
            <span>To Be Announced</span>
          </div>
          <p>Presale to be announced</p>
        </div>
        <!-- <div class="v-buy_platform-top-item">
				<div class="v-buy_platform-top-img-block">
					<span>To Be Announced</span>
				</div>
				<p>Available after presale</p>
				</div> -->
      </div>
      <h3>Listed on</h3>
      <div class="v-buy_platform-bottom">
        <div class="v-buy_platform-bottom-item">
          <div class="v-buy_platform-bottom-img-block">
            <img :src="`${resourcePath}/images/coinmarketcap.png`" />
          </div>
          <p>Soon</p>
        </div>
        <div class="v-buy_platform-bottom-item">
          <div class="v-buy_platform-bottom-img-block">
            <img :src="`${resourcePath}/images/coinGecko.png`" />
          </div>
          <p>Soon</p>
        </div>
        <div class="v-buy_platform-bottom-item">
          <div class="v-buy_platform-bottom-img-block">
            <img :src="`${resourcePath}/images/crinet.png`" />
          </div>
          <p>Soon</p>
        </div>
      </div>
      <h3>Not only a DAPP - We are an Ecosystem</h3>
      <div class="v-buy_platform-last">
        <div class="v-buy_platform-last-item">
          <div class="v-buy_platform-last-img-block">
            <img :src="`${resourcePath}/images/crinet_blockchain.png`" />
          </div>
          <p>Coming Soon</p>
        </div>
        <div class="v-buy_platform-last-item">
          <div class="v-buy_platform-last-img-block">
            <img :src="`${resourcePath}/images/crinet_launchpad.png`" />
          </div>
          <p>Coming Soon</p>
        </div>
        <div class="v-buy_platform-last-item">
          <div class="v-buy_platform-last-img-block">
            <img :src="`${resourcePath}/images/crinet_vc.png`" />
          </div>
          <p>Coming Soon</p>
        </div>
        <div class="v-buy_platform-last-item">
          <div class="v-buy_platform-last-img-block">
            <img :src="`${resourcePath}/images/crinet_nft.png`" />
          </div>
          <p>Coming Soon</p>
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
.v-buy-on {
  margin-bottom: 80px;
}

.v-buy-cryptos {
  & h3 {
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin-bottom: 16px;
  }
}
.v-buy_wave {
  position: relative;
  z-index: -2;
  background-image: url("../../images/wave.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  &:before {
    position: absolute;
    content: "";
    right: 200px;
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
.v-buy-cryptos_top-block {
  position: relative;
  margin: 0 0 0px 118px;
  & h2 {
    margin-bottom: 32px;
    max-width: 500px;
  }
  & p {
    max-width: 565px;
    margin-bottom: 55px;
  }
  &:before {
    position: absolute;
    content: "";
    width: 730px;
    height: 650px;
    top: -120px;
    right: 0;
    background: url("../../images/buy_bg.png") center no-repeat;
    background-size: contain;
  }

  @media (max-width: 1350px) {
    margin: 0 0 80px 0;
    &:before {
      width: 540px;
      height: 545px;
      z-index: -1;
    }
  }
  @media (max-width: 1000px) {
    &:before {
      display: none;
    }
    & h2 {
      max-width: 565px;
      margin: 0 auto 32px;
    }
    & p {
      margin: 0 auto 55px;
    }
    & .v-buy-cryptos_logo-img {
      margin: 0 auto;
      display: block;
    }
  }
  @media (max-width: 600px) {
    & h2 {
      text-align: center;
    }
    & p {
      font-size: 18px;
      line-height: 28px;
      text-align: center;
    }
    & .v-buy-cryptos_logo-img {
      max-width: 100%;
    }
  }
}

.v-buy-cryptos_mobile-bg-img {
  display: none;
  @media (max-width: 1000px) {
    display: block;
    height: 580px;
    margin: 0 auto 32px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    height: auto;
  }
}
.v-buy_platform-top {
  display: flex;
  justify-content: center;
  margin-bottom: 55px;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 45px;
  }
}
.v-buy_subtitle {
  text-align: center;
  margin-bottom: 24px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    left: 100px;
    top: 50px;
    width: 221px;
    height: 221px;
    z-index: -1;
    background: url("../../images/features_bg.png") center no-repeat;
    @media (max-width: 600px) {
      display: none;
    }
  }
}
.v-buy_platform-top-item {
  background: color-mod(var(--c-gray-light), a(50%));
  border-radius: 8px;
  margin: 0 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background: #eaf5ff;
    & p {
      background: #eaf5ff;
    }
  }
  & p {
    margin: 0;
    height: 39px;
    color: #aab2c1;
    font-weight: 500;
    font-size: 16px;
    line-height: 39px;
    text-align: center;
    letter-spacing: -0.4px;
    border-top: 1px solid var(--c-white);
    transition: background-color 0.3s ease;
  }
  @media (max-width: 900px) {
    margin-bottom: 16px;
  }
}

.v-buy_platform-top-img-block {
  height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 34px;
  @media (max-width: 600px) {
    & img {
      max-width: 90%;
    }
  }
}

.v-buy_platform-bottom {
  display: flex;
  justify-content: center;
  margin-bottom: 180px;
  @media (max-width: 900px) {
    display: block;
  }
  @media (max-width: 600px) {
    margin-bottom: 80px;
  }
}
.v-buy_platform-last {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 180px;
  @media (max-width: 900px) {
    display: block;
  }
  @media (max-width: 600px) {
    margin-bottom: 80px;
  }
}

.v-buy_platform-bottom-item {
  background: color-mod(var(--c-gray-light), a(50%));
  border-radius: 8px;
  margin: 0 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background: #eaf5ff;
    & p {
      background: #eaf5ff;
    }
  }
  & p {
    margin: 0;
    height: 39px;
    color: #aab2c1;
    font-weight: 500;
    font-size: 16px;
    line-height: 39px;
    text-align: center;
    letter-spacing: -0.4px;
    border-top: 1px solid var(--c-white);
    transition: background-color 0.3s ease;
    cursor: default;
  }
  @media (max-width: 900px) {
    margin-bottom: 16px;
  }
}
.v-buy_platform-last-item {
  flex-basis: 40%;
  background: color-mod(var(--c-gray-light), a(50%));
  border-radius: 8px;
  margin: 0 4px;
  margin-bottom: 10px;

  transition: background-color 0.3s ease;
  &:hover {
    background: #eaf5ff;
    & p {
      background: #eaf5ff;
    }
  }
  & p {
    margin: 0;
    height: 39px;
    color: #aab2c1;
    font-weight: 500;
    font-size: 16px;
    line-height: 39px;
    text-align: center;
    letter-spacing: -0.4px;
    border-top: 1px solid var(--c-white);
    transition: background-color 0.3s ease;
    cursor: default;
  }
  @media (max-width: 900px) {
    margin-bottom: 16px;
  }
}

.v-buy_platform-top-img-block span {
  font-weight: 500;
  font-size: 1.8rem;
  color: #aab2c1;
  cursor: default;
}

.v-buy_platform-bottom-img-block {
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
}
.v-buy_platform-last-img-block {
  height: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
}
</style>

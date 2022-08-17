<template>
  <section class="v-footer">
    <div class="v-footer_top">
      <div class="v-footer_top-left-block">
        <img :src="`${resourcePath}/images/crinet.png`" />
        <p class="v-footer_top-left-text">
          The first Social Network designed
          <br />for the Crypto Community
        </p>
      </div>
      <div class="v-footer_top-right-block">
        Tamani Offices Tower, 1, Al Asayel Street Business Bay, Dubai
        <a href="mailto: info@crinet.io">info@crinet.io</a>
      </div>
    </div>
    <nav class="v-footer_menu">
      <ul class="v-footer_nav-list">
        <li
          v-for="(item, index) in menu"
          :key="index"
          class="v-footer_nav-item"
          :data-href="item.anchor"
          @click="$root.scrollTo(item.anchor)"
        >
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
      <ul class="v-footer_social-list">
        <li
          v-for="(item, index) in socialMenu"
          :key="index"
          class="v-footer_social-item"
        >
          <a :href="item.href" target="_blank">
            <img :src="`${resourcePath}${item.src}`" :alt="item.alt" />
          </a>
        </li>
      </ul>
    </nav>
    <div class="v-footer_bot">
      Copyright © 2022, All Rights Reserved by Crinet
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: "Join Pre-launch", anchor: "menu-hero" },
        { title: "Audit", href: "../../pdfs/audit.pdf" },
        { title: "Project", anchor: "menu-features" },
        { title: "Roadmap", anchor: "menu-roadmap" },
        { title: "Tokenomics", anchor: "menu-tokenomics" },
        { title: "Team", anchor: "menu-team" },
      ],
      socialMenu: [
        {
          src: "/images/instagram.svg",
          alt: "instagram",
          href: "https://www.instagram.com/crinet.io",
        },
        {
          src: "/images/Twitter.svg",
          alt: "Twitter",
          href: "https://mobile.twitter.com/crinet_io",
        },
        {
          src: "/images/Telegram.svg",
          alt: "Telegram",
          href: "https://t.me/crinetchannel",
        },
        {
          src: "/images/Telegram.svg",
          alt: "Telegram",
          href: "https://t.me/crinetgroup",
        },
        {
          src: "/images/medium.png",
          alt: "Medium",
          href: "https://medium.com/@Crinet",
        },
      ],
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
.v-footer {
  position: relative;
  padding-top: 40px;
  border-radius: 10px;
  &:before {
    position: absolute;
    content: "";
    width: 282px;
    height: 141px;
    top: 0;
    right: 25%;
    background: url("../../images/footer_bg.png") center no-repeat;
  }
  @media (max-width: 900px) {
    &:before {
      display: none;
    }
  }
}
.v-footer_top {
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: block;
  }
}
.v-footer_top-left-block {
  margin: 0 0 32px 40px;
  & img {
    /* width: 200px; */
    height: 36px;
    margin-bottom: 19px;
  }
  @media (max-width: 900px) {
    margin: 0 0 16px 24px;
    & img {
      /* width: 138px; */
      margin-bottom: 16px;
      height: 36px;
    }
  }
}

.v-footer_top-left-text {
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  font-weight: 500;
  text-align: left;
}

.v-footer_top-right-block {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: right;
  margin: 0 36px 32px;
  width: 180px;
  & a {
    font-weight: 400;
    color: var(--c-link);
    transition: 0.4s ease;
    &:hover {
      color: var(--c-accent);
    }
  }
  @media (max-width: 900px) {
    text-align: left;
    margin: 0 0 28px 24px;
    max-width: 200px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
  }
}

.v-footer_menu {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--c-gray-light);
  border-bottom: 2px solid var(--c-gray-light);
  padding: 0 35px 0 40px;
  height: 55px;
  @media (max-width: 900px) {
    display: block;
    height: auto;
    padding: 16px 24px;
  }
}

.v-footer_nav-list {
  display: flex;
  height: 100%;
  max-width: 760px;
  align-items: center;
  @media (max-width: 900px) {
    display: block;
    margin-bottom: 20px;
    width: 100%;
  }
}

.v-footer_nav-item {
  height: 100%;
  flex-shrink: 0;
  margin-right: 75px;
  cursor: pointer;
  & a {
    display: block;
    position: relative;
    height: 100%;
    font-size: 16px;
    line-height: 55px;
    color: var(--c-gray);
    text-decoration: none;
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
  @media (max-width: 1100px) {
    margin-right: 20px;
  }
  @media (max-width: 900px) {
    height: auto;
    margin-bottom: 8px;
    & a {
      height: auto;
      line-height: 24px;
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
}

.v-footer_social-list {
  display: flex;
  height: 100%;
  align-items: center;
}

.v-footer_social-item {
  height: 100%;
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
  & a {
    display: flex;
    align-items: center;
    height: 100%;
    transition: box-shadow 0.4s ease;
    &:hover img {
      box-shadow: 0 4px 8px rgb(4 4 4 / 40%);
      border-radius: 50%;
    }
  }
}

.v-footer_bot {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aab2c1;
  font-size: 12px;
  height: 55px;
  line-height: 15px;
  text-align: center;
}
</style>

<template>
  <div class="menu-wrapper">
    <div class="menu-logo">
      <div class="menu-logo__img"></div>
      <div class="menu-logo__name">
        <div></div>
        <div>мебель</div>
        <div></div>
      </div>
    </div>

    <div class="menu-slogan no-mobile-screen">
      <span>12 лет</span> производим кухни на заказ в <span>Томске</span> и области
    </div>

    <NuxtLink v-for="(btn, ind) of GET_MENU_BUTTONS"
              :key="ind"
              :to="btn.path"
              class="menu-btn desktop-screen"
    >
      <div :style="{background: `url(${imgUrl(btn.img)})`}"></div>
      <div>{{ btn.title }}</div>
    </NuxtLink>

    <address v-for="num in 4" :key="num"  class="menu-online desktop-screen">
      <div class="menu-online__img"></div>
      <div class="menu-online__slogan">Пишите, мы Online</div>
      <div class="menu-online__icon1"></div>
      <div class="menu-online__icon2"></div>
    </address>

    <menu class="mobile-menu">
      MENU
    </menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Menu",
  computed: {
    ...mapGetters({
      GET_MENU_BUTTONS: 'header/GET_MENU_BUTTONS'
    }),
  },
  methods: {
    imgUrl(name) {
      return require(`@/static/imgs/header/${name}`)
    }

  }
}
</script>

<style scoped lang="scss">
.menu-wrapper {
  @extend %flex-center;


  .menu-logo {
    width: rem(112);
    cursor: pointer;

    &:hover {
      filter: opacity(0.7);
    }

    @media (max-width: $desktopWidth) {
      margin-left: rem(20);
    }

    &__img {
      width: rem(112);
      height: rem(48);
      background: url("static/imgs/header/logo.png") no-repeat;
      background-size: contain;
    }

    &__name {
      width: 100%;
      height: rem(18);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      & :first-child, & :last-child {
        width: rem(18);
        height: rem(9);
        border-bottom: $liteGreen 1px solid;
      }

      & :nth-child(2) {
        height: 100%;
        @extend %flex-center;
        @extend %font__10-bold-litegreen;
        text-transform: uppercase;
      }
    }
  }

  .menu-slogan {
    width: rem(120);
    margin: 0 rem(32) 0 rem(16);
    @extend %font__11-normal-greydark;

    span {
      font-weight: bold;
    }
  }

  .menu-btn {
    width: rem(92);
    height: rem(98);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: rem(8);

    & :first-child {
      width: rem(30);
      height: rem(30);
      background-size: contain;
      background-repeat: no-repeat;
    }

    & :last-child {
      margin-top: rem(8);
      @extend %font__12-600-grey;
      text-align: center;
    }

    &:hover {
      border: 1px solid #F3CD82;
      box-sizing: border-box;
      border-radius: 18px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .menu-online {
    width: rem(140);
    height: 100%;
    margin-left: rem(32);
    box-sizing: border-box;
    padding: rem(32) rem(20);

    display: grid;
    grid: repeat(2, 33px) / repeat(3, 35px);

    &__img {
      width: rem(33);
      height: rem(33);
      background: url("static/imgs/header/online.png") no-repeat center;
      background-size: contain;

    }

    &__slogan {
      grid-area: 1 / 2 / 1 / span 2;
      margin: rem(6) 0 0 rem(10);
      @extend %font__12-normal-greydark;
    }

    &__icon1 {
      width: rem(24);
      height: rem(24);
      grid-area: 2 / 2 / 2 / 2;
      margin: rem(12) 0 0 rem(10);
      background: url("static/imgs/header/phone1.png") no-repeat center;
      background-size: contain;
      cursor: pointer;

      &:hover {
        filter: opacity(0.7);
      }
    }

    &__icon2 {
      width: rem(24);
      height: rem(24);
      grid-area: 2 / 3 / 2 / 3;
      margin: rem(12) 0 0 rem(10);
      background: url("static/imgs/header/whatsap.png") no-repeat center;
      background-size: contain;
      cursor: pointer;

      &:hover {
        filter: opacity(0.7);
      }
    }
  }

  .mobile-menu {
    width: rem(92);
    height: rem(98);
    margin: 0 rem(20) 0 auto;
    border: 1px solid #F3CD82;
    box-sizing: border-box;
    border-radius: 18px;
    cursor: pointer;

    @extend %flex-center;
    @extend %ipad-screen;

    &:hover {
      opacity: 0.7;
    }
  }

  .desktop-screen {
    @media (max-width: $desktopWidth) {
      display: none;
    }
  }
}

</style>

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

    <div class="menu-slogan">
      <span>12 лет</span> производим кухни на заказ в <span>Томске</span> и области
    </div>


  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped lang="scss">
.menu-wrapper {
  @extend %flex-center;
  background: $white;

  .menu-logo {
    width: rem(112);

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
    margin-left: rem(16);
    @extend %font__11-normal-greydark;

    span {
      font-weight: bold;
    }



  }
}

</style>

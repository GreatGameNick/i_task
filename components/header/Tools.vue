<template>
  <div class="tools-wrapper">
    <NuxtLink v-for="(btn, ind) in GET_TOOLS_BUTTONS"
              :key="ind"
              :to="btn.path"
              class="tools-btn__any"
    >
      {{ btn.title }}
    </NuxtLink>
    <div class="tools-btn__cart">
      <div class="tools-btn__heart" :data-amount="GET_CART_AMOUNT"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Tools",
  computed: {
    ...mapGetters({
      GET_TOOLS_BUTTONS: 'header/GET_TOOLS_BUTTONS',
      GET_CART_AMOUNT: 'cart/GET_CART_AMOUNT'
    })
  }
}
</script>

<style scoped lang="scss">
.tools-wrapper {
  width: fit-content;
  height: 100%;
  background: transparent;
  padding-right: rem(7);

  display: flex;
  flex-flow: row nowrap;

  .tools-btn__any {
    width: fit-content;
    height: 100%;
    box-sizing: border-box;
    padding: 0 rem(10);

    @extend %flex-center;
    @extend %font__12-600-grey;
    cursor: pointer;

    &:hover {
      color: $greyLite;
    }
  }

  .tools-btn__cart {
    width: rem(40);
    height: 100%;
    @extend %flex-center;
    cursor: pointer;

    .tools-btn__heart {
      position: relative;
      width: rem(16);
      height: rem(16);
      margin: 0 auto;
      background: url("static/imgs/header/heart.png") no-repeat center;
      background-size: contain;


      &:before {
        position: absolute;
        content: attr(data-amount);
        top: rem(-4);
        right: rem(-4);
        width: rem(10);
        height: rem(10);
        border-radius: 50%;
        background: $yellow;

        @extend %flex-center;
        @extend %font__6-normal-white;
      }

      &:hover {
        filter: opacity(0.7);
      }

    }

  }
}
</style>

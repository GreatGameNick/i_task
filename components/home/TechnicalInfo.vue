<template>
  <div class="techno-wrapper">
    <div class="techno-title">
      Основные элементы кухонь.
      <br>Их особенности и цена
    </div>
    <div class="techno-book">
      <div class="techno-book__menu">
        <div v-for="(item, ind) of GET_TECHNO_MENU" :key="ind">
          {{ item.title }}
        </div>
      </div>
      <div class="techno-book__specification">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TechnicalInfo",
  computed: {
    ...mapGetters({
      GET_TECHNO_MENU: 'pageStuff/GET_TECHNO_MENU'
    })
  }
}
</script>

<style scoped lang="scss">
.techno-wrapper {
  width: 100%;
  height: rem(900);
  background: url("static/imgs/home/table.png") bottom left no-repeat, url("static/imgs/home/lamp.png") top right no-repeat;
  background-size: 30% auto, auto 60%;

  .techno-title {
    width: 62%;
    margin: 0 auto;
    @extend %font__48-600-lite;
  }

  .techno-book {
    width: 56%;
    height: fit-content;
    min-height: rem(530);
    margin: rem(65) 0 0 24%;
    border: blue 1px solid;

    &__menu {
      width: 26%;
      height: fit-content;
      min-height: rem(530);
      box-sizing: border-box;
      padding: rem(38) rem(28);
      background: url("static/imgs/home/greyFone.png");
      background-size: cover;

      @extend %font__14-400-grey;

      & > :not(:first-child) {
        margin-top: rem(30);
      }
    }
  }
}
</style>

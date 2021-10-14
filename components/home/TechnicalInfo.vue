<template>
  <div class="techno-wrapper">
    <div class="techno-title">
      Основные элементы кухонь.
      <br>Их особенности и цена
    </div>

    <div class="techno-book">
      <div class="techno-book__menu">
        <div v-for="(item, ind) of GET_TECHNO_MENU"
             :key="ind"
             @click="chooseItem(item.title)"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="techno-book__specification">
        <div class="techno-book__title">
          <div>{{GET_TECHNO_SPECIFICATION(chooseSpecification).title}}</div>
          <div> X </div>
        </div>

        <div class="techno-book__description">
          {{GET_TECHNO_SPECIFICATION(chooseSpecification).description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TechnicalInfo",
  data: () => ({
    chooseSpecification: 'Фурнитура подъемных дверей'
  }),
  computed: {
    ...mapGetters({
      GET_TECHNO_MENU: 'pageStuff/GET_TECHNO_MENU',
      GET_TECHNO_SPECIFICATION: 'pageStuff/GET_TECHNO_SPECIFICATION',
    })
  },
  methods: {
    chooseItem(title) {
      this.chooseSpecification = title
    }
  }
}
</script>

<style scoped lang="scss">
.techno-wrapper {
  width: 100%;
  height: fit-content;
  background: url("static/imgs/home/table.png") bottom left no-repeat, url("static/imgs/home/lamp.png") top right no-repeat;
  background-size: 30% auto, auto 60%;
  margin-bottom: 200px;

  @media (max-width: $point_2) {
    background: $white
  }

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
    display: flex;

    @media (max-width: $point_2) {
      width: 98%;
      margin: rem(50) 1% rem(150);
    }

    &__menu {
      width: 26%;
      min-width: rem(150);
      height: fit-content;
      min-height: rem(530);
      flex-shrink: 0;
      box-sizing: border-box;
      padding: rem(38) rem(28);
      background: url("static/imgs/home/greyFone.png");
      background-size: cover;

      @extend %font__14-400-grey;

      & > :not(:first-child) {
        margin-top: rem(30);
      }

      & > :hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    &__specification {
      flex-grow: 1;
      border: 0.5px solid #717275;
      box-sizing: border-box;
      border-radius: 0px 4px 4px 0px;
      background: $white;

      .techno-book__title {
        width: 100%;
        height: fit-content;
        display: flex;

        & :first-child {
          flex-grow: 1;
          height: fit-content;
          min-height: rem(40);
          background: linear-gradient(180deg, #F5D89F 0%, #DDB15C 100%);
          opacity: 0.9;
          @extend %flex-center;
          box-sizing: border-box;
          padding-left: rem(10);
        }

        & :last-child {
          width: 1.5rem;
          background: $greyDark;
          opacity: 0.9;
          @extend %flex-center;
          color: $white;
          cursor: pointer;
        }
      }

      .techno-book__description {
        width: 100%;
        box-sizing: border-box;
        padding: rem(34);
      }

    }
  }
}
</style>

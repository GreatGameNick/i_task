<template>
  <div class="detail-item-wrapper"
       :style="{background: `url(${imgRequier(detail.imgName)})`}"
  >
    <div class="detail-item__text">
      {{ detail.text }}
    </div>
    <NuxtLink :to='detail.path'
              v-if="!!detail.name"
              :class="{
            'detail-item__btn': !isLink,
            'detail-item__link': isLink,
            'detail-item__btn_overimg': !isLink && !!detail.overImgName
            }"
    >
      {{ detail.name }}
    </NuxtLink>
    <div v-if="!!detail.overImgName"
         :style="{background: `url(${imgRequier(detail.overImgName)})`}"
         class="detail-item__overimg"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: {
    detail: {
      type: Object,
      require: true
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    imgRequier(imgName) {
      return require(`@/static/imgs/home/${imgName}`)
    }
  }

}
</script>

<style scoped lang="scss">
.detail-item-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover !important;
  background-position: center center !important;
  border-radius: 0 0 5px 5px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .detail-item__text {
    display: block;
    width: calc(100% - 3rem);
    margin: rem(20) rem(26);
    @extend %font__16-600-lite;
    text-align: left;
  }

  .detail-item__btn {
    width: 100%;
    min-height: rem(60);
    height: fit-content;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.45) 0%, rgba(43, 43, 43, 0.9) 100%);
    backdrop-filter: blur(26px);
    border-radius: 0 0 5px 5px;

    @extend %flex-center;
    @extend %font__16-bold-grey;
    box-sizing: border-box;
    padding: 0 rem(16);
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .detail-item__btn_overimg {
    justify-content: flex-start;
  }

  .detail-item__link {
    width: fit-content;
    height: rem(30);
    background: transparent;
    border-bottom: 1px solid #F3F3F3;
    margin: 0 rem(18) rem(18) auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    @extend %font__16-bold-grey;
    text-transform: capitalize;
    white-space: nowrap;

    &:hover {
      opacity: 0.7;
    }
  }

  .detail-item__overimg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    pointer-events: none;
  }
}

</style>

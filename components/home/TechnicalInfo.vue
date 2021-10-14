<template>
<div class="techno-wrapper">
  <div class="techno__title">
    Основные элементы кухонь.
    <br>Их особенности и цена
  </div>
</div>
</template>

<script>
export default {
  name: "TechnicalInfo"
}
</script>

<style scoped lang="scss">
.techno-wrapper {
  width: 100%;
  height: rem(900);
  border: blue 1px solid;
  background: url("static/imgs/home/table.png")  bottom left no-repeat, url("static/imgs/home/lamp.png") top right no-repeat;
  background-size: 40% auto, auto 60%;

  .techno__title {
    width: 62%;
    margin: 0 auto;
    @extend %font__48-600-lite;
  }

}
</style>

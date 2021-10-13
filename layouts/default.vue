<template>
  <div class="total-wrapper">
    <Nuxt class="pages"/>
    <Header class="header"/>
    <BesideMenu class="beside-menu"/>
  </div>

</template>

<script>
export default {
  name: "defoult"
}
</script>

<style scoped lang="scss">
.total-wrapper {
  position: relative;
  width: 100%;
  max-width: rem(1923);
  margin: 0 auto;


  height: 2000px;
  border: $grey 1px solid;

  .header {
    position: absolute;

  }

  .beside-menu {
    position: absolute;
    width: rem(64);
    height: rem(440);
    top: 16vw;
    right: 3.3%;

    @media (max-width: 1000px) {
      position: fixed;
      width: rem(440);
      height: rem(64);
      top: unset;
      bottom: 20px;
    }

    @media (max-width: 480px) {
      width: rem(64);
      right: rem(16);
    }
  }

  .pages {
    position: absolute;
    top: 0;
  }
}

</style>

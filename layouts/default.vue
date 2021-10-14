<template>
  <div class="total-wrapper">
    <Nuxt class="pages"/>
    <Header class="header"/>
    <BesideMenu class="beside-menu"/>
  </div>

</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped lang="scss">
.total-wrapper {
  position: relative;
  width: 100%;
  max-width: $fullWidth;
  margin: 0 auto;

  .header {
    position: relative;
    width: 100%;
  }

  .beside-menu {
    position: absolute;
    width: rem(64);
    height: rem(440);
    top: 16vw;
    right: 3.3%;

    @media (max-width: $desktopWidth) {
      position: fixed;
      width: rem(440);
      height: rem(64);
      top: unset;
      bottom: 20px;
    }

    @media (max-width: $mobileWidth) {
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

<template>
  <div class="header-wrapper">
    <div class="header-tools">
      <HeaderTools/>
    </div>
    <div class="header-menu">
      <HeaderMenu/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header-wrapper {
  height: rem(186);

  .header-tools {
    position: relative;
    width: 100%;
    max-width: $generalWidth;
    height: rem(50);
    margin: 0 auto;

    & > :first-child {
      margin-left: auto;
    }
  }

  .header-menu {
    width: 100%;
    height: rem(136);
    background: $white;

    & > :first-child {
      width: 100%;
      height: 100%;
      max-width: $generalWidth;
      margin: auto;
    }
  }
}
</style>

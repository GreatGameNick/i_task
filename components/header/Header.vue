<template>
  <div class="header-wrapper">
    <HeaderTools class="header-tools"/>
    <HeaderMenu class="header-menu"/>
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
    height: rem(50);
    margin-left: auto;
  }

  .header-menu {
    height: rem(136);
  }
}
</style>

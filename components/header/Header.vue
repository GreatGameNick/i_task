<template>
  <div class="header-wrapper">
    <div class="header-tools">
      <HeaderTools/>
    </div>
    <div class="header-menu-wrapper">
      <HeaderMenu class="header-menu"/>
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
    width: $generalWidth;
    height: rem(50);
    margin: 0 auto;

    & :first-child {
      margin-left: auto;
    }
  }

  .header-menu-wrapper {
    width: 100%;
    height: rem(136);
    background: $white;

    .header-menu {
      margin: 0 auto;
    }
  }
}
</style>

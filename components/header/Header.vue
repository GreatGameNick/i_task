<template>
  <div class="header-wrapper">
    <HeaderTools class="header-tools"/>


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
  border: yellowgreen 1px solid;     //на удаление

  .header-tools {
    position: relative;
    height: rem(50);
    margin-left: auto;
    border: green 1px solid;
  }
}
</style>

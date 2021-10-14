<template functional>
  <div class="principal-wrapper">

  </div>
</template>

<script>
export default {
  name: "Principal"
}
</script>

<style scoped lang="scss">
.principal-wrapper {
  width: 100%;
  background: url("static/imgs/home/principal.png") no-repeat;
  background-size: contain;

  &:after {
    display: block;
    height: 0;
    padding-bottom: 148%;
    content: '';
  }
}

</style>

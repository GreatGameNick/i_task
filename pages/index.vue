<template>
  <div class="home-wrapper">
    <HomeIntroduction/>
    <HomeDetails/>
    <HomeTechnicalInfo/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.home-wrapper {
  width: 100%;

  & *:not(:first-child) {
    margin-top: rem(104);
  }
}
</style>

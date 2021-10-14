<template>
  <div class="introduction-wrapper">
    <div class="introduction-place">
      <div class="introduction-principal">
        ПРИВЕТ
      </div>
<!--      <HomePrincipal/>-->
      <div class="introduction-content">
        Как смещается и редуцируется контент при изменении скрина - дело вкуса.
        <br>А технически - реализуемо практически все, что угодно.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIntroduction"
}
</script>

<style scoped lang="scss">
.introduction-wrapper {
  width: 100%;
  height: rem(970);
  background: url("../../static/imgs/home/layoutBackground.png") no-repeat;
  background-size: cover;

  .introduction-place {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: rem(780);

    display: grid;
    grid-template: repeat(5, 20%) / repeat(20, 5%);

    border: green 1px solid;

    .introduction-principal {
      grid-area: 1 / 12 / span 5 / span 6;
      width: 100%;
      height: 100%;

      border: #f50d0d 1px solid;
    }

    .introduction-content {
      grid-area: 1 / 5 / span 5 / span 9;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      border: #10fdb6 1px solid;

      @media (max-width: $desktopWidth) {
        box-sizing: border-box;
        padding: 0 rem(32);
      }
    }
  }

}
</style>

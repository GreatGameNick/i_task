<template>
  <div class="introduction-wrapper">
    <div class="introduction-place">
      <div class="introduction-principal">
        <HomePrincipal/>
      </div>
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
  position: relative;
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

    .introduction-principal {
      grid-area: 1 / 12 / span 5 / span 6;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      @media (max-width: $desktopWidth) {
        grid-area: 1 / 8 / span 5 / span 10;
      }

      @media (max-width: $mobileWidth) {
        grid-area: 1 / 4 / span 5 / span 16;
      }
    }

    .introduction-content {
      grid-area: 1 / 5 / span 5 / span 9;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      @media (max-width: $desktopWidth) {
        align-items: flex-start;
        box-sizing: border-box;
        padding: rem(32);
      }
    }
  }

}
</style>

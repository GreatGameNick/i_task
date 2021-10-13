<template>
  <div class="tools-wrapper">
    <NuxtLink v-for="(btn, ind) in GET_TOOLS_BUTTONS"
              :key="ind"
              :to="btn.path"
              class="tools-btn__any"
    >
      {{ btn.title }}
    </NuxtLink>
    <div class="tools-btn__cart">

    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Tools",
  computed: {
    ...mapGetters({
      GET_TOOLS_BUTTONS: 'header/GET_TOOLS_BUTTONS'
    })
  }
}
</script>

<style scoped lang="scss">
.tools-wrapper {
  width: fit-content;
  background: transparent;

  display: flex;
  flex-flow: row nowrap;

  .tools-btn__any {
    width: fit-content;
    height: 100%;
    box-sizing: border-box;
    padding: 0 rem(10);

    @extend %flex-center;
    @extend %font__12-600-grey;
    cursor: pointer;

    &:hover {
      color: $greyLite;
    }

  }
}
</style>

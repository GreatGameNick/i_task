<template>
  <div class="details-wrapper">
    <div class="details__title">
      Что вам может быть интересно?
    </div>
    <HomeDetailItem v-for="(detail, ind) of GET_DETAIL_GROUP"
                    :key="ind"
                    :detail="detail"
                    :isLink="detail.isLink"
                    :style="{
                      gridRow: 'span ' + detail.rowSpan,
                      gridColumn: 'span ' + detail.columnSpan
                    }"
                    class="span-down"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Details",
  computed: {
    ...mapGetters({
      GET_DETAIL_GROUP: 'pageStuff/GET_DETAIL_GROUP'
    })
  }
}
</script>

<style scoped lang="scss">
.details-wrapper {
  width: 100%;
  max-width: $generalWidth;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 30% 20% 20% 27%;
  grid-template-rows: repeat(9, 10%);
  gap: 1%;
  grid-auto-flow: column dense;

  @media (max-width: $iPhoneWidth) {
    height: fit-content;
    grid-template-columns: 1fr;
    grid-auto-rows: $rowHeight;
    grid-auto-flow: row;
    row-gap: rem(10);
  }

  .details__title {
    grid-area: 1/1/span 2/span 2;
    @extend %font__52;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: $iPhoneWidth) {
      height: $rowHeight;
      grid-area: 1/1/1/1;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
}

.span-down {
  @media (max-width: $iPhoneWidth) {
    height: $rowHeight;
    grid-row: span 1 !important;
    grid-column: span 1 !important;
  }
}

</style>

<template>
  <div class="panel panel-default">
    <div role="tab" id="priceButton" class="panel-heading filter-header">
      <h4 class="panel-title filter-header__text">
        <a
          role="button"
          data-toggle="collapse"
          data-parent="#brandsContent"
          href="#priceContent"
          aria-expanded="true"
          aria-controls="collapseOne"
          class="filter-header__link clearfix"
          ><span class="filter-header__text">Fiyat Aralığı</span>
          <span
            aria-expanded="true"
            class="filter-header__icon icon-angle-up"
          ></span
        ></a>
      </h4>
    </div>
    <div
      id="priceContent"
      role="tabpanel"
      aria-labelledby="priceButton"
      class="panel-collapse collapse in"
    >
      <div class="panel-body wrapper-filter-list">
        <ul class="filter-list">
          <FilterListItem
            v-for="item in FiyatFiltreleri"
            :fiyatId="item.id"
            :key="item.id"
          />
        </ul>
        <div class="wrapper-filter-list__price-filter">
          <div class="price-inputs-area">
            <input
              type="text"
              id="min-price"
              name="min-price"
              placeholder="Min TL"
              inputmode="text"
              class="wrapper-filter-list__price-filter-min"
              v-model="MinPrice"
            />
          </div>
          <div class="price-inputs-area">
            <input
              type="text"
              id="max-price"
              name="max-price"
              placeholder="Max TL"
              inputmode="text"
              class="wrapper-filter-list__price-filter-max"
              v-model="MaxPrice"
            />
          </div>
          <div class="price-inputs-area btn-cell">
            <a
              class="wrapper-filter-list__price-filter-button"
              @click="setCostFilter()"
              >Ara</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilterListItem from "../../../components/FilterComponent/FiyatFiltreleme/FilterListItem";
import { mapState } from "vuex";
export default {
  components: {
    FilterListItem,
  },
  data() {
    return {
      MinPrice: 0,
      MaxPrice: 0,
    };
  },
  methods: {
    setCostFilter() {
      var min = Number(this.MinPrice);
      var max = Number(this.MaxPrice);
      console.log("max");
      this.$store.commit("setCostFilter", { min, max });
    },
  },
  computed: {
    ...mapState({
      FiyatFiltreleri: (state) => state.FiyatFiltreleri,
    }),
  },
};
</script>
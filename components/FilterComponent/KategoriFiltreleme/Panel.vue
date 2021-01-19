<template>
  <div class="panel panel-default">
    <div class="panel-heading filter-header" role="tab" id="4-Button">
      <h4 class="panel-title filter-header__text">
        <a
          role="button"
          data-toggle="collapse"
          data-parent="#4-Content"
          href="#4-Content"
          aria-expanded="true"
          aria-controls="collapseOne"
          class="filter-header__link clearfix"
        >
          <span class="filter-header__text">Bilgisayar</span>
          <span
            class="filter-header__icon icon-angle-up"
            aria-expanded="true"
          ></span>
        </a>
      </h4>
    </div>
    <div
      id="4-Content"
      class="panel-collapse collapse in"
      role="tabpanel"
      aria-labelledby="4-Button"
    >
      <div class="panel-body wrapper-filter-list">
        <ul class="filter-list">
          <FilterListItem :categoryId="item.id" v-for="item in categories" :key="item.id"/>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import FilterListItem from "../../../components/FilterComponent/KategoriFiltreleme/FilterListItem";
import { mapState } from "vuex";
export default {
  components: {
    FilterListItem,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
    }),
  },
};
</script>
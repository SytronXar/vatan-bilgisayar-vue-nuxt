<template>
  <div class="panel panel-default">
    <div role="tab" id="1-Button" class="panel-heading filter-header">
      <h4 class="panel-title filter-header__text">
        <a
          role="button"
          data-toggle="collapse"
          data-parent="#1-Content"
          href="#1-Content"
          aria-expanded="true"
          aria-controls="collapseOne"
          class="filter-header__link clearfix"
          ><span class="filter-header__text">Markalar</span>
          <span
            aria-expanded="true"
            class="filter-header__icon icon-angle-up"
          ></span
        ></a>
      </h4>
    </div>
    <div
      id="1-Content"
      role="tabpanel"
      aria-labelledby="1-Button"
      class="panel-collapse collapse in"
    >
      <div class="panel-body wrapper-filter-list">
        <ul class="filter-list">
          <FilterListItem v-for="item in markalar" :markaId="item.id" :key="item.id"/>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import FilterListItem from "../../../components/FilterComponent/MarkaFiltreleme/FilterListItem";
import { mapState } from "vuex";
export default {
  components: {
    FilterListItem,
  },
  computed: {
    ...mapState({
      markalar: (state) => state.markalar,
    }),
  },
};
</script>
<template>
  <li class="filter-list__item" data-count="1">
    <a @click="setOrClear()" class="filter-list__link">
      <div class="wrapper-checkbox">
        <input type="checkbox" :checked="isSelected" />
        <span class="checkmark"></span>
        <span class="filter-list__text">{{ category.name }}</span>
      </div>
    </a>
  </li>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: {
    categoryId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getCategoryWithId: "getCategoryWithId",
      countOfProductInCategory: "getNumberOfProductInCategoryInFilter",
    }),
    ...mapState({
      secilmisKategori: (state) => state.filter.secilmisKategori,
    }),
    category() {
      return this.getCategoryWithId(this.categoryId);
    },
    isSelected() {
      return this.categoryId === this.secilmisKategori;
    },
    countOfProductIn() {
      return "n"; /* this.countOfProductInCategory(this.categoryId); */
    },
  },
  methods: {
    setSecilmisCategori() {
      this.$store.commit("setSecilmisCategory", this.categoryId);
    },
    clearSecilmisCategori() {
      this.$store.commit("clearSecilmisCategory");
    },
    setOrClear() {
      if (this.isSelected) this.clearSecilmisCategori();
      else this.setSecilmisCategori();
    },
  },
};
</script>
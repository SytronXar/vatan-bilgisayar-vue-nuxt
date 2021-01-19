<template>
  <li data-count="1" class="filter-list__item">
    <a @click="addOrRemove()" class="filter-list__link"
      ><div class="wrapper-checkbox">
        <input type="checkbox" :checked="isSelected" />
        <span class="checkmark"></span>
        <span class="filter-list__text">{{ FiyatFiltre.name }} (8)</span>
      </div></a
    >
  </li>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: {
    fiyatId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getFiyatFiltreWithId: "getFiyatFiltreWithId",
      countOfProductInFiyatFiltre:
        "getNumberOfProductInFiyatFiltreInFilter",
      isInSecilmisFiyatlar: "isInSecilmisFiyatlar",
    }),
    FiyatFiltre() {
      return this.getFiyatFiltreWithId(this.fiyatId);
    },
    isSelected() {
      return this.isInSecilmisFiyatlar(this.fiyatId);
    },
    countOfProductIn() {
      return "n"; /* this.countOfProductInFiyatFiltre(this.fiyatId); */
    },
  },
  methods: {
    addSecilmisFiyat() {
      this.$store.commit("addSecilmisFiyat", this.fiyatId);
    },
    removeSecilmisFiyat() {
      this.$store.commit("removeSecilmisFiyat", this.fiyatId);
    },
    addOrRemove() {
      if (this.isInSecilmisFiyatlar(this.fiyatId)) {
        this.addSecilmisFiyat();
      } else {
          console.log(this.isInSecilmisFiyatlar(this.fiyatId));
          this.removeSecilmisFiyat()
          };
    },
  },
};
</script>
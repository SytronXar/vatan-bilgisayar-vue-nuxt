<template>
  <li data-count="1" class="filter-list__item">
    <a @click="addOrRemove()" class="filter-list__link"
      ><div class="wrapper-checkbox" >
        <input type="checkbox" :checked="isInSecilmisMarkalar(markaId)" /> <span class="checkmark" :key="isInSecilmisMarkalar(markaId)"></span>
        <span class="filter-list__text">{{marka.name}}</span>
      </div></a
    >
  </li>
</template><script>
import { mapGetters, mapState } from "vuex";
export default {
  props: {
    markaId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getMarkaWithId: "Products/getMarkaWithId",
      countOfProductInMarka: "Products/getNumberOfProductInMarkaInFilter",
      isInSecilmisMarkalar: "Products/isInSecilmisMarkalar",
    }),
    marka() {
      return this.getMarkaWithId(this.markaId);
    },
    isSelected() {
      return this.isInSecilmisMarkalar(this.markaId);
    },
    countOfProductIn() {
      return "n"/* this.countOfProductInMarka(this.markaId); */
    },
  },
  methods: {
    addSecilmisMarka() {
      this.$store.commit("Products/addSecilmisMarka", this.markaId);
    },
    removeSecilmisMarka() {
      this.$store.commit("Products/removeSecilmisMarka", this.markaId);
    },
    addOrRemove() {
      if (this.isSelected) this.removeSecilmisMarka();
      else this.addSecilmisMarka();
      this.$forceUpdate();
    },
  },
};
</script>
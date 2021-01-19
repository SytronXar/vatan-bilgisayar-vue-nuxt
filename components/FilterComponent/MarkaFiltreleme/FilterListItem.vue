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
      getMarkaWithId: "getMarkaWithId",
      countOfProductInMarka: "getNumberOfProductInMarkaInFilter",
      isInSecilmisMarkalar: "isInSecilmisMarkalar",
    }),
    ...mapState({
      Filtre: (state) => state.filter,
    }),
    marka() {
      return this.getMarkaWithId(this.markaId);
    },
    countOfProductIn() {
      return "n"; /* this.countOfProductInMarka(this.markaId); */
    },
    isSelected() {
      return this.isInSecilmisMarkalar(this.markaId);
    },
    getChecked(){
      return this.Filtre.secilmisMarkalar.includes(this.markaId);
    },
  },
  methods: {
    addSecilmisMarka() {
      this.$store.commit("addSecilmisMarka", this.markaId);
    },
    removeSecilmisMarka() {
      this.$store.commit("removeSecilmisMarka", this.markaId);
    },
    addOrRemove() {
      if (this.isSelected) this.removeSecilmisMarka();
      else this.addSecilmisMarka();
     
    },
  },
};
</script>
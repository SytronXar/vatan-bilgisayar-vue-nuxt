<template>
  <div class="opportunity opportunity--home">
    <div
      id="smallBanner"
      class="small-banner hidden-sm hidden-xs"
      style="background-color:#02377d"
    >
      <div class="global-container">
        <Zeki />
      </div>
    </div>
    <div class="global-container homePageSkin">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="global-component-header clearfix">
            <h3 class="global-component-header__title mb-center-title">
              Günün Fırsatları
            </h3>
          </div>
        </div>
      </div>

      <div class="opportunity-content clearfix">
        <div class="row">
          <!--V-for ile sıfırdan yapılacak-->
          <ProductButton
            :productId="getProductID(index)"
            v-for="(n, index) in getMaxAvailableListCount(12)"
            :key="n" :itemWidth="179.625"
          />
        </div>
      </div>
      <div class="text-center">
        <a href="/vitrin-urunler" class="btn-default btn-global mb-mrtop-0">
          <span>TÜM FIRSAT ÜRÜNLERİ</span>
          <span class="icon-arrow-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Zeki from "../components/HomePage/Zeki";
import {mapGetters} from "vuex";
import ProductButton from "../components/TheProductButton";
export default {
  components: {
    Zeki,
    ProductButton
  },
  computed: {
    ...mapGetters({
      Products: "Products"
    }),
  },
  methods: {
    getProductID(index) {
      return this.Products()[index].id;
    },
    getMaxAvailableListCount(number) {
      if (this.Products().length < number) return this.Products().length;
      return number;
    }
  }
};
</script>

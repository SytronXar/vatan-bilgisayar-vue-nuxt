<script>
// @ is an alias to /src
import AdvicedProductsButton from "@/components/AdvicedProductsButton";
import { mapGetters } from "vuex";
export default {
  name: "UrunSayfasi",
  components: {
    AdvicedProductsButton
  },
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  computed:{
    ...mapGetters({
      getProductWithId: "Products/getProductWithId"
    }),
  },
  data() {
    return {
      currentimg: 0,
      showFancy: false
    };
  },
  methods: {
    updateimg(index) {
      this.currentimg = index;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    AddToBasket() {
      this.showFancy = true;
    },
    getComment(index) {
      var comments = this.getProductWithId(this.productId).comments;
      if (comments!=null) return comments[0];
      return {
        date: "",
        time: "",
        rate: "",
        name: "",
        highlight_comment: "",
        comment: ""
      };
    },

    ProductHref(name) {
      return name.toLowerCase().replace(/\s/g, "-");
    },
    getProductData(sProduct) {
      return this.$store.state.Products.data.find(data => data.id === sProduct);
    }
  }
};
</script>
<template>
  <div class="discount-prod-detail" v-show="getProductWithId(productId).advicedProducts!=null">
    <div class="discount-text clearfix">
      <span class="icon-discount-tag"><i class="fas fa-tag"></i></span>
      <span class="icon-discount-tag2"><i class="fas fa-percent"></i></span>
      <span> Bu ürünle birlikte alabileceğiniz ürünler</span>
    </div>
    <div class="discount-item-wrapper">
      <!-- V-for çevirdiğimiz yer -->
      <AdvicedProductsButton :productId="pid"  v-for="pid in getProductWithId(productId).advicedProducts"
        :key="pid"/>
    </div>
    <div class="text-center">
      <a
        href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#"
        id="discount"
        class="discount-link hide"
      >
        <div class="discount-up">
          <span>Daha Fazla Göster</span>
          <span class="icon-angle-down"></span>
        </div>
        <div class="discount-down hide">
          <span>Daha Az Göster</span>
          <span class="icon-angle-up"></span>
        </div>
      </a>
    </div>
  </div>
</template>
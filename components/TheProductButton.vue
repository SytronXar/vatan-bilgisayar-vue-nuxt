<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
    <div class="product-list">
      <ProductCarousel :productId="productId" :itemWidth="itemWidth" />
      <!-- Son * ürün labeli -->
      <div
        class="product-list__campaign-bar only-web flash-animated"
        v-show="isLowInStock()"
      >
        <span> Web'e Özel</span
        ><span
          ><span>
            Bu Fiyata<span> Son {{ productData.inStock }} Ürün</span></span
          ></span
        >
      </div>

      <!-- Yeni ürün labeli -->
      <div
        class="product-list__badge-bar"
        v-show="isNewProduct() && !isLowInStock()"
      >
        <div class="in-wrapper-condition">
          <span class="icong-yeniurun"></span
          ><span class="wrapper-condition__text">YENİ ÜRÜN</span>
        </div>
      </div>
      <div class="product-list__content">
        <router-link
          :to="{
            name: 'ProductPage',
            params: { productId: productData.id, producthref: ProductHref }
          }"
          class="product-list__link"
        >
          <div class="product-list__product-code">
            {{ productData.code }}
          </div>
          <div class="product-list__product-name">
            {{ productData.name }}
          </div>
        </router-link>
        <div class="product-list__cost">
          <span class="old-price">{{ formatPrice(productData.cost) }}</span>
          <span class="product-list__currency"> TL</span>
          <span class="product-list__current-price"> </span>
        </div>
        <div class="wrapper-condition wrapper-condition--product-list">
          <div
            class="in-wrapper-condition"
            v-show="
              productData.freeShipping === true ||
                productData.fastShipping === true
            "
          >
            <span class="icon-truck-alt wrapper-condition__icon"> </span>
            <span
              class="wrapper-condition__text"
              v-if="productData.fastShipping === true"
              >BUGÜN KARGODA</span
            >
            <span
              class="wrapper-condition__text"
              v-else-if="
                productData.fastShipping === false &&
                  productData.freeShipping === true
              "
              >KARGO BEDAVA</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Products from "@/store/Products";
import ProductCarousel from "@/components/Carousel/ProductCarousel/ProductCarousel";
import moment from "moment";
export default {
  data() {
    return {
      imageWidth: 179.625,
      currentShowImageIndex: 1
    };
  },
  components: { ProductCarousel },
  computed: {
    productData() {
      return Products.data.find(data => data.id === this.productId);
    },
    owlStageWidth() {
      return this.productData.images.length * this.imageWidth;
    },
    percentSlideThumbs() {
      return 100 / this.productData.images.length;
    },
    ProductHref() {
      return this.productData.name.toLowerCase().replace(/\s/g, "-");
    }
  },
  props: {
    productId: {
      type: String,
      required: true
    },
    itemWidth:{
        type: Number,
        required:true
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    isNewProduct() {
      var diff = moment().diff(
        this.productData.productLaunchTime,
        "years",
        true
      );
      return diff < 0.2;
    },
    isLowInStock() {
      return this.productData.inStock <= 30;
    },
    onMouseOver() {
      //console.log(event.pageX - event.target.pageX);
    }
  }
};
</script>

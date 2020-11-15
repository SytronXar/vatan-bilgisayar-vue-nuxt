
<script>
// @ is an alias to /src
import Products from "@/store/Products";
export default {
  computed: {},
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {
      productData: Products.data.find(data => data.id === this.productId)
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    ProductHref() {
      return this.productData.name.toLowerCase().replace(/\s/g, "-");
    }
  }
};
</script>
<template>
  <div class="owl-item active" style="width: 665px; margin-right: 6px;">
    <div class="item">
      <div
        class="product-list product-list--second product-list--second__first-item"
      >
        <div class="product-list__image-safe product-list--second__image-safe">
          <router-link
            :id="productId"
            :to="{
              name: 'ProductPage',
              params: {
                productId: productId,
                producthref: ProductHref()
              }
            }"
            title=""
            class="product-list__image-safe-link"
          >
            <picture>
              <img
                :srcset="productData.images[0]"
                class="img-responsive product-list__image"
                :alt="productData.name"
                :title="productData.name"
              />
            </picture>
          </router-link>
        </div>

        <div class="product-list__content product-list--second__content">
          <div
            class="product-list__campaign-bar product-list--second__campaign-bar flash-animated"
          >
            <span>Web'e Özel</span>
            <span>
              <span
                >Bu Fiyata <span>Son {{ productData.inStock }} Ürün</span></span
              >
            </span>
          </div>
          <div class="product-list__product-code">
            <router-link
              :id="productId"
              :to="{
                name: 'ProductPage',
                params: {
                  productId: productId,
                  producthref: ProductHref()
                }
              }"
              class="clasic-link"
              title=""
            >
              {{ productData.code }}
            </router-link>
          </div>
          <div class="product-list__product-name">
            <router-link
              :id="productId"
              :to="{
                name: 'ProductPage',
                params: {
                  productId: productId,
                  producthref: ProductHref()
                }
              }"
              class="clasic-link"
              title=""
            >
              {{ productData.name }}
            </router-link>
          </div>
          <div class="product-list__cost">
            <span class="product-list__price">{{ formatPrice(productData.cost) }} </span>
            <span class="product-list__currency">TL</span>
            <span class="product-list__current-price"
              >{{ formatPrice(productData.cost * 1.1) }} TL</span
            >
          </div>
          <div class="wrapper-condition">
            <div class="in-wrapper-condition">
              <span class="icon-truck-alt wrapper-condition__icon"></span
              ><span class="wrapper-condition__text">KARGO BEDAVA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
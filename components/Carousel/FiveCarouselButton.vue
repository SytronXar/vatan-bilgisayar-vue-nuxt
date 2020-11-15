<script>
// @ is an alias to /src
import Products from "@/store/Products";
export default {
  name: "UrunSayfasi",
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
  <div class="owl-item active" style="width: 262.4px; margin-right: 6px;">
    <div class="item ss">
      <div class="product-list product-list--fourth">
        <div class="product-list__image-safe">
          <router-link
            :id="productId"
            :to="{
              name: 'ProductPage',
              params: {
                productId: productId,
                producthref: ProductHref()
              }
            }"
            class="product-list__image-safe-link vl-product-alter"
            ><picture>
              <source
                :srcset="productData.images[0]"
                media="(min-width: 300px)"
                :alt="productData.name"
                :title="productData.name"
              />
              <img
                :src="productData.images[0]"
                :alt="productData.name"
                :title="productData.name"
                class="img-responsive product-list__image"
              /> </picture
          ></router-link>
        </div>
        <div class="product-list__content">
          <div class="product-list__product-name">
            {{ productData.name }}
          </div>
          <div class="product-list__cost">
            <span class="product-list__price"
              >{{ formatPrice(productData.cost) }} </span
            ><span class="product-list__currency"> TL</span>
          </div>
        </div>
        <div class="product-list__comp"></div>
      </div>
    </div>
  </div>
</template>
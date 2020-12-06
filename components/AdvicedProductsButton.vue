<script>
// @ is an alias to /src
export default {
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productData: this.$store.state.Products.data.find(data => data.id === this.productId)
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    ProductHref() {
      var href=this.productData.name.toLowerCase().replace(/\s/g, "-");
      console.log(href)
      return href
    }
  }
};
</script>
<template>
  <div class="discount-item">
    <div class="d-table clearfix">
      <div class="d-cell">
        <nuxt-link
          :to="{
            name: 'productId',
            params: {
              productId: productId,
              producthref: ProductHref()
            }
          }"
        >
          <picture>
            <img :src="productData.images[0]" alt="urunismi" />
          </picture>
          <span class="prod-name">{{ productData.name }} </span>
        </nuxt-link>
      </div>
      <div class="d-cell">
        <span class="old-price">{{ formatPrice(productData.cost) }} TL</span>
        <span class="price"
          >{{ formatPrice(productData.cost * 0.95) }} <span>TL</span></span
        >
      </div>
      <div class="d-cell">
        <input
          type="checkbox"
          class="hidden-check bundle-check bundleProcess"
          name="chkBndURN_88816"
          id="chkBndURN_88816"
        />
        <label class="btn btn-add btn-sm pull-right" for="chkBndURN_88816"
          >SEÇ</label
        >
      </div>
      <input
        type="hidden"
        name="hdnUBN_KOD"
        id="hdnUBN_KOD_88816"
        class="inputCheck"
        value="88816"
      />
    </div>
  </div>
</template>
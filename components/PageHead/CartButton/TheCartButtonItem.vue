<script>
// @ is an alias to /src
export default {
  name: "UrunSayfasi",
  computed: {},
  props: {
    CartId: {
      type: Number,
      required: true,
    },
    pId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cartItem: this.$store.state.inCart.find(
        (inCart) => inCart.id === this.CartId
      ),
      product: this.$store.state.data.find(
        (data) => data.id === this.pId
      ),
    };
  },
  methods: {
    ProductHref() {
      return this.product.name.toLowerCase().replace(/\s/g, "-");
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<template>
  <nuxt-link
    :to="{
      name: 'productId',
      params: {
        productId: pId,
        producthref: ProductHref(),
      },
    }"
  >
    <picture class="active">
      <img
        :src="product.images[0]"
        class="img-responsive product-list__image"
      />
    </picture>
    <div class="wrapper-product-text">
      <span class="product-name">{{ product.name }}</span>
      <span class="product-cost">{{
        formatPrice(product.cost * cartItem.count)
      }}</span>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    cartId: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    changeCount(number) {
      this.inCart[this.index].count += number;
    },
    DeleteCartItem() {
      this.inCart.splice(this.index, 1);
    },
    ProductHref() {
      return this.product.name.toLowerCase().replace(/\s/g, "-");
    },
  },
  data() {
    return {};
  },
  computed: {
    Products() {
      return this.$store.state.Products.data;
    },
    inCart() {
      return this.$store.state.Products.inCart;
    },
    product() {
      return this.Products.find((data) => data.id === this.cartItem.pid);
    },
    cartItem() {
      return this.inCart.find((inCart) => inCart.id === this.cartId);
    },
  },
};
</script>
<template>
  <div class="basket-cart__table-row">
    <div class="basket-cart__table-column info">
      <div class="basket-cart__product-info">
        <nuxt-link
          :to="{
            name: 'productId',
            params: {
              productId: product.id,
              producthref: ProductHref(),
            },
          }"
        >
          <div class="basket-cart__product-image">
            <img :src="product.images[0]" class="" alt="" />
          </div>
          <div class="basket-cart__product-name">{{ product.name }}</div>
        </nuxt-link>
        <ul class="basket-cart__product-badges hidden-xs hidden-sm">
          <li class="discount"></li>
        </ul>
      </div>
    </div>
    <div class="basket-cart__table-column count">
      <div class="number-input">
        <a @click="changeCount(-1)">-</a>
        <div class="input-wrapper">
          <form novalidate="novalidate">
            <input
              data-limitedstok="False"
              data-lineid="16459878"
              data-target="17793"
              data-toggle="110768"
              data-val="true"
              data-val-number="The field TQuantityA must be a number."
              data-val-required="The TQuantityA field is required."
              id="productCount_16459878"
              min="1"
              name="item.BasketItem.TQuantityA"
              onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
              type="number"
              :value="cartItem.count"
              style="text-align: right"
            />
          </form>
          <span>Adet</span>
        </div>
        <a @click="changeCount(1)">+</a>
      </div>
    </div>
    <div class="basket-cart__table-column price">
      <div class="basket-cart__product-price">
        <span> {{ formatPrice(product.cost * cartItem.count) }} TL </span>
      </div>
    </div>
    <div class="basket-cart__table-column info badges visible-xs visible-sm">
      <ul class="basket-cart__product-badges">
        <li></li>
      </ul>
    </div>
    <div class="basket-cart__table-column warranty">
      <span>Garantiyi Uzat</span>
      <input
        class="apple-switch basket-cart__product-switch warranty-toggler"
        checked=""
        type="checkbox"
        onchange="warrantyToggler(event)"
      />
    </div>
    <div class="basket-cart__table-column text-center remove">
      <a
        href="javascript:void(0)"
        class="basket-cart__product-remove"
        @click="DeleteCartItem()"
        ><i class="icon-times-circle"></i
      ></a>
    </div>
    <div class="basket-cart__extrawarranty">
      <p class="kg-text">
        <i class="icon-warranty-lock-alt"></i>
        <span>
          Keyifli Garanti, standart garanti bittikten sonra geçerli olan geniş
          kapsamlı bir hizmettir. Buna ek olarak ilk yıla özel hırsızlık ve kaza
          sigortası hediyedir.
        </span>
      </p>
      <div class="basket-installment-carousel swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide active">
            <label class="wrapper-radio wrapper-radio-product">
              <input
                type="radio"
                name="warranty_17f12c6d-b34d-42d1-bf52-44ed6712f29f"
                onclick="AddOrRemoveKeyifliGaranti(83823,16459878,'False',0,110768)"
              />
              <span class="checkmark"></span>
              +1 Yıl Keyifli Garanti
            </label>
            <div class="basket-cart__extrawarranty-price">
              {{ formatPrice((cartItem.count * product.cost) / 6.6) }} TL
            </div>
          </li>
          <li class="swiper-slide active">
            <label class="wrapper-radio wrapper-radio-product">
              <input
                type="radio"
                name="warranty_17f12c6d-b34d-42d1-bf52-44ed6712f29f"
                onclick="AddOrRemoveKeyifliGaranti(83824,16459878,'False',0,110768)"
              />
              <span class="checkmark"></span>
              +2 Yıl Keyifli Garanti
            </label>
            <div class="basket-cart__extrawarranty-price">
              {{ formatPrice((cartItem.count * product.cost) / 5) }} TL
            </div>
          </li>
          <li class="swiper-slide active">
            <label class="wrapper-radio wrapper-radio-product">
              <input
                type="radio"
                name="warranty_17f12c6d-b34d-42d1-bf52-44ed6712f29f"
                onclick="AddOrRemoveKeyifliGaranti(83825,16459878,'False',0,110768)"
              />
              <span class="checkmark"></span>
              +3 Yıl Keyifli Garanti
            </label>
            <div class="basket-cart__extrawarranty-price">
              {{ formatPrice((cartItem.count * product.cost) / 3.75) }} TL
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
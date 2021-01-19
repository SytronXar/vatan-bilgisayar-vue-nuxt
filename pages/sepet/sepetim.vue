<script>
import MyCartPanel from "../../components/Cart/MyCartPanel";
import { mapState } from "vuex";
export default {
  name: "CartPage",
  components: { MyCartPanel },

  computed: {
    ...mapState({
      products: (state) => state.data,
      inCart: (state) => state.inCart,
    }),
    productLength() {
      return this.products != null ? this.products.length : -1;
    },
    inCartLength() {
      return this.inCart ? this.inCart.length : -1;
    },
  },
  data() {
    return {};
  },
};
</script>
<template>
  <main class="basket-main-area" style="margin-top: 8.5px">
    <div>
      <div class="basket basket-addresses" v-if="inCartLength < 1">
        <div class="global-container">
          <div class="row">
            <div class="col-xs-12">
              <div class="empty-basket">
                <div class="empty-basket-content">
                  <span class="icon-shopping-card">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span class="basket-count">0</span>
                </div>
                <h3>SEPETİNİZDE ÜRÜN YOK!</h3>
                <a
                  class="btn btn-primary signup-form__button change-password-form__button"
                  href="/"
                  >ALIŞVERİŞE BAŞLA</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Dolu Sepet -->
      <div class="basket" v-else-if="productLength > 1">
        <div class="basket-process">
          <div class="global-container">
            <div class="row">
              <div class="col-xs-12">
                <ul class="basket-process__inner">
                  <li class="active">
                    <a href="/sepet/sepetim">
                      <span class="basket-process__icon">
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                      <span class="basket-process__text"> Sepetim </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="basket-process__icon"
                        ><i class="fas fa-map-marker-alt"></i>
                      </span>
                      <span class="basket-process__text"> Teslimat </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <span class="basket-process__icon">
                        <i class="fas fa-credit-card"></i>
                      </span>
                      <span class="basket-process__text"> Ödeme </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="global-container">
          <!-- my cart panel -->
          <MyCartPanel />
        </div>
      </div>
      <div class="deneme" v-else>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
          alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
        />
      </div>
    </div>
  </main>
</template>

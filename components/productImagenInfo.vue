<script>
// @ is an alias to /src
import Products from "@/store/Products";
import AdvicedProductsC from "@/components/AdvicedProductsC";
import TheFancyBoxContainer from "@/components/TheFancyBoxContainer";
export default {
  computed: {},
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  components: {
    AdvicedProductsC,
    TheFancyBoxContainer
  },
  data() {
    return {
      currentimg: 0,
      showFancy: false,
      productData: this.$store.state.Products.data.find(data => data.id === this.productId),
      randomVisitor: Math.random() * (25 - 1) + 1
    };
  },
  methods: {
    updateimg(index) {
      this.currentimg = index;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    AddToBasket() {
      var pid=this.productId;
      var count=1;
      this.$store.commit("Products/sepeteEkle", {pid, count});
      this.showFancy = true;
    },
    getComment(index) {
      var comments = this.productData.comments;
      if (comments.length > index) return comments[0];
      return {
        date: "",
        time: "",
        rate: "",
        name: "",
        highlight_comment: "",
        comment: ""
      };
    }
  }
};
</script>
<template>
  <div class="container-fluid wrapper-linear">
    <div class="row">
      <div class="col-xs-12">
        <div class="global-container top-pd-update linear-gradient">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pd-left">
              <div class="person-count">
                <span class="icon-view"></span
                ><span
                  >Bu Ürünü Şuan
                  <span id="vlVisitorCount">{{
                    formatPrice(randomVisitor)
                  }}</span>
                  Kişi İnceliyor</span
                ><span class="icon-zoom lightbox-item"></span>
              </div>
              <div class="clearfix">
                <div
                  class="owl-wrapper owl-wrapper-product-detail"
                  data-video=""
                >
                  <div
                    id="product-detail"
                    class="owl-carousel owl-theme owl-product-detail owl-loaded owl-drag"
                    data-slider-id="1"
                  >
                    <div class="owl-stage-outer">
                      <div
                        class="owl-stage"
                        style="transform: translate3d(-1887px, 0px, 0px); transition: all 0s ease 0s; width: 7548px;"
                      >
                        <div
                          class="owl-item cloned"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_small.jpg"&gt;&lt;/div&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          src=""
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item cloned"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_small.jpg"&gt;&lt;/div&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          src=""
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item cloned"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_small.jpg"&gt;&lt;/div&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item active"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"/&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <!--Resim-->
                                        <img
                                          class="owl-lazy img-responsive wrapper-main-slider__image lazy-init"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          :src="productData.images[currentimg]"
                                          style="opacity: 1;"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_small.jpg"/&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_small.jpg"/&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_small.jpg"/&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_small.jpg"/&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_small.jpg"/&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item cloned"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"&gt;&lt;/div&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                                          style="opacity: 1;"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item cloned"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_small.jpg"&gt;&lt;/div&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="owl-item cloned"
                          style="width: 623px; margin-right: 6px;"
                        >
                          <div
                            class="item"
                            data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_small.jpg"&gt;&lt;/div&gt;'
                          >
                            <div class="container-fluid">
                              <div class="row row-no-gutters">
                                <div
                                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                >
                                  <div class="wrapper-main-slider">
                                    <div
                                      class="wrapper-main-slider__wrapper-image"
                                    >
                                      <a
                                        class="lightbox-item"
                                        href="javascript:void(0);"
                                      >
                                        <img
                                          data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                          class="owl-lazy img-responsive wrapper-main-slider__image"
                                          alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                          title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        class="owl-prev"
                      >
                        <span
                          class="icon-angle-left"
                          aria-hidden="true"
                        ></span></button
                      ><button
                        type="button"
                        role="presentation"
                        class="owl-next"
                      >
                        <span
                          class="icon-angle-right"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                    <div class="owl-dots">
                      <button role="button" class="owl-dot active">
                        <span></span></button
                      ><button role="button" class="owl-dot">
                        <span></span></button
                      ><button role="button" class="owl-dot">
                        <span></span></button
                      ><button role="button" class="owl-dot">
                        <span></span></button
                      ><button role="button" class="owl-dot">
                        <span></span></button
                      ><button role="button" class="owl-dot">
                        <span></span>
                      </button>
                    </div>
                    <!--Vfor ile çoğaltılacak-->
                    <div class="owl-t-container">
                      <button
                        v-for="(image, index) in productData.images"
                        v-bind:key="image"
                        @mouseover="updateimg(index)"
                        class="owl-t-container-item active"
                      >
                        <img :src="image" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrapper-product-brand">
                <a href="https://www.vatanbilgisayar.com/dell/oyun-bilgisayari">
                  <img
                    v-bind:src="productData.markalogosu"
                    :alt="productData.code"
                    :title="productData.code"
                  />
                  <span></span>
                </a>
                <div class="intel-logo">
                  <img
                    src="https://www.vatanbilgisayar.com/UPLOAD/GENERAL/intel/intel-10300H.jpg"
                  />
                </div>
              </div>
              <div class="container-fluid wrapper-product-detail-info">
                <div class="row">
                  <ul class="pdetail-property-list">
                    <li
                      data-count="0"
                      v-for="moreInformation in productData.moreInformation"
                      v-bind:key="moreInformation"
                    >
                      <span class="property-head">{{
                        moreInformation.info
                      }}</span>
                      <span>{{ moreInformation.info_detail }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <ul
                class="wrapper-product-tab-list hidden-xs hidden-sm hidden-md"
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    id="allFeatures"
                    onclick="focusTab(&#39;urun-ozellikleri&#39;)"
                  >
                    TÜM ÖZELLİKLER
                  </a>
                </li>

                <li>
                  <a
                    href="javascript:void(0);"
                    id="paymentOptions"
                    onclick="focusTab(&#39;odeme-secenekleri&#39;)"
                  >
                    ÖDEME SEÇENEKLERİ
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pd-right">
              <div class="container-fluid">
                <div class="row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product-detail"
                  >
                    <div class="product-list__badge-bar">
                      <div class="in-wrapper-condition">
                        <span class="icong-yeniurun"></span
                        ><span class="wrapper-condition__text">YENİ ÜRÜN</span>
                      </div>
                    </div>
                    <div class="clearfix prod-code-rank">
                      <!--Yıldızlar-->
                      <div class="wrapper-star">
                        <div class="rank-star">
                          <span
                            class="score"
                            id="topAverageRank"
                            :style="{
                              width: (100 * productData.rate) / 5 + '%'
                            }"
                          ></span>
                        </div>
                        <a
                          href="javascript:void(0);"
                          onclick="focusTab(&#39;yorumlar&#39;)"
                          class="comment-count"
                        >
                          <span>({{ productData.comments.length }})</span>
                        </a>
                      </div>

                      <div
                        class="product-list__product-code pull-left"
                        data-productcode="G315-4B30W85C"
                      >
                        {{ productData.code }} / {{ productData.id }}
                      </div>
                    </div>

                    <div class="product-list__content product-detail-big-price">
                      <h1 class="product-list__product-name">
                        {{ productData.name }}
                      </h1>

                      <div class="product-list__cost product-list__description">
                        <h3
                          class="product-list_explanation product-list__description-text"
                        ></h3>
                        <span class="product-list__price">{{
                          formatPrice(productData.cost)
                        }}</span>
                        <span class="product-list__currency">TL</span>
                      </div>
                      <a
                        class="installment"
                        onclick="focusTab(&#39;odeme-secenekleri&#39;)"
                        ><u
                          ><b
                            >{{
                              formatPrice(
                                productData.cost /
                                  productData.maxInstallmentCount
                              )
                            }}
                            TL</b
                          ></u
                        >'den başlayan taksitlerle</a
                      >
                    </div>

                    <div class="choose"></div>
                    <div class="d-table hidden-xs">
                      <div class="d-cell product-button--cell">
                        <button
                          id="add-to-cart-button"
                          @click="AddToBasket()"
                          class="btn btn-success basketBTN"
                        >
                          <span class="shopping-cart"
                            ><i class="fas fa-shopping-cart"></i
                          ></span>
                          <span> SEPETE EKLE</span>
                        </button>
                      </div>
                      <div class="d-cell product-icon--cell">
                        <a
                          id="fav_Icon"
                          href="javascript:void(0)"
                          data-message="Yukarıdaki Ürünün Fiyatı Düşünce Size Haber Verilecek"
                          data-producttitle='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                          data-type="2"
                          data-productid="110768"
                          data-url="/ProductDetail/AddProductToFavorites"
                          class="wrapper-detail-icon"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Favoriye Ekle"
                        >
                          <span class="favourite-heart"
                            ><i class="fas fa-heart"></i
                          ></span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-name='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                          data-code=""
                          data-url="dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
                          data-category="PC_POR"
                          data-id="110768"
                          data-price="10.018"
                          data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                          class="wrapper-detail-icon"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Karşılaştır"
                        >
                          <span class="exchange-alt"
                            ><i class="fas fa-exchange-alt"></i
                          ></span>
                        </a>
                        <a
                          class="wrapper-detail-icon icon-share2 socialShareBtn "
                          href="javascript:void(0);"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Paylaş"
                        >
                          <span class="share-alt"
                            ><i class="fas fa-share-alt"></i
                          ></span>
                        </a>
                        <div class="social-share hide">
                          <a
                            href="javascript:socialShare(&#39;fb&#39;, &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                            class="icon-facebook"
                          ></a>
                          <a
                            href="javascript:socialShare(&#39;tt&#39;,  &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                            class="icon-twitter"
                          ></a>
                          <a
                            href="javascript:socialShare(&#39;wp&#39;, &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                            class="icon-whatsapp"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <ul class="product-under-list">
                      <li
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Vatanbilgisayar’da sizlere sunulan tüm ürünler Türkiye’deki yetkili ithalatçı ve üretici firmaların garantisi altındadır, Uluslararası markaların sadece Türkiye için üretilen veya özelleştirilen ve yetkili servislerin ülke garantisi sağladığı modelleri sizlere sunulmaktadır."
                      >
                        <span class="icon-warranty"
                          ><i class="fas fa-medal"></i
                        ></span>
                        <span>Garanti</span>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          data-name='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                          data-code=""
                          data-url="dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
                          data-category="PC_POR"
                          data-id="110768"
                          data-price="10.018"
                          data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                          class="addProductToCompare"
                        >
                          <span class="icon-exchange"></span>
                          <span>Karşılaştır</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-productid="110768"
                          data-url="/ProductDetail/ShopStockByProductQ"
                          class="stockBTN"
                        >
                          <span class="icon-map-marker-alt"></span>
                          <span>Stoktaki Mağazalar</span>
                        </a>
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Ürünü teslim aldığınız tarihten itibaren 14 gün içerisinde , ön bilgilendirme formunda ve sözleşme metninde yazılı olan usule uyarak ücretsiz iade edebilir veya değiştirebilirsiniz. Cayma bildirimi tarafımıza ulaştığı tarihten itibaren 20 gün içerisinde, ürüne herhangi bir hasar verilmemesi ve eksiksiz teslim edilmesi şartıyla, tercihinize göre ürünü iade alarak bedelini tarafınıza ödemeyi veya ürün bedeli kadar alış veriş kuponu vermeyi taahhüt ederiz. Ancak satın alınan elektronik ürünlerde; sim kart takılması, wifi ile network bağlantı kurulması, kurulum yapılması, sarf malzemesinin kullanılmış olması, koruyucu bantların çıkarılmış olması, aktivasyon yapılması ve kullanıcı yaratılması halinde iade kabul edilmemektedir. Kişisel bakım ürünleri de hijyen kuralları gereği iadeye uygun değildir. Ticari veya mesleki amaçlarla hareket eden tüzel kişi ve / veya kişiler cayma hakkından ve cayma hakkından doğan hiçbir haktan faydalanamaz."
                      >
                        <span class="truck-moving"
                          ><i class="fas fa-truck-moving"></i
                        ></span>
                        <span> İade</span>
                      </li>
                    </ul>
                    <div class="discount-prod-detail delivery-options">
                      <div class="discount-head clearfix">
                        <span>Teslimat Seçenekleri</span>
                      </div>
                      <div class="discount-item-wrapper">
                        <div
                          class="delivery-item standart-delivery-item"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="500 tl üzeri siparişleriniz kargo ücretsizdir. Standart teslimat ile verilen siparişler ortalama 2 iş gününde kargoya verilmektedir."
                        >
                          <span class="first-key"
                            >Standart teslimat (<b>ücretsiz</b>):</span
                          >
                          <span>
                            siparişiniz ortalama 2 iş gününde kargoya teslim
                            edilir.</span
                          >
                        </div>
                        <div
                          class="delivery-item"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="Bu ürüne yarın gün içerisinde sahip olmak istiyorsanız, 100 TL ye kadar olan siparişlerinizde 9.90 TL, 100 TL ve 1000 TL arası siparişlerinizde 4.90 TL ye, 1000 TL Üzeri siparişlerinizde ise YARIN TESLİM hizmetinden ücretsiz yararlanabilirsiniz.  Bugün 11:00 - 00:00 arası verdiğiniz siparişler, yarın 22:00&#39;a kadar teslim edilecektir.(3D güvenlik şifresi kullanılmadan verilen siparişlerde bu süre uzayabilmektedir.)"
                        >
                          <span class="first-key">Yarın teslim:</span
                          ><span>
                            11:00'dan itibaren verilen siparişleriniz ertesi gün
                            adresinize teslim edilir.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="container-fluid product-specs">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="prd-spec-head">Monitör Tipi:</div>
                          <div class="rank-dots">
                            <span class="score" style="width: 60%;"></span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="prd-spec-head">
                            İşlemci Teknolojisi:
                          </div>
                          <div class="rank-dots">
                            <span class="score" style="width: 80%;"></span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="prd-spec-head">
                            Ram (Sistem Belleği):
                          </div>
                          <div class="rank-dots">
                            <span class="score" style="width: 80%;"></span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="prd-spec-head">Disk Kapasitesi:</div>
                          <div class="rank-dots">
                            <span class="score" style="width: 60%;"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--Önerilen Ürünler-->
                    <AdvicedProductsC :productId="productId" />

                    <!--SORUN YARATAN CLASS-->
                    <div
                      class="discount-prod-detail best-comment-view"
                      v-show="productData.comments"
                    >
                      <div style="text-align: left">
                        <div class="wrapper-star comment-star">
                          <div>
                            <div class="rank-star">
                              <span
                                class="score"
                                id="topAverageRank"
                                :style="{
                                  width: (100 * productData.rate) / 5 + '%'
                                }"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="discount-item-wrapper"
                        style="text-align: left"
                      >
                        <!--sorunlu kısım-->
                        <p>
                          <b>{{ getComment(0).name }}</b>
                        </p>
                        <p class="best-comment-text">
                          {{ getComment(0).highlight_comment }}
                          {{ getComment(0).comment }}
                        </p>
                        <div class="item-all-comment">
                          <span class="d-inline-block"><strong></strong></span>
                          <a
                            href="javascript:void(0);"
                            id="allCommentBtn"
                            onclick="focusTab(&#39;yorumlar&#39;)"
                          >
                            <strong class="text-danger"
                              >Tüm Yorumlar ({{
                                productData.comments.length
                              }})</strong
                            >
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFancyBoxContainer
      :productId="productId"
      @close="showFancy = $show"
      v-show="showFancy"
    />
  </div>
</template>
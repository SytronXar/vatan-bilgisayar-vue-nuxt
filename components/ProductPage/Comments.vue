<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
export default {
  name: "UrunSayfasi",
  computed: {
    ...mapGetters({
      getProductWithId: "getProductWithId"
    }),
    productData(){
      this.getProductWithId(this.productId)
    },
    commentsLength(){
      return this.getProductWithId(this.productId).comments!=null ? this.getProductWithId(this.productId).comments.length : 0 
    }
  },
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<template>
  <div class="global-container">
    <div class="tab-content tab-pane--tab">
      <div role="tabpanel" class="tab-pane" id="genel-bakis"></div>
      <div role="tabpanel" class="tab-pane active" id="yorumlar">
        <div class="tab-panel">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h4 class="tab-pane--title">
                  Bu ürünle toplam <a>{{ commentsLength }}</a> adet
                  yorum yapıldı.
                </h4>
                <form
                  action="/ProductDetail/PostComment?Length=13"
                  data-ajax="true"
                  data-ajax-success="showMessage(data);if(data=='Yorumunuz Gönderildi.'){$('input[type = text], textarea').val('');$('.rank-item').removeClass('selected')}"
                  id="comment-with-login"
                  method="post"
                  style="display: none;"
                >
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="mQfjHt5DbANlvuqAWKI11Hl2ulAeI31ESiigj71JZ0odQJPUB1nIO3HhQSpxOQiCcCZnI-IokE61cJAUtfSvLMx4Yu01"
                  />

                  <div class="tab-pane--scoring">
                    <div class="wrapper-star wrapper-star--inline">
                      <div class="rank-star-apply">
                        <a class="rank-item icon-star star rank-1" rel="5"></a>
                        <a class="rank-item icon-star star rank-2" rel="4"></a>
                        <a class="rank-item icon-star star rank-3" rel="3"></a>
                        <a class="rank-item icon-star star rank-4" rel="2"></a>
                        <a class="rank-item icon-star star rank-5" rel="1"></a>
                        <input type="hidden" name="YRM_PUAN" />
                      </div>
                    </div>
                  </div>
                </form>
                <div id="comment-without-login" class="container-fluid">
                  <div class="row">
                    <div class="form-group text-center">
                      <h3>YORUM YAP</h3>
                      <p>Yorum yapabilmek için giriş yapmanız gerekmektedir.</p>
                      <a
                        href="/login?returnUrl=%2Fdell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html&amp;logtab=signin"
                        class="btn btn-default btn-transparent m-b-20"
                        >GİRİŞ YAP / ÜYE OL</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--Yorumlar sağ yıldız puanlama-->
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="wrapper-score clearfix">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 hidden-xs">
                    <picture>
                      <!--[if IE 9]></video><![endif]-->
                      <img
                        :src="getProductWithId(productId).images[0]"
                        class="img-responsive product-list__image product-list--third__image"
                      />
                    </picture>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <div class="wrapper-star">
                      <div class="rank-star">
                        <span
                          class="score"
                          id="topAverageRank"
                          :style="{
                            width: (100 * getProductWithId(productId).rate) / 5 + '%'
                          }"
                        ></span>
                      </div>
                      <span style=""
                        >Bu ürün
                        <b>{{ commentsLength }}</b> yorumdan
                        ortalama</span
                      >
                      <span>
                        <strong id="averageRankNum">
                          {{ 13.5 / commentsLength }}</strong
                        >
                        Puan Almıştır</span
                      >
                    </div>

                    <div class="tab-pane--star-score">
                      <div>5 Yıldız</div>
                      <div class="wrapper-progress">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-warning"
                            id="5star"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width:31%"
                          >
                            <span class="sr-only"></span>
                          </div>
                        </div>
                      </div>
                      <div class="starTxt5">%31</div>
                    </div>
                    <div class="tab-pane--star-score">
                      <div>4 Yıldız</div>
                      <div class="wrapper-progress">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-warning"
                            id="4star"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width:62%"
                          >
                            <span class="sr-only"></span>
                          </div>
                        </div>
                      </div>
                      <div class="starTxt4">%62</div>
                    </div>
                    <div class="tab-pane--star-score">
                      <div>3 Yıldız</div>
                      <div class="wrapper-progress">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-warning"
                            id="3star"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width:0%"
                          >
                            <span class="sr-only"></span>
                          </div>
                        </div>
                      </div>
                      <div class="starTxt3">%0</div>
                    </div>
                    <div class="tab-pane--star-score">
                      <div>2 Yıldız</div>
                      <div class="wrapper-progress">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-warning"
                            id="2star"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width:0%"
                          >
                            <span class="sr-only"></span>
                          </div>
                        </div>
                      </div>
                      <div class="starTxt2">%0</div>
                    </div>
                    <div class="tab-pane--star-score">
                      <div>1 Yıldız</div>
                      <div class="wrapper-progress">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-warning"
                            id="1star"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width:8%"
                          >
                            <span class="sr-only"></span>
                          </div>
                        </div>
                      </div>
                      <div class="starTxt1">%8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Yorumlar-->
            <div class="owl-t-container">
              <div class="comment-section">
                <div
                  id="itemContainer"
                  class="row"
                  v-for="comment in getProductWithId(productId).comments"
                  :key="comment"
                >
                  <div
                    class="col-md-12 ds-table comment-items"
                    style="text-align: left"
                  >
                    <div
                      class="wrapper-comments commetPrd"
                      :data-rank="comment.rate"
                    >
                      <div
                        class="wrapper-star comment-star"
                        v-for="n in comment.rate"
                        :key="n"
                      >
                        <div class="rank-star">
                          <span
                            class="score"
                            id="topAverageRank"
                            :style="{
                              width: (100 * comment.rate) / 5 + '%'
                            }"
                          ></span>
                        </div>
                      </div>
                      <span class="date comment-date"
                        >{{ comment.date }} {{ comment.time }}</span
                      >

                      <div>
                        <h4>
                          <span>{{ comment.name }}</span>
                        </h4>
                        <h3>{{ comment.highlight_comment }}</h3>
                        <p class="comment">
                          {{ comment.comment }}
                        </p>
                        <p class="helpful">
                          <span>Bu yorum faydalı oldu mu?</span>
                          <a
                            data-type="true"
                            data-url="/ProductDetail/AppraiseTheComment"
                            data-commentid="124230"
                            href="javascript:void(0)"
                            class="btn btn-default btn-transparent"
                            >Evet <span>(0)</span></a
                          >
                          <a
                            data-type="false"
                            data-url="/ProductDetail/AppraiseTheComment"
                            data-commentid="124230"
                            href="javascript:void(0)"
                            class="btn btn-default btn-transparent"
                            >Hayır <span>(0)</span></a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="load-more-area">
                  <button class="btn btn-primary loadMoreCommet">
                    Daha Fazla
                  </button>
                </div>
              </div>
              <p class="text-right no-margin">Tüm yorumları görüntülediniz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <div>
    <div class="wrapper-breadcrumb">
      <div class="global-container">
        <div class="row">
          <div class="col-xs-12">
            <ul class="breadcrumb" style="text-align: left">
              <li>
                <a class="bradcrumb-item">Bilgisayar</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="product-list-container" class="opportunity">
      <div class="global-container">
        <div class="wrapper-opportunity-content clearfix">
          <div class="wrapper-detailpage-header clearfix">
            <div class="wrapper-detailpage-header__item-left" style="text-align: left">
              <h1 class="wrapper-detailpage-header__title">
                Bilgisayar
              </h1>
              Bilgisayar ürünleri, modelleri ve fiyatları özel indirim ve taksit
              seçenekleri sadece Vatan Bilgisayar'da! Şimdi bilgisayar satın al!
              <p class="wrapper-detailpage-header__text">
                Bilgisayar kategorisinde
                <strong
                  ><span>Bilgisayar</span> modellerinde <span>{{productsData.length}}</span> adet
                  ürün </strong
                >bulundu.
              </p>
            </div>
            <div class="wrapper-detailpage-header__item-right hidden-xs">
              <div class="group-radio">
                <label class="wrapper-radio">
                  STOKTAKİLER
                  <input
                    onclick="location.search = '' + $.query.set('stk', 'true');locked();"
                    type="checkbox"
                    name="address_id"
                    value="1"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="desktop-sort-select">
                <select
                  onchange="location.search = '' + $.query.set('srt', $(this).val()); locked();"
                  name="sort-options"
                  id="sortOptionsDesktop"
                >
                  <option value="">Son Eklenen Üstte</option>
                  <option value="UP">Fiyata Göre Artan</option>
                  <option value="PU">Fiyata Göre Azalan</option>
                  <option value="RA">Değerlendirme Puanına Göre</option>
                  <option value="EY">Eskiden Yeniye</option>
                  <option value="YE">Yeniden Eskiye</option>
                  <option value="IA">İndirime Göre Artan</option>
                  <option value="AI">İndirime Göre Azalan</option>
                  <option value="ES">En Çok Satanlar</option>
                </select>
              </div>
            </div>
            <div class="filter-container clearfix">
              <div class="wrap">
                <a
                  href="javascript:void(0);"
                  id="open-filter-button"
                  class="btn btn-primary btn-no-rounded"
                >
                  <span>Filtrele</span>
                  <span class="icon-angle-down"></span>
                </a>
                <a
                  href="javascript:void(0);"
                  id="open-sort-menu"
                  class="btn btn-primary btn-no-rounded has-selectbox"
                  onclick="showSortOptions()"
                >
                  <span>Sırala</span>
                  <span class="icon-angle-down"></span>
                  <select
                    onchange="location.search = '' + $.query.set('srt', $(this).val());"
                    name="sort-options"
                    id="sortOptionsMobile"
                  >
                    <option value="">Son Eklenen Üstte</option>
                    <option value="UP">Fiyata Göre Artan</option>
                    <option value="PU">Fiyata Göre Azalan</option>
                    <option value="RA">Değerlendirme Puanına Göre</option>
                    <option value="EY">Eskiden Yeniye</option>
                    <option value="YE">Yeniden Eskiye</option>
                    <option value="IA">İndirime Göre Artan</option>
                    <option value="AI">İndirime Göre Azalan</option>
                    <option value="ES">En Çok Satanlar</option>
                  </select>
                </a>
              </div>
            </div>
          </div>
          <CategoriesBilgisayar />
          <div class="wrapper-product-main">
            <div class="wrapper-product wrapper-product--list-page clearfix">
              <div class="opportunity-content clearfix">
                <div class="row">
                  <!--V-for ile sıfırdan yapılacak-->
                  <ProductButton
                    :productId="getProductID(index)"
                    v-for="(n, index) in getMaxAvailableListCount(18)"
                    :key="n" :itemWidth="125"
                  />
                </div>
              </div>
            </div>
            <div class="text-center">
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="pagination__item active">
                    <a href="/bilgisayar/?page=1" class="pagination__content"
                      >1<span class="sr-only"></span
                    ></a>
                  </li>
                  <li class="pagination__item">
                    <a href="/bilgisayar/?page=2" class="pagination__content"
                      >2<span class="sr-only"></span
                    ></a>
                  </li>
                  <li class="pagination__item">
                    <a href="/bilgisayar/?page=3" class="pagination__content"
                      >3<span class="sr-only"></span
                    ></a>
                  </li>
                  <li class="pagination__item">
                    <a href="/bilgisayar/?page=4" class="pagination__content"
                      >4<span class="sr-only"></span
                    ></a>
                  </li>
                  <li class="pagination__item">
                    <a href="/bilgisayar/?page=5" class="pagination__content"
                      >5<span class="sr-only"></span
                    ></a>
                  </li>
                  <li class="pagination__item">
                    <a href="/bilgisayar/?page=2" class="pagination__content"
                      ><span class="icon-angle-right"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
            <h2 style="text-align: left">Bilgisayar</h2>
            <p>
              Günümüzün en çok kullanılan teknolojik araçları arasında yer alan
              bilgisayarlar, gün geçtikçe daha gösterişli ve daha özellikli hale
              gelmekte. Bilgisayar alırken kalite esaslarına dayanarak seçim
              yapmanız bu açıdan son derece önem arz ediyor. Kaliteli markalar
              tarafından üretilen bilgisayarlar, hayal ettiklerinizi gerçeğe
              dönüştürebilmek açısından çok daha uygundur. Teknolojik
              gelişmelerde ilerleme kaydedildikçe bilgisayarların özelliklerinde
              de bir takım değişimler yaşanabiliyor. Masaüstü bilgisayar
              modellerinin yanı sıra taşınabilir bilgisayarlar da son derece
              ilgi çekmekte. Ayrıca masaüstü bilgisayar kategorisinde hepsi bir
              arada (All in One), oyuncu bilgisayarı (gaming pc), mini
              bilgisayar ve dokunmatik hepsi bir arada bilgisayarlar bulunurken;
              taşınabilir bilgisayarlarda masaüstü performansı alabileceğiniz
              üstün özellikli notebook'lar da bulunmaktadır. Ultrabook zarif ve
              ince yapısıyla hem yüksek performans hem de taşıma kolaylığı
              sağlamasıyla ilgi çekicidir, yine oyuncular için tasarlanan Gaming
              Notebook'lar oldukça ilgi görmektedir.
            </p>
            <div class="clearfix">
              <a href="javascript:void(0);" class="catTags-toggle"
                >Devamını göster</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="courier">
        <div class="global-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-5ths col-sm-6 col-xs-6">
                <div class="courier-item">
                  <div
                    class="courier-item__wrapper courier-item__wrapper--first"
                  >
                    <span class="icon-motorcycle courier-item__img"
                      ><i class="fas fa-motorcycle" aria-hidden="true"></i
                    ></span>
                  </div>
                  <div class="courier-item__wrapper">
                    <h4 class="courier-item__title">MOTOKURYE</h4>
                    <p class="courier-item__content">
                      Seçili ürünlere 30dk - 3 saat arasında sahip olma fırsatı.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5ths col-sm-6 col-xs-6">
                <div class="courier-item">
                  <div
                    class="courier-item__wrapper courier-item__wrapper--first"
                  >
                    <span class="daily-delivery courier-item__img"
                      ><i class="fas fa-truck-loading" aria-hidden="true"></i
                    ></span>
                  </div>
                  <div class="courier-item__wrapper">
                    <h4 class="courier-item__title">BUGÜN TESLİM</h4>
                    <p class="courier-item__content">
                      Seçili ürünlere gün içerisinde sahip olma fırsatı.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5ths col-sm-6 col-xs-6">
                <div class="courier-item">
                  <div
                    class="courier-item__wrapper courier-item__wrapper--first"
                  >
                    <span class="icon-truck-line courier-item__img"
                      ><i class="fas fa-shipping-fast" aria-hidden="true"></i
                    ></span>
                  </div>
                  <div class="courier-item__wrapper">
                    <h4 title="KARGO BEDAVA" class="courier-item__title">
                      KARGO BEDAVA
                    </h4>
                    <p class="courier-item__content">
                      Seçili ürünlerde standart kargo bedava.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5ths col-sm-6 col-xs-6">
                <div class="courier-item">
                  <div
                    class="courier-item__wrapper courier-item__wrapper--first"
                  >
                    <span class="icon-calender courier-item__img"
                      ><i class="fas fa-calendar-alt" aria-hidden="true"></i
                    ></span>
                  </div>
                  <div class="courier-item__wrapper">
                    <h4 title="KOLAY İADE" class="courier-item__title">
                      KOLAY İADE
                    </h4>
                    <p class="courier-item__content">
                      14 gün içerisinde cayma hakkı. İnternetten verilen
                      siparişlerde, mağazadan iade imkanı.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5ths col-sm-6 col-xs-6">
                <div class="courier-item">
                  <div
                    class="courier-item__wrapper courier-item__wrapper--first"
                  >
                    <span class="headset courier-item__img"
                      ><i class="fas fa-phone-square" aria-hidden="true"></i
                    ></span>
                  </div>
                  <div class="courier-item__wrapper">
                    <h4 title="KOLAY İADE" class="courier-item__title">
                      TELEFONLA SİPARİŞ
                    </h4>
                    <p class="courier-item__content">0850 222 5660</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductButton from "@/components/TheProductButton";
import CategoriesBilgisayar from "@/components/CategoriesBilgisayar";
import Products from "@/store/Products";
export default {
  components: {
    ProductButton,
    CategoriesBilgisayar
  },

  data() {
    return {
      productsData: Products.data
    };
  },

  computed: {},
  methods: {
    getProductID(index) {
      return this.productsData[index].id;
    },
    getMaxAvailableListCount(number) {
      if (this.productsData.length < number) return this.productsData.length;
      return number;
    }
  }
};
</script>

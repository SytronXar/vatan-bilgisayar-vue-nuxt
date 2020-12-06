<template>
  <div class="wrapper-filter-aside" id="filterAside">
    <div class="filter-aside">
      <a
        href="javascript:void(0);"
        id="closeFilter"
        class="btn btn-primary btn-no-rounded"
      >
        <span>Filtreyi Kapat</span>
      </a>
    </div>
    <div class="filter-aside-footer">
      <a href="/bilgisayar" onclick="locked()">Filtreyi Temizle</a>
    </div>
    <div
      class="panel-group"
      id="accordion2"
      role="tablist"
      aria-multiselectable="true"
    >
      <!-- Kategori filtre paneli -->
      <KategoriFiltrePaneli />
      <MarkaFiltrePaneli />
      <div class="panel panel-default">
        <div class="panel-heading filter-header" role="tab" id="priceButton">
          <h4 class="panel-title filter-header__text">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#brandsContent"
              href="#priceContent"
              aria-expanded="true"
              aria-controls="collapseOne"
              class="filter-header__link clearfix"
            >
              <span class="filter-header__text">Fiyat Aralığı</span>
              <span
                class="filter-header__icon icon-angle-up"
                aria-expanded="true"
              ></span>
            </a>
          </h4>
        </div>
        <div
          id="priceContent"
          class="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby="priceButton"
        >
          <div class="panel-body wrapper-filter-list">
            <ul class="filter-list">
              <li class="filter-list__item" data-count="1">
                <a
                  href="/200-500-tl-arasi/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">200 - 499TL (8)</span>
                  </div>
                </a>
              </li>
              <li class="filter-list__item" data-count="1">
                <a
                  href="/500-1000-tl-arasi/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">500 - 999 TL (20)</span>
                  </div>
                </a>
              </li>
              <li class="filter-list__item" data-count="1">
                <a
                  href="/1000-2000-tl-arasi/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">1000 - 1999 TL (19)</span>
                  </div>
                </a>
              </li>
              <li class="filter-list__item" data-count="1">
                <a
                  href="/2000-3000-tl-arasi/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">2000 - 2999 TL (10)</span>
                  </div>
                </a>
              </li>
              <li class="filter-list__item" data-count="1">
                <a
                  href="/3000-5000-tl-arasi/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">3000 - 4999 TL (20)</span>
                  </div>
                </a>
              </li>
              <li class="filter-list__item" data-count="1">
                <a
                  href="/5000-10000-tl-arasi/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">5000 - 9999 TL (47)</span>
                  </div>
                </a>
              </li>
              <li class="filter-list__item" data-count="1">
                <a
                  href="/10000-tl-uzeri/bilgisayar/"
                  onclick="locked()"
                  class="filter-list__link"
                >
                  <div class="wrapper-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="filter-list__text">10000 TL - Üzeri (73)</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="wrapper-filter-list__price-filter">
              <div class="price-inputs-area">
                <input
                  type="text"
                  id="min-price"
                  name="min-price"
                  placeholder="Min TL"
                  class="wrapper-filter-list__price-filter-min"
                  v-model="MinPrice"
                  inputmode="text"
                />
              </div>
              <div class="price-inputs-area">
                <input
                  type="text"
                  id="max-price"
                  name="max-price"
                  placeholder="Max TL"
                  class="wrapper-filter-list__price-filter-max"
                  v-model="MaxPrice"
                  inputmode="text"
                />
              </div>
              <div class="price-inputs-area btn-cell">
                <a
                  @click="setCostFilter()"
                  class="wrapper-filter-list__price-filter-button"
                  >Ara</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading filter-header" role="tab" id="filterButton">
          <h4 class="panel-title filter-header__text">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#screenSizeContent"
              href="#filterContent"
              aria-expanded="true"
              aria-controls="filterContent"
              class="filter-header__link clearfix"
            >
              <span class="filter-header__text">Kelime ile Filtrele</span>
              <span
                class="filter-header__icon icon-angle-up"
                aria-expanded="true"
              ></span>
            </a>
          </h4>
        </div>
        <div
          id="filterContent"
          class="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby="filterButton"
        >
          <div class="panel-body wrapper-filter-list">
            <div class="wrapper-filter-list__price-filter">
              <div class="price-inputs-area">
                <input
                  id="searchwithword"
                  type="text"
                  name="searchwithword"
                  placeholder="Kelime Yazınız..."
                  class="wrapper-filter-list__search"
                  v-model="SearchString"
                />
              </div>
              <div class="price-inputs-area btn-cell">
                <a
                  class="wrapper-filter-list__price-filter-button searchwithword"
                  @click="setNameFilter()"
                  href="javascript:void(0)"
                  >Ara</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KategoriFiltrePaneli from "@/components/FilterComponent/KategoriFiltreleme/Panel";
import MarkaFiltrePaneli from "@/components/FilterComponent/MarkaFiltreleme/Panel";
export default {
  components: {
    KategoriFiltrePaneli,
    MarkaFiltrePaneli,
  },
  data() {
    return {
      SearchString: "",
      MinPrice: 0,
      MaxPrice: 0,
    };
  },
  methods: {
    setFilter() {
      var minPrice = this.MinPrice;
      var maxPrice = this.MaxPrice;
      var searchString = this.SearchString;
      this.$store.commit("Products/setFilter", {
        minPrice,
        maxPrice,
        searchString,
      });
    },
    setNameFilter() {
      var key = this.SearchString;
      this.$store.commit("Products/setNameFilter", key);
    },
    setCostFilter() {
      var min = Number(this.MinPrice);
      var max = Number(this.MaxPrice);
      console.log("max");
      this.$store.commit("Products/setCostFilter", { min, max });
    },
  },
};
</script>
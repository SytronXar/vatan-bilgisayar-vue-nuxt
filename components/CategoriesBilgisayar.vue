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
      <FiyatFiltrePaneli />
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
import FiyatFiltrePaneli from "@/components/FilterComponent/FiyatFiltreleme/Panel";
export default {
  components: {
    KategoriFiltrePaneli,
    MarkaFiltrePaneli,
    FiyatFiltrePaneli
  },
  data() {
    return {
      SearchString: "",
    };
  },
  methods: {
    setNameFilter() {
      var key = this.SearchString;
      this.$store.commit("Products/setNameFilter", key);
    }
  },
};
</script>
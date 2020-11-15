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
              <div class="panel panel-default">
                <div
                  class="panel-heading filter-header"
                  role="tab"
                  id="4-Button"
                >
                  <h4 class="panel-title filter-header__text">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#4-Content"
                      href="#4-Content"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      class="filter-header__link clearfix"
                    >
                      <span class="filter-header__text">Bilgisayar</span>
                      <span
                        class="filter-header__icon icon-angle-up"
                        aria-expanded="true"
                      ></span>
                    </a>
                  </h4>
                </div>
                <div
                  id="4-Content"
                  class="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="4-Button"
                >
                  <div class="panel-body wrapper-filter-list">
                    <ul class="filter-list">
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/masaustu-aksesuarlar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text"
                              >Masaüstü Aksesuarlar (3)</span
                            >
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/masaustu-bilgisayarlar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text"
                              >Masaüstü Bilgisayarlar (32)</span
                            >
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/notebook/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">Notebook (80)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/tabletler/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">Tablet (72)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/notebook-netbook-cantalari/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text"
                              >Taşınabilir Aksesuarlar (10)</span
                            >
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div
                  class="panel-heading filter-header"
                  role="tab"
                  id="1-Button"
                >
                  <h4 class="panel-title filter-header__text">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#1-Content"
                      href="#1-Content"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      class="filter-header__link clearfix"
                    >
                      <span class="filter-header__text">Markalar</span>
                      <span
                        class="filter-header__icon icon-angle-up"
                        aria-expanded="true"
                      ></span>
                    </a>
                  </h4>
                </div>
                <div
                  id="1-Content"
                  class="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="1-Button"
                >
                  <div class="panel-body wrapper-filter-list">
                    <ul class="filter-list">
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/acer/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">ACER (8)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/alcatel/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">ALCATEL (5)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/apple/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">APPLE (35)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/asus/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">ASUS (29)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/beats/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">BEATS (3)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/dell/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">DELL (4)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/everpad/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">EVERPAD (15)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/hometech/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">HOMETECH (2)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/hp/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">HP (5)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/huawei/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">HUAWEI (8)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/lenovo/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">LENOVO (37)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/microsoft/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">MICROSOFT (4)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/msi/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">MSI (25)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/samsung/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">SAMSUNG (16)</span>
                          </div>
                        </a>
                      </li>
                      <li class="filter-list__item" data-count="1">
                        <a
                          href="/s-link/bilgisayar/"
                          onclick="locked()"
                          class="filter-list__link"
                        >
                          <div class="wrapper-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span class="filter-list__text">S-LINK (1)</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div
                  class="panel-heading filter-header"
                  role="tab"
                  id="priceButton"
                >
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
                            <span class="filter-list__text"
                              >200 - 499TL (8)</span
                            >
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
                            <span class="filter-list__text"
                              >500 - 999 TL (20)</span
                            >
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
                            <span class="filter-list__text"
                              >1000 - 1999 TL (19)</span
                            >
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
                            <span class="filter-list__text"
                              >2000 - 2999 TL (10)</span
                            >
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
                            <span class="filter-list__text"
                              >3000 - 4999 TL (20)</span
                            >
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
                            <span class="filter-list__text"
                              >5000 - 9999 TL (47)</span
                            >
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
                            <span class="filter-list__text"
                              >10000 TL - Üzeri (73)</span
                            >
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
                          inputmode="text"
                        />
                      </div>
                      <div class="price-inputs-area btn-cell">
                        <a
                          onclick="location.search = '' + $.query.set('min', $('#min-price').val()).set('max', $('#max-price').val())"
                          class="wrapper-filter-list__price-filter-button"
                          >Ara</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div
                  class="panel-heading filter-header"
                  role="tab"
                  id="filterButton"
                >
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
                      <span class="filter-header__text"
                        >Kelime ile Filtrele</span
                      >
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
                        />
                      </div>
                      <div class="price-inputs-area btn-cell">
                        <a
                          class="wrapper-filter-list__price-filter-button searchwithword"
                          onclick="location.search = '' + $.query.set('qText', $('#searchwithword').val());"
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
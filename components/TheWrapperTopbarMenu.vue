<template>
  <div class="wrapper-topbar-menu">
    <div class="global-container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="navbar-collapse collapse" id="navbar">
            <div class="tree-links">
              <a class="topbar-menu__link" href="/firsat-urunler"
                ><span class="topbar-menu__text">FIRSAT</span>
              </a>
              <a class="topbar-menu__link" href="/webeozel-urunler"
                ><span class="topbar-menu__text">WEB&#39;E &Ouml;ZEL</span>
              </a>
              <a class="topbar-menu__link" href="/yeni-urunler"
                ><span class="topbar-menu__text">YENİ</span>
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/telefonlar/">Telefon</a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link"
                            >Telefon</a
                          >
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a
                            class="magic-parent-link"
                            href="/cep-telefonu-modelleri/"
                            >T&uuml;m Telefonlar</a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/cep-telefonu-modelleri/"
                            >Cep Telefonları
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Cep Telefonları
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/cep-telefonu-modelleri/"
                                      >T&uuml;m Cep Telefonları</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/cep-telefonu-modelleri/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/general-mobile/cep-telefonu-modelleri/"
                                      >General Mobile
                                    </a>
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/honor/cep-telefonu-modelleri/"
                                      >Honor</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/huawei/cep-telefonu-modelleri/"
                                      >Huawei</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/oppo/cep-telefonu-modelleri/"
                                      >Oppo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/realme/cep-telefonu-modelleri/"
                                      >Realme</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/reeder/cep-telefonu-modelleri/"
                                      >Reeder</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/cep-telefonu-modelleri/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/vestel/cep-telefonu-modelleri/"
                                      >Vestel</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/xiaomi/cep-telefonu-modelleri/"
                                      >Xiaomi</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/vivo/cep-telefonu-modelleri/"
                                      >Vivo</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a class="dropdown-menu-list__link" href="/tabletler/"
                            >Tabletler</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Tabletler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/tabletler/"
                                      >T&uuml;m Tabletler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/tabletler/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everpad/tabletler/"
                                      >Everpad</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/huawei/tabletler/"
                                      >Huawei</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/tabletler/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/tabletler/"
                                      >Samsung</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/akilli-saatler/"
                            >Akıllı Saatler
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Akıllı Saatler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/akilli-saatler/"
                                      >T&uuml;m Akıllı Saatler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/alcatel/akilli-saatler/"
                                      >Alcatel</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/akilli-saatler/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/honor/akilli-saatler/"
                                      >Honor</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/huawei/akilli-saatler/"
                                      >Huawei</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/akilli-saatler/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/xiaomi/akilli-saatler/"
                                      >Xiaomi</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/telefon-kiliflari/"
                            >Telefon Kılıfları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/ekran-koruyucu/"
                            >Ekran Koruyucular
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tablet-kiliflari/"
                            >Tablet Kılıfları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bluetooth-kulaklik/"
                            >Bluetooth &Uuml;r&uuml;nleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kablosuz-telefon-modelleri/"
                            >Kablosuz Telefonlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tasinabilir-batarya/"
                            >Taşınabilir Şarj Aletleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bluetooth-kulaklik-mikrofon/"
                            >Kulaklık ve Mikrofon</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/hafiza-karti/"
                            >Hafıza Kartı
                          </a>
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/telefonlar"
                          >T&uuml;m Telefon &Uuml;r&uuml;nlerini G&ouml;r</a
                        >
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/outlet/cep-telefonu-modelleri/"
                          style="margin-left: 15px;"
                          >Outlet Cep Telefonları</a
                        >
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/telefon.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/telefon.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/bilgisayar/">Bilgisayar</a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link"
                            >Bilgisayar</a
                          >
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a class="magic-parent-link" href="/bilgisayar/"
                            >T&uuml;m Bilgisayarlar</a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a class="dropdown-menu-list__link" href="/notebook/"
                            >Notebook</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Notebooklar
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/notebook/"
                                      >T&uuml;m Notebooklar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/acer/notebook/"
                                      >Acer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/notebook/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/notebook/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/dell/notebook/"
                                      >Dell</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hometech/notebook/"
                                      >Hometech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/notebook/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/notebook/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/notebook/"
                                      >MSI</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/microsoft/notebook/"
                                      >Microsoft</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/masaustu-bilgisayarlar/"
                            >Masa&uuml;st&uuml; Bilgisayarlar</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Masa&uuml;st&uuml; Bilgisayarlar
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/masaustu-bilgisayarlar/"
                                      >T&uuml;m Masa&uuml;st&uuml;
                                      Bilgisayarlar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/acer/masaustu-bilgisayarlar/"
                                      >Acer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/masaustu-bilgisayarlar/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/masaustu-bilgisayarlar/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/exper/masaustu-bilgisayarlar/"
                                      >Exper</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/masaustu-bilgisayarlar/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/masaustu-bilgisayarlar/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/microsoft/masaustu-bilgisayarlar/"
                                      >Microsoft</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/masaustu-bilgisayarlar/"
                                      >MSI</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a class="dropdown-menu-list__link" href="/tabletler/"
                            >Tabletler</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Tabletler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/tabletler/"
                                      >T&uuml;m Tabletler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/tabletler/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everpad/tabletler/"
                                      >Everpad</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/huawei/tabletler/"
                                      >Huawei</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/tabletler/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/reeder/tabletler/"
                                      >Reeder</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/tabletler/"
                                      >Samsung</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bilgisayar-bilesenleri/"
                            >Bilgisayar Bileşenleri(OEM)</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Bilgisayar Bileşenleri(OEM)
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bilgisayar-bilesenleri/"
                                      >T&uuml;m Bilgisayar Bileşenleri</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/a4-tech/bilgisayar-bilesenleri/"
                                      >A4 Tech
                                    </a>
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/amd/bilgisayar-bilesenleri/"
                                      >AMD</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/aoc/bilgisayar-bilesenleri/"
                                      >AOC</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/bilgisayar-bilesenleri/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/bilgisayar-bilesenleri/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/benq/bilgisayar-bilesenleri/"
                                      >BenQ</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cooler-master/bilgisayar-bilesenleri/"
                                      >Cooler Master
                                    </a>
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/corsair/bilgisayar-bilesenleri/"
                                      >Corsair</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cougar/bilgisayar-bilesenleri/"
                                      >Cougar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/crucial/bilgisayar-bilesenleri/"
                                      >Crucial</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/dell/bilgisayar-bilesenleri/"
                                      >Dell</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everest/bilgisayar-bilesenleri/"
                                      >Everest</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/evga/bilgisayar-bilesenleri/"
                                      >Evga</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/frisby/bilgisayar-bilesenleri/"
                                      >Frisby</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gigabyte/bilgisayar-bilesenleri/"
                                      >Gigabyte</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gskill/bilgisayar-bilesenleri/"
                                      >GSKILL</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/bilgisayar-bilesenleri/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/inca/bilgisayar-bilesenleri/"
                                      >INCA</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/intel/bilgisayar-bilesenleri/"
                                      >Intel</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/kingston/bilgisayar-bilesenleri/"
                                      >Kingston</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/bilgisayar-bilesenleri/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lg/bilgisayar-bilesenleri/"
                                      >LG</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/logitech/bilgisayar-bilesenleri/"
                                      >Logitech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/microsoft/bilgisayar-bilesenleri/"
                                      >Microsoft</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/bilgisayar-bilesenleri/"
                                      >MSI</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/ocz/bilgisayar-bilesenleri/"
                                      >OCZ</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/oem/bilgisayar-bilesenleri/"
                                      >OEM</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/philips/bilgisayar-bilesenleri/"
                                      >Philips</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/pioneer/bilgisayar-bilesenleri/"
                                      >Pioneer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/bilgisayar-bilesenleri/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/razer/bilgisayar-bilesenleri/"
                                      >Razer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/bilgisayar-bilesenleri/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sandisk/bilgisayar-bilesenleri/"
                                      >Sandisk</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sapphire/bilgisayar-bilesenleri/"
                                      >Sapphire</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/seagate/bilgisayar-bilesenleri/"
                                      >Seagate</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/s-link/bilgisayar-bilesenleri/"
                                      >S-link</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/thermaltake/bilgisayar-bilesenleri/"
                                      >Thermaltake</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/toshiba/bilgisayar-bilesenleri/"
                                      >Toshiba</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/transcend/bilgisayar-bilesenleri/"
                                      >Transcend</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/trust/bilgisayar-bilesenleri/"
                                      >Trust</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/viewsonic/bilgisayar-bilesenleri/"
                                      >Viewsonic</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/wd/bilgisayar-bilesenleri/"
                                      >WD</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/xigmatek/bilgisayar-bilesenleri/"
                                      >Xigmatek</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/zalman/bilgisayar-bilesenleri/"
                                      >Zalman</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/zotac/bilgisayar-bilesenleri/"
                                      >Zotac</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/oyun-bilgisayari"
                            >Oyun Bilgisayarı
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Oyun Bilgisayarı
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/oyun-bilgisayari"
                                      >T&uuml;m Oyun Bilgisayarları</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/acer/oyun-bilgisayari/"
                                      >Acer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/oyun-bilgisayari/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/dell/oyun-bilgisayari/"
                                      >Dell</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/oyun-bilgisayari/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/oyun-bilgisayari/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/oyun-bilgisayari/"
                                      >Msi</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link"
                            href="/oem-hazir-sistemler/"
                            ><strong>OEM Hazır Sistemler</strong></a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/harici-diskler/"
                            >Harici Diskler
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Harici Diskler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/harici-diskler/"
                                      >T&uuml;m Harici Diskler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/seagate/harici-diskler/"
                                      >Seagate</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/toshiba/harici-diskler/"
                                      >Toshiba</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/wd/harici-diskler/"
                                      >WD</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bilgisayar-monitorleri/"
                            >Monit&ouml;rler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/yazici/"
                            >Yazıcılar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/network-urunleri/"
                            >Network &Uuml;r&uuml;nleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/modemler/"
                            >Modemler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/guvenlik-antivirus-yazilimlari/"
                            >G&uuml;venlik Yazılımları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/isletim-sistemleri/"
                            >İşletim Sistemleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/microsoft-office/"
                            >Microsoft Office Programları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/cantalar-kiliflar/"
                            >&Ccedil;anta ve Kılıflar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/notebook-stand-ve-sogutucular/"
                            >Notebook Soğutucu</a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bluetooth-kulaklik-mikrofon/"
                            >Kulaklık ve Mikrofon</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Kulaklık ve Mikrofonlar
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bluetooth-kulaklik-mikrofon/"
                                      >T&uuml;m Kulaklık ve Mikrofonlar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/bluetooth-kulaklik-mikrofon/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/bluetooth-kulaklik-mikrofon/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/beats/bluetooth-kulaklik-mikrofon/"
                                      >Beats</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/bluetooth-kulaklik-mikrofon/"
                                      >Hp</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/huawei/bluetooth-kulaklik-mikrofon/"
                                      >Huawei</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hypergear/bluetooth-kulaklik-mikrofon/"
                                      >Hypergear</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hyperx/bluetooth-kulaklik-mikrofon/"
                                      >Hyperx</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/jabra/bluetooth-kulaklik-mikrofon/"
                                      >Jabra</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/jbl/bluetooth-kulaklik-mikrofon/"
                                      >JBL</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/logitech/bluetooth-kulaklik-mikrofon/"
                                      >Logitech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/philips/bluetooth-kulaklik-mikrofon/"
                                      >Philips</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/pioneer/bluetooth-kulaklik-mikrofon/"
                                      >Pioneer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/bluetooth-kulaklik-mikrofon/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/razer/bluetooth-kulaklik-mikrofon/"
                                      >Razer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/bluetooth-kulaklik-mikrofon/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sbs/bluetooth-kulaklik-mikrofon/"
                                      >SBS</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sennheiser/bluetooth-kulaklik-mikrofon/"
                                      >Sennheiser</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/skypal/bluetooth-kulaklik-mikrofon/"
                                      >Skypal</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/snopy/bluetooth-kulaklik-mikrofon/"
                                      >Snopy</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sony/bluetooth-kulaklik-mikrofon/"
                                      >Sony</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/trust/bluetooth-kulaklik-mikrofon/"
                                      >Trust</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/ttec/bluetooth-kulaklik-mikrofon/"
                                      >Ttec</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/bilgisayar"
                          >T&uuml;m Bilgisayar &Uuml;r&uuml;nlerini G&ouml;r
                        </a>
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/outlet/notebook/"
                          style="margin-left: 15px;"
                          >Outlet Notebooklar</a
                        >
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <a href="/oem-hazir-sistemler/"
                            ><img
                              class="lazyimg"
                              data-src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/kampanya-banner/oembanner2020-min.jpg"
                              src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/kampanya-banner/oembanner2020-min.jpg"
                            />
                          </a>
                        </div>
                        <div class="banner-list__item">
                          <a href="/pc-toplama/"
                            ><img
                              class="lazyimg lazy-init"
                              data-src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/anasayfa/pc-toplama.jpg"
                              src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/anasayfa/pc-toplama.jpg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/bilgisayar-bilesenleri/"
                  >Bilgisayar Par&ccedil;aları</a
                >
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link">
                            Bilgisayar Par&ccedil;aları
                          </a>
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a
                            class="magic-parent-link"
                            href="/bilgisayar-bilesenleri/"
                            >T&uuml;m Bilgisayar Par&ccedil;aları</a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bilgisayar-bilesenleri/"
                            >T&uuml;m OEM &Uuml;r&uuml;nleri</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m OEM &Uuml;r&uuml;nleri
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bilgisayar-bilesenleri/"
                                      >T&uuml;m Oem &Uuml;r&uuml;nleri</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/a4-tech/bilgisayar-bilesenleri/"
                                      >A4-Tech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/amd/bilgisayar-bilesenleri/"
                                      >AMD</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/aoc/bilgisayar-bilesenleri/"
                                      >AOC</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/bilgisayar-bilesenleri/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/bilgisayar-bilesenleri/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/benq/bilgisayar-bilesenleri/"
                                      >BenQ</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cooler-master/bilgisayar-bilesenleri/"
                                      >Cooler Master
                                    </a>
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/corsair/bilgisayar-bilesenleri/"
                                      >Corsair</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cougar/bilgisayar-bilesenleri/"
                                      >Cougar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/crucial/bilgisayar-bilesenleri/"
                                      >Crucial</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/dell/bilgisayar-bilesenleri/"
                                      >Dell</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everest/bilgisayar-bilesenleri/"
                                      >Everest</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/evga/bilgisayar-bilesenleri/"
                                      >Evga</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/frisby/bilgisayar-bilesenleri/"
                                      >Frisby</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gigabyte/bilgisayar-bilesenleri/"
                                      >Gigabyte</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gskill/bilgisayar-bilesenleri/"
                                      >Gskill</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/bilgisayar-bilesenleri/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/inca/bilgisayar-bilesenleri/"
                                      >Inca</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/intel/bilgisayar-bilesenleri/"
                                      >Intel</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/kingston/bilgisayar-bilesenleri/"
                                      >Kingston</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/bilgisayar-bilesenleri/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lg/bilgisayar-bilesenleri/"
                                      >LG</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/logitech/bilgisayar-bilesenleri/"
                                      >Logitech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/microsoft/bilgisayar-bilesenleri/"
                                      >Microsoft</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/bilgisayar-bilesenleri/"
                                      >MSI</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/ocz/bilgisayar-bilesenleri/"
                                      >OCZ</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/oem/bilgisayar-bilesenleri/"
                                      >OEM</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/philips/bilgisayar-bilesenleri/"
                                      >Philips</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/pioneer/bilgisayar-bilesenleri/"
                                      >Pioneer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/bilgisayar-bilesenleri/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/razer/bilgisayar-bilesenleri/"
                                      >Razer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/bilgisayar-bilesenleri/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sandisk/bilgisayar-bilesenleri/"
                                      >Sandisk</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sapphire/bilgisayar-bilesenleri/"
                                      >Sapphire</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/seagate/bilgisayar-bilesenleri/"
                                      >Seagate</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/s-link/bilgisayar-bilesenleri/"
                                      >S-Link</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/thermaltake/bilgisayar-bilesenleri/"
                                      >Thermaltake</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/toshiba/bilgisayar-bilesenleri/"
                                      >Toshiba</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link"
                                      href="/transcend/bilgisayar-bilesenleri/"
                                      special-menu-link=""
                                      >Transcend</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/trust/bilgisayar-bilesenleri/"
                                      >Trust</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/viewsonic/bilgisayar-bilesenleri/"
                                      >Viewsonic</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/wd/bilgisayar-bilesenleri/"
                                      >WD</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/xigmatek/bilgisayar-bilesenleri/"
                                      >Xigmatek</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/zalman/bilgisayar-bilesenleri/"
                                      >Zalman</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/zotac/bilgisayar-bilesenleri/"
                                      >Zotac</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bilgisayar-kasasi/"
                            >Bilgisayar Kasaları</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Bilgisayar Kasaları
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bilgisayar-kasasi/"
                                      >T&uuml;m Bilgisayar Kasaları</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/bilgisayar-kasasi/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cooler-master/bilgisayar-kasasi/"
                                      >Cooler Master
                                    </a>
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/corsair/bilgisayar-kasasi/"
                                      >Corsair</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cougar/bilgisayar-kasasi/"
                                      >Cougar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everest/bilgisayar-kasasi/"
                                      >Everest</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/frisby/bilgisayar-kasasi/"
                                      >Frisby</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/bilgisayar-kasasi/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/thermaltake/bilgisayar-kasasi/"
                                      >Thermaltake</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/xigmatek/bilgisayar-kasasi/"
                                      >Xigmatek</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/zalman/bilgisayar-kasasi/"
                                      >Zalman</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a class="dropdown-menu-list__link" href="/anakart/"
                            >Anakart</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Anakartlar
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/anakart/"
                                      >T&uuml;m Anakartlar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/anakart/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gigabyte/anakart/"
                                      >Gigabyte</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/anakart/"
                                      >MSI</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/islemciler/"
                            >İşlemciler</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m İşlemciler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/islemciler/"
                                      >T&uuml;m İşlemciler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/amd/islemciler/"
                                      >AMD</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/intel/islemciler/"
                                      >Intel</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/ekran-kartlari/"
                            >Ekran Kartları
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Ekran Kartları
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/ekran-kartlari/"
                                      >T&uuml;m Ekran Kartları</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/ekran-kartlari/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/evga/ekran-kartlari/"
                                      >Evga</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gigabyte/ekran-kartlari/"
                                      >Gigabyte</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/ekran-kartlari/"
                                      >MSI</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sapphire/ekran-kartlari/"
                                      >Sapphire</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/zotac/ekran-kartlari/"
                                      >Zotac</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bilgisayar-ram-bellek/"
                            >Ram</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Ram
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bilgisayar-ram-bellek/"
                                      >T&uuml;m Ram &Uuml;r&uuml;nleri</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/corsair/bilgisayar-ram-bellek/"
                                      >Corsair</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/crucial/bilgisayar-ram-bellek/"
                                      >Crucial</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/gskill/bilgisayar-ram-bellek/"
                                      >Gskill</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/kingston/bilgisayar-ram-bellek/"
                                      >Kingston</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a class="dropdown-menu-list__link" href="/hard-disk/"
                            >Hard Disk</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Hard Diskler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/hard-disk/"
                                      >T&uuml;m Hard Diskler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/seagate/hard-disk/"
                                      >Seagate</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/toshiba/hard-disk/"
                                      >Toshiba</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/wd/hard-disk/"
                                      >WD</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/harici-diskler/"
                            >Harici Disk
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Harici Diskler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/harici-diskler/"
                                      >T&uuml;m Harici Diskler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/seagate/harici-diskler/"
                                      >Seagate</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/toshiba/harici-diskler/"
                                      >Toshiba</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/wd/harici-diskler/"
                                      >WD</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oem-hazir-sistemler/"
                            ><strong>OEM Hazır Sistemler</strong></a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link"
                            href="/pc-toplama/"
                            ><strong>PC Toplama</strong></a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/sogutma-sistemleri/"
                            >Soğutma Sistemleri
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Soğutma Sistemleri
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/sogutma-sistemleri/"
                                      >T&uuml;m Soğutma Sistemleri</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/cooler-master/sogutma-sistemleri/"
                                      >Cooler Master
                                    </a>
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/corsair/sogutma-sistemleri/"
                                      >Corsair</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/sogutma-sistemleri/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/thermaltake/sogutma-sistemleri/"
                                      >Thermaltake</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/xigmatek/sogutma-sistemleri/"
                                      >Xigmatek</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/solid-state-disk/"
                            >SSD</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m SDD
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/solid-state-disk/"
                                      >T&uuml;m SSD &Uuml;r&uuml;nleri</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/corsair/solid-state-disk/"
                                      >Corsair</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/crucial/solid-state-disk/"
                                      >Crucial</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/intel/solid-state-disk/"
                                      >Intel</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/kingston/solid-state-disk/"
                                      >Kingston</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/ocz/solid-state-disk/"
                                      >OCZ</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/solid-state-disk/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sandisk/solid-state-disk/"
                                      >Sandisk</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/transcend/solid-state-disk/"
                                      >Transcend</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/wd/solid-state-disk/"
                                      >WD</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bilgisayar-monitorleri/"
                            >Monit&ouml;rler</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Monit&ouml;rler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bilgisayar-monitorleri/"
                                      >T&uuml;m Monit&ouml;rler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/aoc/bilgisayar-monitorleri/"
                                      >AOC</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/bilgisayar-monitorleri/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/benq/bilgisayar-monitorleri/"
                                      >BenQ</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/dell/bilgisayar-monitorleri/"
                                      >Dell</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/bilgisayar-monitorleri/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lenovo/bilgisayar-monitorleri/"
                                      >Lenovo</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lg/bilgisayar-monitorleri/"
                                      >LG</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/msi/bilgisayar-monitorleri/"
                                      >MSI</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/philips/bilgisayar-monitorleri/"
                                      >Philips</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/bilgisayar-monitorleri/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/bilgisayar-monitorleri/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/viewsonic/bilgisayar-monitorleri/"
                                      >Viewsonic</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a class="dropdown-menu-list__link" href="/klavyeler/"
                            >Klavye</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Klavyeler
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/klavyeler/"
                                      >T&uuml;m Klavyeler</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/a4-tech/klavyeler/"
                                      >A4-Tech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/klavyeler/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/klavyeler/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everest/klavyeler/"
                                      >Everest</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/frisby/klavyeler/"
                                      >Frisby</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/klavyeler/"
                                      >Hp</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/inca/klavyeler/"
                                      >Inca</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/logitech/klavyeler/"
                                      >Logitech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/microsoft/klavyeler/"
                                      >Microsoft</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/klavyeler/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/razer/klavyeler/"
                                      >Razer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/thermaltake/klavyeler/"
                                      >Thermaltake</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/trust/klavyeler/"
                                      >Trust</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/bilgisayar-mouse/"
                            >Mouse</a
                          >
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Mouse
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/bilgisayar-mouse/"
                                      >T&uuml;m Mouse &Uuml;r&uuml;nleri</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/a4-tech/bilgisayar-mouse/"
                                      >A4-Tech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/apple/bilgisayar-mouse/"
                                      >Apple</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/asus/bilgisayar-mouse/"
                                      >Asus</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/everest/bilgisayar-mouse/"
                                      >Everest</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/frisby/bilgisayar-mouse/"
                                      >Frisby</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/hp/bilgisayar-mouse/"
                                      >HP</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/inca/bilgisayar-mouse/"
                                      >Inca</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/logitech/bilgisayar-mouse/"
                                      >Logitech</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/microsoft/bilgisayar-mouse/"
                                      >Microsoft</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/rampage/bilgisayar-mouse/"
                                      >Rampage</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/razer/bilgisayar-mouse/"
                                      >Razer</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/thermaltake/bilgisayar-mouse/"
                                      >Thermaltake</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/trust/bilgisayar-mouse/"
                                      >Trust</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/usb-bellek/"
                            >USB Bellek</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/network-urunleri/"
                            >Network &Uuml;r&uuml;nleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/modemler/"
                            >Modemler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/hoparlor-ve-speaker/"
                            >Hoparl&ouml;r Speaker</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kesintisiz-guc-kaynaklari/"
                            >Kesintisiz G&uuml;&ccedil; Kaynakları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/guvenlik-antivirus-yazilimlari/"
                            >G&uuml;venlik Yazılımları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/isletim-sistemleri/"
                            >İşletim Sistemleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/microsoft-office/"
                            >Microsoft Office Programları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/guc-kaynaklari-power/"
                            >G&uuml;&ccedil; Kaynakları</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/bilgisayar-bilesenleri"
                          >T&uuml;m Bilgisayar Bileşenleri &Uuml;r&uuml;nlerini
                          G&ouml;r
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <a href="/oem-hazir-sistemler/"
                            ><img
                              class="lazyimg"
                              data-src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/kampanya-banner/oembanner2020-min.jpg"
                              src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/kampanya-banner/oembanner2020-min.jpg"
                            />
                          </a>
                        </div>
                        <div class="banner-list__item">
                          <a href="/pc-toplama/"
                            ><img
                              class="lazyimg lazy-init"
                              data-src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/anasayfa/pc-toplama.jpg"
                              src="https://www.vatanbilgisayar.com/upload/banner/yeni-tasarim/anasayfa/pc-toplama.jpg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/fotograf-makinesi-video-kamera"
                  >Kamera</a
                >
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link"
                            >Kamera</a
                          >
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a
                            class="magic-parent-link"
                            href="/fotograf-makinesi-video-kamera"
                            >T&uuml;m Kameralar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/fotograf-makinesi/"
                            >Dijital Kompakt Fotoğraf Makineleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/dijital-slr-fotograf-makinesi/"
                            >Dijital SLR Fotoğraf Makineleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/video-kamera-modelleri/"
                            >Video Kamera</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/fotograf-makinesi-lensleri/"
                            >Lens ve Aksesuarlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/aynasiz-sistem-slr-fotograf-makinesi/"
                            >Aynasız Sistem Fotoğraf Makineleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/aksiyon-kamerasi/"
                            >Aksiyon Kameraları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/hafiza-karti/"
                            >Hafıza Kartları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/dijital-cerceveler/"
                            >Dijital &Ccedil;er&ccedil;eveler
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/araca-ici-kamera/"
                            >Ara&ccedil; İ&ccedil;i Kamera</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/web-camera/"
                            >Web Kamera</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/fotograf-makinesi-video-kamera"
                          >T&uuml;m Kamera &Uuml;r&uuml;nlerini G&ouml;r
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/camera.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/camera.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/tv-ev-elektronigi/"
                  >Tv &amp; Ev Elektroniği</a
                >
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link">
                            TV &amp; Ev Elektroniği
                          </a>
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a
                            class="magic-parent-link"
                            href="/tv-ev-elektronigi/"
                            >T&uuml;m Tv &amp; Ev Elektroniği</a
                          >
                        </li>
                        <li class="dropdown-menu-list__item second-child">
                          <a
                            class="dropdown-menu-list__link"
                            href="/televizyon/"
                            >Televizyonlar
                          </a>
                          <div class="dropdown-menu">
                            <div class="row">
                              <div class="menu-wrapper col-lg-9">
                                <ul class="dropdown-menu-list go-back-wrapper">
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="go-parent dropdown-menu-list__link"
                                    >
                                      T&uuml;m Televizyonlar
                                    </a>
                                  </li>
                                </ul>
                                <ul class="dropdown-menu-list">
                                  <li>
                                    <a
                                      class="magic-parent-link"
                                      href="/televizyon/"
                                      >T&uuml;m Televizyonlar</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/axen/televizyon/"
                                      >Axen</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/grundig/televizyon/"
                                      >Grundig</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/lg/televizyon/"
                                      >LG</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/philips/televizyon/"
                                      >Philips</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/samsung/televizyon/"
                                      >Samsung</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/seg/televizyon/"
                                      >Seg</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/sony/televizyon/"
                                      >Sony</a
                                    >
                                  </li>
                                  <li class="dropdown-menu-list__item">
                                    <a
                                      class="dropdown-menu-list__link special-menu-link"
                                      href="/vestel/televizyon/"
                                      >Vestel</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/led-tv/"
                            >LED TV</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oled-tv/"
                            >OLED TV</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/projeksiyon-cihazlari/"
                            >Projeksiyon</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/dvd-ev-sinema-sistemleri/"
                            >DVD ve Ev Sinema Sistemleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/uydu-sistemleri/"
                            >Uydu Alıcısı ve Receiver</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/aski-aparatlari/"
                            >TV Askı Aparatı</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/drone/"
                            >Drone</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/hoverboard/"
                            >Hoverboard</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/smart-home/"
                            >Akıllı Ev Sistemleri</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/tv-ev-elektronigi"
                          >T&uuml;m TV &amp; Ev Elektroniği &Uuml;r&uuml;nlerini
                          G&ouml;r
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/televizyon.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/televizyon.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/ofis-malzemeleri/">Ofis</a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link">Ofis</a>
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a class="magic-parent-link" href="/ofis-malzemeleri/"
                            >T&uuml;m Ofis &Uuml;r&uuml;nleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kirtasiye/"
                            >Kırtasiye</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/yazici/"
                            >Yazıcılar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tarayicilar/"
                            >Tarayıcılar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/hesap-makinesi/"
                            >Hesap Makinesi
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/yazici-aksesuar/"
                            >Evrak İmha Makineleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/ozel-kagitlar/"
                            >Kağıt</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kartus/"
                            >Kartuş</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/toner/"
                            >Toner</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/serit/"
                            >Şerit</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/projeksiyon-cihazlari/"
                            >Projeksiyon Cihazları</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/etiket-yazicilari/"
                            >Etiket Yazıcıları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/microsoft-office/"
                            >Microsoft Office Programları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/program-kitaplari/"
                            >Program Kitapları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/cd-dvd/"
                            >CD &amp; DVD</a
                          >
                        </li>
                        <li>
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kablolu-ev-telefonlari/"
                            >Kablolu Ev Telefonları</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kablosuz-telefon-modelleri/"
                            >Kablosuz Telefonlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/filament/"
                            >Filament</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/ofis-malzemeleri"
                          >T&uuml;m Ofis &Uuml;r&uuml;nlerini G&ouml;r
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/yazici.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/yazici.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/aksesuarlar/">Aksesuar</a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link"
                            >Aksesuarlar</a
                          >
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a class="magic-parent-link" href="/aksesuarlar/"
                            >T&uuml;m Aksesuarlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/telefon-kiliflari/"
                            >Telefon Kılıfları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kablolar/"
                            >Kablolar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bluetooth-kulaklik-mikrofon/"
                            >Kulaklıklar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/ekran-koruyucu/"
                            >Ekran Koruyucular
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/piller-ve-sarj-aletleri/"
                            >Pil ve Şarj Cihazları</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/cantalar-kiliflar/"
                            >&Ccedil;anta ve Kılıflar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/mp3-calar/"
                            >MP3 &Ccedil;alarlar
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/3d-gozlukler/"
                            >3D G&ouml;zl&uuml;kler
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bataryalar/"
                            >Bataryalar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oto-ses-sistemleri/"
                            >Oto Ses Sistemleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/navigasyon-cihazlari/"
                            >Navigasyon Cihazları</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/muzik-aletleri/"
                            >M&uuml;zik Aletleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/ses-kayit-cihazlari/"
                            >Ses Kayıt Cihazları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/grafik-tabletler/"
                            >Grafik Tabletler
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/aydinlatma-urunleri-2/"
                            >Aydınlatıcılar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/baglanti-cihazlari-ve-ceviriciler/"
                            >Bağlantı Cihazları ve &Ccedil;eviriciler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kart-okuyucular/"
                            >Kart Okuyucular</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kumandalar/"
                            >Kumandalar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/mouse-pad/"
                            >Mouse Pad</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/notebook-stand-ve-sogutucular/"
                            >Notebook Soğutucu</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oyun-kollari-ve-direksiyonlar/"
                            >Oyun Kolları ve Direksiyonlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/prizler/"
                            >Prizler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tablet-kalemleri/"
                            >Tablet Kalemleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bilgisayar-temizlik-urunleri/"
                            >Temizlik &Uuml;r&uuml;nleri</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/aksesuarlar"
                          >T&uuml;m Aksesuar &Uuml;r&uuml;nlerini G&ouml;r</a
                        >
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/aksesuar.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/aksesuar.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/oyun-hobi">Oyun &amp; Hobi</a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link">Hobi</a>
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a class="magic-parent-link" href="/oyun-hobi"
                            >T&uuml;m Oyun &Uuml;r&uuml;nleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oyun-konsollari/"
                            >T&uuml;m Oyun Konsolları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/ps4-oyun/"
                            >PS4 Oyun Konsolu
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/xbox-one/"
                            >XBOX Oyun Konsolu</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oyunlar/"
                            >T&uuml;m Oyunlar
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oyun-kollari/"
                            >T&uuml;m Oyun Kolları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/sony/oyun-kollari/"
                            >Playstation Oyun Kolları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/microsoft/oyun-kollari/"
                            >XBOX Oyun Kolları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/yeni-urunler/oyunlar/"
                            >Yeni &Ccedil;ıkan Oyunlar
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oyun-kulakligi/"
                            >Gaming Kulaklık
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/gaming-mouse/"
                            >Gaming Mouse
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/gaming-klavye/"
                            >Gaming Klavye
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/oyuncu-koltuklari/"
                            >Oyuncu Koltukları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/robotik-kodlama/"
                            >Robotik Kodlama</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/gamepass/"
                            >Game Pass</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/egitici-oyunlar/"
                            >Eğitici Oyunlar</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/oyun-hobi"
                          >T&uuml;m Oyun &Uuml;r&uuml;nlerini G&ouml;r</a
                        >
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/gaming.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/gaming.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/elektrikli-ev-aletleri/"
                  >Ev Aletleri</a
                >
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link"
                            >Ev Aletleri</a
                          >
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a
                            class="magic-parent-link"
                            href="/elektrikli-ev-aletleri/"
                            >T&uuml;m Ev Aletleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/elektrikli-ev-aletleri/"
                            ><b>T&uuml;m Elektrikli Ev Aletleri</b></a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kisisel-bakim-urunleri/"
                            ><b>T&uuml;m Kişisel Bakım &Uuml;r&uuml;nleri</b></a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/mutfak-urunleri/"
                            ><b>T&uuml;m Mutfak Aletleri </b>
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/elektrikli-supurgeler/"
                            >Elektrikli S&uuml;p&uuml;rge</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tiras-makineleri/"
                            >Tıraş Makineleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/blender/"
                            >Blenderlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/isiticilar/"
                            >Isıtıcılar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/epilasyon-aletleri"
                            >Epilasyon Aletleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/cay-makineleri/"
                            >&Ccedil;ay Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/utuler/"
                            >&Uuml;t&uuml;</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/sac-kurutma-makineleri/"
                            >Sa&ccedil; Kurutma Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tost-makineleri/"
                            >Tost Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/sac-sekillendirme-setleri/"
                            >Sa&ccedil; Şekillendirme Setleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/su-isitici/"
                            >Su Isıtıcıları
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/klima/"
                            >Klima</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/agiz-ve-dis-bakim-urunleri/"
                            >Ağız ve Diş Bakım &Uuml;r&uuml;nleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/meyve-sikacagi/"
                            >Meyve Sıkacağı
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/vantilator/"
                            >Vantilat&ouml;r</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/turk-kahve-makineleri/"
                            >T&uuml;rk Kahve Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/sarjli-dis-fircalari/"
                            >Şarjlı Diş Fır&ccedil;aları</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/espresso-makineleri/"
                            >Espresso Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/sac-duzlestiriciler/"
                            >Sa&ccedil; D&uuml;zleştiriciler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/filtre-kahve-makineleri/"
                            >Filtre Kahve Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/mikrodalga-firinlar/"
                            >Mikrodalga Fırınlar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/surahiler/"
                            >S&uuml;rahiler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/sakal-sekillendirme-makineleri/"
                            >Sakal Şekillendirme Makineleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/tartilar/"
                            >Tartılar</a
                          >
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/ev-aletleri-kisisel-bakim"
                          >T&uuml;m Ev Aletleri &Uuml;r&uuml;nlerini G&ouml;r
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/kea.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/kea.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="dropdown"
                @mouseenter="OpenDropdown"
                @mouseleave="CloseDropdown"
              >
                <a class="nav-first-link" href="/spor-aletleri/"
                  >Spor &amp; Outdoor</a
                >
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="menu-wrapper col-lg-9">
                      <ul class="dropdown-menu-list go-back-wrapper">
                        <li class="dropdown-menu-list__item">
                          <a class="go-parent dropdown-menu-list__link">Spor</a>
                        </li>
                      </ul>
                      <ul class="dropdown-menu-list">
                        <li>
                          <a class="magic-parent-link" href="/spor-aletleri/"
                            >T&uuml;m Spor &Uuml;r&uuml;nleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kosu-bandi/"
                            >Koşu Bandı</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kamp-urunleri/"
                            >Kamp &Uuml;r&uuml;nleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/kondisyon-bisikletleri/"
                            >Kondisyon Bisikletleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/spor-giyim/"
                            >Giyim</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/vucut-gelistirme-aletleri/"
                            >V&uuml;cut Geliştirme Aletleri
                          </a>
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/spor-ayakkabi/"
                            >Ayakkabılar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bisiklet/"
                            >Bisikletler</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/pilates-yoga-urunleri/"
                            >Pilates/Yoga &Uuml;r&uuml;nleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/deniz-havuz-urunleri/"
                            >Deniz/Havuz &Uuml;r&uuml;nleri</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/toplar/"
                            >Toplar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/canta-ve-bavullar/"
                            >&Ccedil;anta ve Bavullar</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/bireysel-takim-sporlari/"
                            >Bireysel/Takım Sporları</a
                          >
                        </li>
                        <li class="no-brand-li">
                          <a
                            class="magic-parent-link normal-nav-link no-brand"
                            href="/spor-saatleri"
                            >Spor Saatleri
                          </a>
                        </li>
                      </ul>
                      <div class="m-b-30 m-l-45">
                        <a
                          class="btn btn-default btn-transparent btn-show-all-pc-product"
                          href="/spor-aletleri"
                          >T&uuml;m Spor &Uuml;r&uuml;nlerini G&ouml;r</a
                        >
                      </div>
                    </div>
                    <div class="col-lg-3 banner-list-wrapper">
                      <div class="banner-list">
                        <div class="banner-list__item">
                          <img
                            class="lazyimg"
                            data-src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/spor.jpg"
                            src="https://www.vatanbilgisayar.com/Upload/GENERAL/menu-banner/spor.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="static-pages-links auth-link">
                <a class="topbar-menu__link" href="/uyeBilgi/siparistakip"
                  ><span class="topbar-menu__text">Siparişlerim</span>
                </a>
              </li>
              <li class="static-pages-links auth-link">
                <a class="topbar-menu__link" href="/uyeBilgi/favorilistem"
                  ><span class="topbar-menu__text">Favorilerim</span>
                </a>
              </li>
              <li class="static-pages-links">
                <a class="topbar-menu__link" href="/pc-toplama"
                  ><span class="topbar-menu__text">PC Toplama</span>
                </a>
              </li>
              <li class="static-pages-links">
                <a class="topbar-menu__link" href="/hakkimizda"
                  ><span class="topbar-menu__text">Kurumsal</span>
                </a>
              </li>
              <li class="static-pages-links">
                <a class="topbar-menu__link" href="/outlet"
                  ><span class="topbar-menu__text">Outlet</span>
                </a>
              </li>
              <li class="static-pages-links">
                <a class="topbar-menu__link" href="/magazalar"
                  ><span class="topbar-menu__text">Mağazalar</span>
                </a>
              </li>
              <li class="static-pages-links">
                <a class="topbar-menu__link" href="/servis-takip-formu"
                  ><span class="topbar-menu__text">Servis Takip Formu</span>
                </a>
              </li>
              <li class="static-pages-links">
                <a class="topbar-menu__link" href="/iletisim"
                  ><span class="topbar-menu__text">Bize Ulaşın</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  props: {},
  methods: {
    OpenDropdown(event) {
      var Target = event.target;
      Target.classList.add("open");
    },
    CloseDropdown(event) {
      var Target = event.target;
      Target.classList.remove("open");
    },
    loginTime(event) {
      var Target = event.target;
      return Target.parentElement.classList.contains("open");
    }
  }
};
</script>

import { shallowMount,mount, config, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import sepetim from "../../pages/sepet/sepetim";
import Vuex from "vuex"
import { getters, mutations, state } from "../../store";

describe("sepetim.vue", () => {
  describe("Sepet boşken", () => {
    config.mocks["$store"] = {
      state: { ...state },
      getters: {
        ...getters
      },
      mutations: {
        ...mutations
      }
    };
    it("'SEPETİNİZDE ÜRÜN YOK!' yazması", () => {
      let wrapper = shallowMount(sepetim);
      expect(wrapper.text()).toContain("SEPETİNİZDE ÜRÜN YOK!");
    });
  });
  describe("Sepet Dolu iken", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        inCart: [{
          "id": 1,
          "pid": "111981",
          "count": 1
        },
        {
          "id": 2,
          "pid": "9105",
          "count": 1
        }
        ],
        data: [
          {
            "id": "111981",
            "code": "UX363EA-EM045T",
            "name": "ASUS ZENBOOK 13 UX363 CORE İ7 1165G7 2.8GHZ-16GB RAM-1TB SSD-13.3'-INT-W10",
            "categoryId": "5",
            "MarkaId": "4",
            "cost": 19635,
            "productLaunchTime": "2020-11-05",
            "rate": 0,
            "markalogosu": "https://cdn.vatanbilgisayar.com/Upload//MARKA/asus/asus.jpg",
            "ratedPersonCount": 0,
            "freeShipping": true,
            "fastShipping": true,
            "maxInstallmentCount": 6,
            "productType": "Notebook",
            "inStock": 8,
            "advicedProducts": [
              "72441",
              "110768",
              "79651",
              "300873",
              "69791",
              "9105",
              "109276",
              "89614"
            ],
            "images": [
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981_large.jpg",
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-1_large.jpg",
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-2_large.jpg",
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-3_large.jpg",
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-4_large.jpg",
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-5_large.jpg",
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/111981-6_large.jpg"
            ],
            "moreInformation": [
              {
                "info": "Pil Hücre Sayısı:",
                "info_detail": "4 Hücreli"
              },
              {
                "info": "İşlemci Ön Bellek:",
                "info_detail": "12 MB"
              },
              {
                "info": "İşlemci Teknolojisi:",
                "info_detail": "Core i7"
              },
              {
                "info": "İşlemci Numarası:",
                "info_detail": "1165G7"
              },
              {
                "info": "Pil Kimyası:",
                "info_detail": "Lityum Polimer"
              },
              {
                "info": "İşlemci Markası:",
                "info_detail": "Intel"
              },
              {
                "info": "İşlemci Hızı:",
                "info_detail": "2.8 GHz Turbo"
              },
              {
                "info": "İşlemci Çekirdek",
                "info_detail": "4 Çekirdek"
              }
            ],
            "comments": [],
            "alsoChecked": [
              "111981",
              "110768",
              "103828",
              "103267",
              "108837",
              "108642",
              "106786",
              "105261"
            ]
          },
          {
            "id": "9105",
            "code": "TAR300Z",
            "name": "TARGUS TAR300Z 15.6'' NOTEBOOK ÇANTASI- (SİYAH)",
            "categoryId": "7",
            "MarkaId": "19",
            "cost": 170,
            "productLaunchTime": "2020-01-07",
            "rate": 0,
            "markalogosu": "https://cdn.vatanbilgisayar.com/Upload//MARKA/targus/targus.jpg",
            "ratedPersonCount": 0,
            "freeShipping": false,
            "fastShipping": false,
            "maxInstallmentCount": 6,
            "productType": "Sırt Çantası",
            "inStock": 300,
            "advicedProducts": [],
            "images": [
              "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/targus/thumb/v2-9105_large.jpg"
            ],
            "moreInformation": [
              {
                "info": "Uyumlu Olduğu",
                "info_detail": "Universal"
              },
              {
                "info": "Aksesuar Tipi:",
                "info_detail": "Notebook"
              },
              {
                "info": "Marka",
                "info_detail": "Targus"
              },
              {
                "info": "Uyumlu Olduğu",
                "info_detail": "Universal 15.6"
              },
              {
                "info": "Menşei:",
                "info_detail": "Çin"
              },
              {
                "info": "Renk:",
                "info_detail": "Siyah"
              }
            ],
            "comments": [],
            "alsoChecked": [
              "300873",
              "69791",
              "79651",
              "9105",
              "109276",
              "89614",
              "72441"
            ]
          }
        ]
      },
      getters: getters
    })
    wrapper = mount(sepetim, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      store,
      localVue,
    })
    describe("Gözükecekler", () => {
      it("ASUS ZENBOOK 13 UX363 CORE İ7 1165G7 2.8GHZ-16GB RAM-1TB SSD-13.3'-INT-W10", () => {
        expect(wrapper.text()).toContain("ASUS ZENBOOK 13 UX363 CORE İ7 1165G7 2.8GHZ-16GB RAM-1TB SSD-13.3'-INT-W10");
      });
      it("TARGUS TAR300Z 15.6'' NOTEBOOK ÇANTASI- (SİYAH)", () => {
        expect(wrapper.text()).toContain("TARGUS TAR300Z 15.6'' NOTEBOOK ÇANTASI- (SİYAH)");
      });
    });
  });
});

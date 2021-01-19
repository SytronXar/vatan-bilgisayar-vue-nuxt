import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import ProductList from "../../components/GununFirsatlari.vue"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Verilen ürünlerin listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {
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
                    "id": "88816",
                    "code": "SDRW-08U9M-U-BLACK",
                    "name": "ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM DVD-YAZICI - SİYAH",
                    "categoryId": "7",
                    "MarkaId": "4",
                    "cost": 413,
                    "productLaunchTime": "2020-08-10",
                    "rate": 5,
                    "markalogosu": "https://cdn.vatanbilgisayar.com/Upload//MARKA/asus/asus.jpg",
                    "ratedPersonCount": 17,
                    "freeShipping": true,
                    "fastShipping": false,
                    "maxInstallmentCount": 6,
                    "productType": "Ekstra Ürünler",
                    "inStock": 100,
                    "advicedProducts": [],
                    "images": [
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816-1_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816-2_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/v2-88816-3_large.jpg"
                    ],
                    "moreInformation": [
                        {
                            "info": "Ön Bellek:",
                            "info_detail": "1 MB"
                        },
                        {
                            "info": "DVD Okuma Hızı:",
                            "info_detail": "8X"
                        },
                        {
                            "info": "CD Okuma&Yazma",
                            "info_detail": "24X16X24"
                        },
                        {
                            "info": "Bağlantı Özellikleri:",
                            "info_detail": "USB 2.0"
                        },
                        {
                            "info": "Dahili / Harici:",
                            "info_detail": "Harici"
                        },
                        {
                            "info": "DVD Yazma Hızı:",
                            "info_detail": "8X"
                        },
                        {
                            "info": "Bağlantı Özellikleri:",
                            "info_detail": "USB 3.1 Type-C"
                        },
                        {
                            "info": "Üretici Part",
                            "info_detail": "90DD02A0-"
                        }
                    ],
                    "comments": [
                        {
                            "date": "2020-07-29",
                            "time": "23:21:00",
                            "rate": "5",
                            "name": "Emre Yılmaz",
                            "highlight_comment": "Severek kullanmaktayım",
                            "comment": "Çok kaliteli ve çok sesiz"
                        },
                        {
                            "date": "2020-07-17",
                            "time": "12:12:00",
                            "rate": "5",
                            "name": "Emre Can Duyar",
                            "highlight_comment": "İnce ve şık",
                            "comment": "İnce ve şık tasarıma sahip. Notebook için aldım ve çok kullanışlı bir ürün."
                        },
                        {
                            "date": "2020-06-24",
                            "time": "16:26:00",
                            "rate": "5",
                            "name": "aslı güngör",
                            "highlight_comment": "F/P",
                            "comment": "tasarımı iyi sorunsuz çalışıyor. Type C kablosu avantaj"
                        }
                    ]
                },
            ]
        },
        getters: getters
    })
    wrapper = mount(ProductList, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
        store,
        localVue
    })
    describe("Liste Kontrolü", () => {

        it("ASUS ZENBOOK 13 UX363 CORE İ7 1165G7 2.8GHZ-16GB RAM-1TB SSD-13.3'-INT-W10", () => {
            expect(wrapper.text()).toContain("ASUS ZENBOOK 13 UX363 CORE İ7 1165G7 2.8GHZ-16GB RAM-1TB SSD-13.3'-INT-W10");
        });

        it("ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM DVD-YAZICI - SİYAH", () => {
            expect(wrapper.text()).toContain("ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM DVD-YAZICI - SİYAH");
        });
    });

})
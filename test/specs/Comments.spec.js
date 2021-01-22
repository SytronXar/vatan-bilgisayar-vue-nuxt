import { mount, createLocalVue } from "@vue/test-utils"
import Comments from "../../components/ProductPage/Comments.vue"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Ürün Yorumlarının listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
        state: {
            data: [
                {
                    "id": "106786",
                    "code": "7390-FS510W161N",
                    "name": "DELL XPS 13 7390 CORE İ7 10710U 1.1GHZ-16GB RAM-1TB SSD-INT-13.3 W10",
                    "categoryId": "5",
                    "MarkaId": "6",
                    "cost": 17494,
                    "productLaunchTime": "2018-02-22",
                    "rate": 4,
                    "markalogosu": "https://cdn.vatanbilgisayar.com/Upload//MARKA/dell/dell.jpg",
                    "ratedPersonCount": 2,
                    "freeShipping": true,
                    "fastShipping": false,
                    "maxInstallmentCount": 6,
                    "productType": "Notebook",
                    "inStock": 50,
                    "advicedProducts": [
                        "9105",
                        "111981",
                        "72441",
                        "103828",
                        "110768",
                        "79651",
                        "300873",
                        "69791",
                        "109276",
                        "89614"
                    ],
                    "images": [
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-1_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-2_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-3_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-4_large.jpg",
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/TeoriV2-106786-5_large.jpg"
                    ],
                    "moreInformation": [
                        {
                            "info": "İşlemci Çekirdek",
                            "info_detail": "6 Çekirdek"
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
                            "info_detail": "10710U"
                        },
                        {
                            "info": "Ram:",
                            "info_detail": "16 GB"
                        },
                        {
                            "info": "İşlemci Markası:",
                            "info_detail": "Intel"
                        },
                        {
                            "info": "İşlemci Hızı:",
                            "info_detail": "2.6 GHz Turbo"
                        },
                        {
                            "info": "Katlanabilir:",
                            "info_detail": "Evet"
                        }
                    ],
                    "comments": [
                        {
                            "date": "2020-10-05",
                            "time": "16:09:00",
                            "rate": "5",
                            "name": "Pelin Ş****",
                            "highlight_comment": "İyi bir ürün",
                            "comment": "Fiyatı performansını pek haketmiyor,fakat ürün çok kullanışlı.Her şekle giriyor."
                        },
                        {
                            "date": "2020-10-17",
                            "time": "13:35:00",
                            "rate": "4",
                            "name": "Tayfun A***",
                            "highlight_comment": "Şık ve profesyonel",
                            "comment": "Genelde tablet modunda kullanmayı sevdiğim için tablet modunu daha çok beğendim."
                        }
                    ],
                    "alsoChecked": [
                        "106786",
                        "105261",
                        "111981",
                        "110768",
                        "103828",
                        "103267",
                        "108837",
                        "108642"
                    ]
                },
            ]
        },
        getters: getters
    })
    wrapper = mount(Comments, {
        store, localVue,
        propsData: {
            productId: "106786"
        },
    })

    it("Yorum 1", () => {
        expect(wrapper.text()).toContain("Fiyatı performansını pek haketmiyor,fakat ürün çok kullanışlı.Her şekle giriyor.");
    });
    it("Yorum 2", () => {
        expect(wrapper.text()).toContain("Genelde tablet modunda kullanmayı sevdiğim için tablet modunu daha çok beğendim.");
    });

})
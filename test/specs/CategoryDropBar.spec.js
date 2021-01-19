import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import HeadCategoriesBar from "../../components/PageHead/CategoryDropBar.vue"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Verilen kategorilerin listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {

            "categories": [
                {
                    "id": "0",
                    "name": "Tüketici Elektroniği",
                    "parentHierarchy": []
                },
                {
                    "id": "1",
                    "name": "Telefon",
                    "parentHierarchy": [
                        "0"
                    ]
                },
                {
                    "id": "2",
                    "name": "Bilgisayar",
                    "parentHierarchy": []
                },
                {
                    "id": "3",
                    "name": "Masaüstü Aksesuarlar",
                    "parentHierarchy": [
                        "2"
                    ]
                },
                {
                    "id": "4",
                    "name": "Masaüstü Bilgisayarlar",
                    "parentHierarchy": [
                        "2"
                    ]
                },
                {
                    "id": "5",
                    "name": "Notebook",
                    "parentHierarchy": [
                        "2"
                    ]
                },
                {
                    "id": "6",
                    "name": "Tablet",
                    "parentHierarchy": [
                        "2"
                    ]
                },
                {
                    "id": "7",
                    "name": "Taşınabilir Aksesuarlar",
                    "parentHierarchy": [
                        "2"
                    ]
                },
                {
                    "id": "8",
                    "name": "Yazılım",
                    "parentHierarchy": [
                        "2"
                    ]
                }
            ],
        },
        getters: getters
    })
    wrapper = mount(HeadCategoriesBar, {
        stubs: {
            NuxtLink: RouterLinkStub
        }, store, localVue
    })
    describe("Listelenmesi gereken başlıklar", () => {

        it("Tüketici Elektroniği", () => {
            expect(wrapper.text()).toContain("Tüketici Elektroniği");
        });

        it("Telefon", () => {
            expect(wrapper.text()).toContain("Telefon");
        });
        it("Bilgisayar", () => {
            expect(wrapper.text()).toContain("Bilgisayar");
        });
        it("Masaüstü Aksesuarlar", () => {
            expect(wrapper.text()).toContain("Masaüstü Aksesuarlar");
        });
        it("Masaüstü Bilgisayarlar", () => {
            expect(wrapper.text()).toContain("Masaüstü Bilgisayarlar");
        });
        it("Notebook", () => {
            expect(wrapper.text()).toContain("Notebook");
        });
        it("Tablet", () => {
            expect(wrapper.text()).toContain("Tablet");
        });
        it("Taşınabilir Aksesuarlar", () => {
            expect(wrapper.text()).toContain("Taşınabilir Aksesuarlar");
        });
        it("Yazılım", () => {
            expect(wrapper.text()).toContain("Yazılım");
        });
    });

})
import { mount, config,RouterLinkStub } from "@vue/test-utils";
import HeadContainer from "../../components/PageHead/TheWrapper.vue";
import { mutations, actions, state, getters } from "../../store/index";

config.mocks["$store"] = {
    state: { ...state },
    getters: {
         ...getters
    },
    actions: {
        "logout": { ...actions }
    },
    mutations: {
        ...mutations
    }
};

describe("Kullanıcı girişi yapılmadığında gözükmesi gereken", () => {
    let wrapper = mount(HeadContainer, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("GİRİŞ", () => {
        expect(wrapper.text()).toContain("GİRİŞ");
    });
});
describe("Gözükmemesi gereken", () => {
    let wrapper = mount(HeadContainer, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("HESABIM ", () => {
        expect(wrapper.text()).not.toContain("HESABIM");
    });
});
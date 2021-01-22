import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
import TheSignPanel from '../../components/SignPage/TheSignPanel'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('TheSignPanel', () => {
    let wrapper;
    const mockFunction = jest.fn();
    describe('openLogin==true iken ', () => {
        beforeEach(() => {
            wrapper = mount(TheSignPanel, {
                localVue,
                data() {
                    return {
                        email: 'test@test.com',
                        password: '123456',
                        isAlreadyLogged: false,
                    };
                },
                store: new Vuex.Store({
                    actions: {
                        login: mockFunction,
                    },
                }),
                mocks: {
                    $router: {
                        push: jest.fn()
                    }
                },
                propsData: {
                    openLogin: true
                },
                stubs: {
                    NuxtLink: RouterLinkStub
                },
            });
        });
        it("Şifremi Unuttum Gözükmesi", () => {
            expect(wrapper.text()).toContain("Şifremi Unuttum");
        });
        it('giriş yap butonuna basılabilir ve basılınca login fonksiyonun çağrılması', async () => {
            let loginButton = wrapper.find(".signup-form__button");
            loginButton.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        });
        //Kontrol edilecek
        /* it("Successfull Login", () => {
            let loginButton = wrapper.find(".signup-form__button");
            loginButton.trigger("click").then(() => {
                expect(wrapper.text()).toContain("Bu sayfaya erişemezsiniz");
            });
        });
        it("Gözükmemeli: Şifremi Unuttum", () => {
            let loginButton = wrapper.find(".signup-form__button");
            loginButton.trigger("click").then(() => {
                expect(wrapper.text()).toContain("Şifremi Unuttum");
            });
        }); */
    });
    describe('openLogin==false iken ', () => {
        wrapper = mount(TheSignPanel, {
            localVue,
            data() {
                return {
                    email: '',
                    password: '',
                };
            },
            store: new Vuex.Store({
                actions: {
                    register: mockFunction,
                },
            }),
            mocks: {
                $router: {
                    push: jest.fn()
                }
            },
            propsData: {
                openLogin: false
            },
            stubs: {
                NuxtLink: RouterLinkStub
            },
        });
        it("Kampanyalar ile ilgili eposta mesajları almak istiyorum Gözükmesi", () => {
            expect(wrapper.text()).toContain("Kampanyalar ile ilgili eposta mesajları almak istiyorum.");
        });
        it('gönder basılabilir ve basılınca register fonksiyonun çağrılması', async () => {
            let loginButton = wrapper.find(".signup-form__button");
            loginButton.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        });
    });
});
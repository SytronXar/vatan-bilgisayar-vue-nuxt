import {realDb} from '~/plugins/firebase.js'
export const state = () => ({
  inCart: [],
  categories: [],
  markalar: [],
  data: [],
  FiyatFiltreleri: [],
  filter: {
    minPrice: 0,
    maxPrice: 0,
    searchString: "",
    secilmisMarkalar: [],
    secilmisKategori: "",
    secilmisFiyatlar: []
  },
  filteredProductList: [-1]
})

export const getters = {
  Products: (state) => () => {
    return state.data
  },
  Cart: (state) => () => {
    return state.inCart
  },
  getProductWithId: (state) => (id) => {
    return state.data.find(item => item.id === id)
  },
  getCategoryWithId: (state) => (id) => {
    return state.categories.find(item => item.id === id)
  },
  getMarkaWithId: (state) => (id) => {
    return state.markalar.find(item => item.id === id)
  },
  getFiyatFiltreWithId: (state) => (id) => {
    return state.FiyatFiltreleri.find(item => item.id === id)
  },
  isInSecilmisMarkalar(state) {
    return (id) => { return state.filter.secilmisMarkalar.includes(id); }
  },
  isInSecilmisFiyatlar: (state) => (id) => {
    return state.filter.secilmisFiyatlar.includes(id);
  },

  getFilteredProducts: (state) => () => {
    if (state.filteredProductList[0] === -1) {
      state.filteredProductList = state.data;
      return state.filteredProductList;
    }
    return state.filteredProductList;
  },
  getNumberOfProductInCategoryInFilter: (state, getters) => (id) => {
    var array = getters.getFilteredProducts.filter(item => item.categoryId === id)
    return array.length;
  },
  getNumberOfProductInMarkaInFilter: (state, getters) => (id) => {
    var array = getters.getFilteredProducts.filter(item => item.MarkaId === id);
    return array.length;
  },
  getNumberOfProductInFiyatFiltreInFilter: (state, getters) => (id) => {
    var fiyatFiltre = getters.getFiyatFiltreWithId(id);
    var array = getters.getFilteredProducts.filter(product => product.cost <= fiyatFiltre.max && product.cost >= fiyatFiltre.min);
    return array.length;
  },

  searchWithString: (state) => (productsData) => {
    if (state.filter.searchString === "") {
      return productsData;
    }
    var substrings = state.filter.searchString.split(" ");
    var findedProducts = productsData;
    substrings.forEach(element => {
      findedProducts = findedProducts.filter(product => product.name.toLowerCase().includes(element.toLowerCase()));
    });
    return findedProducts;

  },

  searchWithPrice: (state) => (productsData) => {
    var findedProducts = productsData;
    if (state.filter.maxPrice === 0) {
      return findedProducts;
    }
    return findedProducts.filter(product => product.cost <= state.filter.maxPrice && product.cost >= state.filter.minPrice);
  },
  markalarlaArama: (state) => (productsData) => {
    var mergedArray = [];
    if (state.filter.secilmisMarkalar.length <= 0) {
      return productsData;
    }
    state.filter.secilmisMarkalar.forEach(marka => {
      /*  mergedArray=mergedArray.push(...productsData.filter(product => product.MarkaId === marka)); */
      mergedArray = [].concat.apply(mergedArray, productsData.filter(product => product.MarkaId === marka))
    });
    return mergedArray;
  },
  fiyatFiltreleriyleArama: (state, getters) => (productsData) => {
    var mergedArray = [];

    if (state.filter.secilmisFiyatlar.length <= 0) {
      return productsData;
    }
    state.filter.secilmisFiyatlar.forEach(fiyatFiltreId => {
      var fiyatFiltre = state.FiyatFiltreleri.find(item => item.id === fiyatFiltreId);
      mergedArray = [].concat.apply(mergedArray, productsData.filter(product => product.cost <= fiyatFiltre.max && product.cost >= fiyatFiltre.min))
    });
    return mergedArray;
  },
  kategoriyleArama: (state) => (productsData) => {
    if (state.filter.secilmisKategori === "") {
      return productsData;
    }
    return productsData.filter(product => product.categoryId === state.filter.secilmisKategori)
  },
  productFilter: (state, getters) => () => {
    state.filteredProductList = getters.fiyatFiltreleriyleArama(getters.kategoriyleArama(getters.markalarlaArama(getters.searchWithPrice(getters.searchWithString(state.data)))));
    return state.filteredProductList;
  }
}

export const actions = {
  sepeteEkle({ commit }, item) {
    commit('sepeteEkle', item)
  },
  setFilter({ commit }, filter) {
    commit('setFilter', filter)
  },
  setNameFilter({ commit }, key) {
    commit('setNameFilter', key)
  },
  setCostFilter({ commit }, costs) {
    commit('setNameFilter', costs)
  },
  setFilteredProductList({ commit }, filteredList) {
    commit('setFilteredProductList', filteredList)
  },
  setSecilmisCategori({ commit }, id) {
    commit('setSecilmisCategori', id);
  },
  addSecilmisMarka({ commit }, id) {
    commit('addSecilmisMarka', id);
  },
  removeSecilmisMarka({ commit }, id) {
    commit('removeSecilmisMarka', id);
  },
  addSecilmisFiyat({ commit }, id) {
    commit('addSecilmisFiyat', id);
  },
  removeSecilmisFiyat({ commit }, id) {
    commit('removeSecilmisFiyat', id);
  },
  fetchCartItems ({commit}) {
    var ref = realDb.ref('inCart')
    ref.once('value').then(function(snapshot) {
      let arr =[]
      if (snapshot.val()!=null) {    
        arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('setInCart', arr)
    });
    
  },
  fetchProducts ({commit,dispatch}) {
    dispatch('fetchCategories')
    dispatch('fetchMarkalar')
    var ref = realDb.ref('Products')
    ref.once('value').then(function(snapshot) {
      let arr =[]
      if (snapshot.val()!=null) {    
        arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('setProducts', arr)
    });
  },
  fetchMarkalar ({commit}) {
    var ref = realDb.ref('markalar')
    ref.once('value').then(function(snapshot) {
      let arr =[]
      if (snapshot.val()!=null) {    
         arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('setMarkalar', arr)
    });
  },
  fetchCategories ({commit}) {
    var ref = realDb.ref('categories')
    ref.once('value').then(function(snapshot) {
      let arr =[]
      if (snapshot.val()!=null) {    
         arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('setCategories', arr)
    });
  },
  fetchFiyatFiltreleri({commit}){
    var ref = realDb.ref('FiyatFiltreleri')
    ref.once('value').then(function(snapshot) {
      let arr =[]
      if (snapshot.val()!=null) {    
        arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('setFiyatFiltreleri', arr)
    });
  },
  deleteCart({state,dispatch},id){
    var ref = realDb.ref('inCart')
    var key=state.inCart.find(inCart => inCart.id === id).key
    ref.child(key).remove()
    dispatch('fetchCartItems')
  },
  changeCountCart({state,dispatch},id_count){
    var ref = realDb.ref('inCart')
    var id=id_count.id
    var item=state.inCart.find(inCart => inCart.id === id)
    var nCount = id_count.count + item.count
    var key=item.key
    if (nCount<=0) {
      //dispatch('deleteCart',id)
    } else {
      ref.child(key).update({
        count:nCount
      })
      dispatch('fetchCartItems')
    }
  },
  sepeteEkle({state,dispatch}, item) {
    if (state.inCart.filter(c=>c.pid===item.pid).length>0) {
      var fItemID=state.inCart.find(c=>c.pid===item.pid).id
      dispatch('changeCountCart',{id:fItemID, count:1})
      return;
    }
    var incart = state.inCart;
    if (incart.length>0) {
      var id = incart[incart.length-1].id + 1;
    }
    else id=1;
    var pid = item.pid;
    var count = item.count;
    var newitem = { id, pid, count }
    var ref = realDb.ref('inCart')
    ref.push(newitem)
    dispatch('fetchCartItems')
    //state.inCart.push(newitem); 
  },
}


export const mutations = {
  
  setFilter(state, filter) {
    state.filter = filter
    console.log(filter.searchString)
  },
  setNameFilter(state, key) {
    state.filter.searchString = key;
    console.log(key)
  },
  setCostFilter(state, costs) {
    state.filter.minPrice = costs.min;
    state.filter.maxPrice = costs.max;
  },
  setFilteredProductList(state, filteredList) {
    state.filteredProductList = filteredList;
  },
  setSecilmisCategory(state, id) {
    state.filter.secilmisKategori = id;
  },
  clearSecilmisCategory(state) {
    state.filter.secilmisKategori = ""
  },
  addSecilmisMarka(state, id) {
    if (state.filter.secilmisMarkalar.includes(id)) {
      return;
    }
    state.filter.secilmisMarkalar.push(id);
  },
  removeSecilmisMarka(state, id) {
    if (state.filter.secilmisMarkalar.includes(id)) {
      state.filter.secilmisMarkalar.splice(state.filter.secilmisMarkalar.indexOf(id), 1)
    }
  },
  addSecilmisFiyat(state, id) {
    if (state.filter.secilmisFiyatlar.includes(id)) {
      return;
    }
    state.filter.secilmisFiyatlar.push(id);
  },
  removeSecilmisFiyat(state, id) {
    if (state.filter.secilmisFiyatlar.includes(id)) {
      state.filter.secilmisFiyatlar.splice(state.filter.secilmisFiyatlar.indexOf(id), 1)
    }
  },
  setInCart(state, array){
    state.inCart=array
  },
  setProducts(state,array){
    state.data=array
  },
  setMarkalar(state, array){
    state.markalar=array
  },
  setCategories(state, array){
    state.categories=array
  },
  setFiyatFiltreleri(state, array){
    state.FiyatFiltreleri=array
  }

}

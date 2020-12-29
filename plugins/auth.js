import { auth, db } from '@/config/database'
import store from '@/vuex/store'

const init = function init () {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('setUser', user)
    } else {
      // User is signed out.
      store.dispatch('setUser', null)
    }
  }, (error) => {
    console.log(error)
  })
}

export { init }
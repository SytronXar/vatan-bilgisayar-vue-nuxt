import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyB3ZWmc85GDTQgaYJYICRCi2AO8u9UAa2Y",
        authDomain: "vatanbilgisayardemoapi.firebaseapp.com",
        databaseURL: "https://vatanbilgisayardemoapi-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "vatanbilgisayardemoapi",
        storageBucket: "vatanbilgisayardemoapi.appspot.com",
        messagingSenderId: "917767495951",
        appId: "1:917767495951:web:48996ecc38bbfc7ba51e7a",
        measurementId: "G-VHDME3X2XG"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
const realDb = firebase.database()
export {fireDb, realDb}
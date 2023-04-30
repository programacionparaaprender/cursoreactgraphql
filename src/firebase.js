import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig2 = {
    apiKey: "AIzaSyACb7imRmi0T5rHkZ3zanCvr3Qr2zSgE1Q",
    authDomain: "sherlock-holmes-1db20.firebaseapp.com",
    databaseURL: "https://sherlock-holmes-1db20.firebaseio.com",
    projectId: "sherlock-holmes-1db20",
    storageBucket: "sherlock-holmes-1db20.appspot.com",
    messagingSenderId: "540929236256",
    appId: "1:540929236256:web:329c5ccfa497c37bcd4b45"
};

const firebaseConfig = {
  apiKey: "AIzaSyDQtujbNeX6T3TDaPZ56sWM4pdkl18IS9o",
  authDomain: "proyectoredux-bc409.firebaseapp.com",
  projectId: "proyectoredux-bc409",
  storageBucket: "proyectoredux-bc409.appspot.com",
  messagingSenderId: "877525757328",
  appId: "1:877525757328:web:940209ea947ef8e9dbd715"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs')

export function getFavs(uid) {
    return db.doc(uid).get()
        .then(snap => {
            return snap.data().array
        })
}

export function updateDB(array, uid) {
    return db.doc(uid).set({ array })
}

export function signOutGoogle() {
    firebase.auth().signOut()
}

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}
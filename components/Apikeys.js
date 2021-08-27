import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDxVt2sg-dNHnjOBsRrLLO2jyxAyYhByBM",
    authDomain: "cn320-demo.firebaseapp.com",
    databaseURL: "https://cn320-demo-default-rtdb.firebaseio.com/",
    projectId: "cn320-demo",
    storageBucket: "cn320-demo.appspot.com",
    messagingSenderId: "652695123644",
    appId: "1:652695123644:web:3a6a8fd4fad5b6f440c2b9",
    measurementId: "G-QP51NSRYLT"
}

firebase.initializeApp(firebaseConfig);

export default firebase;
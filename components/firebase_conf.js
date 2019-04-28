import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZ6XtTeTBalKyLmPV1Dzw1k1Q3kYq_AYM",
    authDomain: "react-native-db-9ee53.firebaseapp.com",
    databaseURL: "https://react-native-db-9ee53.firebaseio.com",
    projectId: "react-native-db-9ee53",
    storageBucket: "react-native-db-9ee53.appspot.com",
    messagingSenderId: "713263294781",
};
let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();  
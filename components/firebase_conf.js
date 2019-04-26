import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZ6XtTeTBalKyLmPV1Dzw1k1Q3kYq_AYM",
    authDomain: "react-native-db-9ee53.firebaseapp.com",
    databaseURL: "https://react-native-db-9ee53.firebaseio.com",
    storageBucket: "react-native-db-9ee53.appspot.com",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDLjRSmdXrPPbfrn3dAmLNDe2fwrUV0ZcE",
    authDomain: "learn-the-words-ac562.firebaseapp.com",
    databaseURL: "https://learn-the-words-ac562-default-rtdb.firebaseio.com",
    projectId: "learn-the-words-ac562",
    storageBucket: "learn-the-words-ac562.appspot.com",
    messagingSenderId: "1014849879567",
    appId: "1:1014849879567:web:e96292008860d773b5ad7a",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;

const database = fire.database();

export default database;

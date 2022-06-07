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

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
        this.database = firebase.database();
        this.userUid = null;
    }

    setUserUid = (uid) => (this.userUid = uid);

    signWithEmail = (email, password, onError) => {
        this.auth.signInWithEmailAndPassword(email, password).catch((err) => {
            console.log(err);
            onError(err.message);
        });
    };

    registerWithEmail = (email, password, passwordRepeat, onError) => {
        if (password === passwordRepeat) {
            this.auth
                .createUserWithEmailAndPassword(email, password)
                .catch((err) => onError(err.message));
        } else {
            onError("пароли не совпадают");
        }
    };
    getUserCardsRef = () => {
        return this.database.ref(`/cards/${this.userUid}`);
    };
}

// export const fire = firebase;

// const database = fire.database();

// export default database;

export default Firebase;

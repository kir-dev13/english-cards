import firebase from "firebase/app";
import "firebase/auth";

import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_API_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
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

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
// import dotenv from 'dotenv';

// dotenv.config();

const settings = { timestampsInSnapshots: true }

const config = {

    apiKey: "AIzaSyAJFh5H9XOb_eh4XgmX4B_t2Pe5J1ZbQkc",
    authDomain: "react-base-82c7b.firebaseapp.com",
    databaseURL: "https://react-base-82c7b.firebaseio.com",
    projectId: "react-base-82c7b",
    storageBucket: "react-base-82c7b.appspot.com",
    messagingSenderId: "380910866350"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
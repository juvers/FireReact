import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const settings = { timestampsInSnapshots: true }

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
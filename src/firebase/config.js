import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDeJiwJC_T5-T11r5CWtUQvHQ00g8cN3iM",
    authDomain: "miniblog-3ce9b.firebaseapp.com",
    projectId: "miniblog-3ce9b",
    storageBucket: "miniblog-3ce9b.appspot.com",
    messagingSenderId: "359422003069",
    appId: "1:359422003069:web:50979d1ef87b4b09e82e14"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
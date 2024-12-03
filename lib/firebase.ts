import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCk2ac7zLA-N_F3P_dY2fcdnL4tP6K6fVw",
    authDomain: "zinsappata.firebaseapp.com",
    databaseURL: "https://zinsappata-default-rtdb.firebaseio.com",
    projectId: "zinsappata",
    storageBucket: "zinsappata.appspot.com",
    messagingSenderId: "113369271332",
    appId: "1:113369271332:web:1a55d786fac0aa96cb5cb1",
    measurementId: "G-V9LKMQYCTN"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);


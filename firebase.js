import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIqexXqfcPMhbBp1cukRH2e2luXwu41G8",
  authDomain: "photo-share-91677.firebaseapp.com",
  projectId: "photo-share-91677",
  storageBucket: "photo-share-91677.appspot.com",
  messagingSenderId: "67396078484",
  appId: "1:67396078484:web:db7829762e97033f199d81",
  measurementId: "G-74PVENKJ0H",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

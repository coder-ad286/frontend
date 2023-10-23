import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBQ2K4f99kA9JWPQSppLo0sYSj6PoNkWpc",
  authDomain: "jeetrends-54eb3.firebaseapp.com",
  projectId: "jeetrends-54eb3",
  storageBucket: "jeetrends-54eb3.appspot.com",
  messagingSenderId: "261111149766",
  appId: "1:261111149766:web:a330fd36c5574b134753c7",
  measurementId: "G-0H8QN3RDZF"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage(app);
export { db, auth,storage }
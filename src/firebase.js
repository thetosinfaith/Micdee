import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBXMGnPUZCbeGJjXXpqwOkTni8ebUVJKfA",
  authDomain: "micdee-real-estate.firebaseapp.com",
  projectId: "micdee-real-estate",
  storageBucket: "micdee-real-estate.appspot.com",
  messagingSenderId: "204980932412",
  appId: "1:204980932412:web:2224eaf8a534eff7e95839"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
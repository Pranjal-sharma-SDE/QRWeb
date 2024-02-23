import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import "@firebase/auth";
import '@firebase/auth';const firebaseConfig = {
    apiKey: "AIzaSyBKkH853DEZQBGiCODmlRYaJ3Trfoine98",
    authDomain: "qrscan-34bf3.firebaseapp.com",
    projectId: "qrscan-34bf3",
    storageBucket: "qrscan-34bf3.appspot.com",
    messagingSenderId: "198862651296",
    appId: "1:198862651296:web:8dde09586edd021e5c6ec5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
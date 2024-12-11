import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA88Uqh6uadbGTLmGR97ghr4g9eOg2N07g",
  authDomain: "dtf-clone-c4734.firebaseapp.com",
  projectId: "dtf-clone-c4734",
  storageBucket: "dtf-clone-c4734.firebasestorage.app",
  messagingSenderId: "1024470723999",
  appId: "1:1024470723999:web:e07156f354cff6a0ce61aa",
  measurementId: "G-JBBWV14Z22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

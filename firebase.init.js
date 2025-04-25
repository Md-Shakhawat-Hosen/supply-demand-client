// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyBv1g7Rd_zDEnWxeQNRLbLxRmXKis1udR8",
  authDomain: "supply-demand-client.firebaseapp.com",
  projectId: "supply-demand-client",
  storageBucket: "supply-demand-client.firebasestorage.app",
  messagingSenderId: "171026107221",
  appId: "1:171026107221:web:9d21a3864f2770717cbddc",

  
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpYjeczjWEjclwGkaFk_Q3OGlr45sgeVo",
  authDomain: "zapatillasworld-48cfd.firebaseapp.com",
  projectId: "zapatillasworld-48cfd",
  storageBucket: "zapatillasworld-48cfd.appspot.com",
  messagingSenderId: "740792273534",
  appId: "1:740792273534:web:3a98367aa8edd07a17a62f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBlA45rdQ4rUJVzXQS47H8YwPu5j570WH8",
  authDomain: "super-shop-cabf5.firebaseapp.com",
  projectId: "super-shop-cabf5",
  storageBucket: "super-shop-cabf5.appspot.com",
  messagingSenderId: "545474488719",
  appId: "1:545474488719:web:37519b6e3a67a90b9803fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
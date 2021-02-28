import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBy9Q8-1cW25eaKmOvmQRlWzP_EIBz7yNw",
  authDomain: "commerce-auth.firebaseapp.com",
  projectId: "commerce-auth",
  storageBucket: "commerce-auth.appspot.com",
  messagingSenderId: "226662158557",
  appId: "1:226662158557:web:f9cc6367b508dd3c3b4b34"
});

export const auth = app.auth();
export default app;

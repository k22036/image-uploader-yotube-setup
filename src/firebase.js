// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxUFtmhaxmSFdXyk794wTQ0EvrD-VxTWc",
  authDomain: "image-uploader-5226a.firebaseapp.com",
  projectId: "image-uploader-5226a",
  storageBucket: "image-uploader-5226a.appspot.com",
  messagingSenderId: "125158672248",
  appId: "1:125158672248:web:ecebe5b65d5afbc7eaaa8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
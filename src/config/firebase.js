import firebase from "firebase/app";
import "firebase/storage";

let config = {
    apiKey: "AIzaSyDz4I4AF_PX2u8nEeKR--npwQ4wdLVk3lg",
    authDomain: "first-cloud-storage-28749.firebaseapp.com",
    databaseURL: "https://first-cloud-storage-28749.firebaseio.com",
    projectId: "first-cloud-storage-28749",
    storageBucket: "first-cloud-storage-28749.appspot.com",
    messagingSenderId: "397100267399"
};

firebase.initializeApp(config);

export const storage = firebase.storage();

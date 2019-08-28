import firebase from "firebase/app";
import "firebasa/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBaKwLhMDHjiJe1conuQGIRurGeLAZ1O1A",
  authDomain: "todoist-clone-b322b.firebaseapp.com",
  databaseURL: "https://todoist-clone-b322b.firebaseio.com",
  projectId: "todoist-clone-b322b",
  storageBucket: "todoist-clone-b322b.appspot.com",
  messagingSenderId: "315072911610",
  appId: "1:315072911610:web:efc57369e77529e9"
});

export { firebaseConfig as firebase };

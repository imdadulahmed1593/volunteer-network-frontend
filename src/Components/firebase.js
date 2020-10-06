import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJR9PI_86zo13-py-MFE9rRna_TG5bAG0",
  authDomain: "volunteer-network-react.firebaseapp.com",
  databaseURL: "https://volunteer-network-react.firebaseio.com",
  projectId: "volunteer-network-react",
  storageBucket: "volunteer-network-react.appspot.com",
  messagingSenderId: "939483930337",
  appId: "1:939483930337:web:c18b4b00be55c1f28061a0",
  measurementId: "G-3F6K5KG238",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

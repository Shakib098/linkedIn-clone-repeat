import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAATyIXTnN_VzO49VsQxkgna-j28P3_UP0",
    authDomain: "linkedin-clone-72129.firebaseapp.com",
    projectId: "linkedin-clone-72129",
    storageBucket: "linkedin-clone-72129.appspot.com",
    messagingSenderId: "491750858789",
    appId: "1:491750858789:web:3ed5762acd7f72c50e5fcc",
    measurementId: "G-QBW2Y3R049"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
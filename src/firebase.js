import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCt4ub5kCrU3SwekaBstFz0g6ZtOnlvGyY",
    authDomain: "disneyplus-clone-7fcca.firebaseapp.com",
    projectId: "disneyplus-clone-7fcca",
    storageBucket: "disneyplus-clone-7fcca.appspot.com",
    messagingSenderId: "896843758880",
    appId: "1:896843758880:web:c5bbf51debd7cf4ff62b45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHg7f4DZ5BMc503-8fKmP3Dq9WcsuVR-M",
  authDomain: "crwn-clothing-db-1176f.firebaseapp.com",
  projectId: "crwn-clothing-db-1176f",
  storageBucket: "crwn-clothing-db-1176f.appspot.com",
  messagingSenderId: "886741486043",
  appId: "1:886741486043:web:25af4a4252bd4d7a9ffffe"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDoucmentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  if(!userSnapshot.exists()){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
}
import { initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUOVsjZIddGdiwThoh0Vemk3NsWGSOdqM",
    authDomain: "crwn-db-ae908.firebaseapp.com",
    projectId: "crwn-db-ae908",
    storageBucket: "crwn-db-ae908.appspot.com",
    messagingSenderId: "298399197931",
    appId: "1:298399197931:web:7396125dbc0d0765bfecae",
    measurementId: "G-P0H9MXES60"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return; 
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              });
          } catch(error){
              console.log('error creating the user', error.message);
          }
      }

      return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
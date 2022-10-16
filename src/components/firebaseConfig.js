// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, getDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dlqODjhoBhvBFp-XUwk5AThrLU-58og",
  authDomain: "where-s-waldo-e228d.firebaseapp.com",
  projectId: "where-s-waldo-e228d",
  storageBucket: "where-s-waldo-e228d.appspot.com",
  messagingSenderId: "27110789987",
  appId: "1:27110789987:web:a94885075853607cb23956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function saveCharacters(obj) {
    try {
        await setDoc(doc(db, "characters", obj.name), {
          [obj.name]: {
            image: obj.image,
            location: obj.location,
          }}
        );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async function retrieve(char) {
  const docRef = doc(db, 'characters', char);
  const docSnap = await getDoc(docRef); 

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export {saveCharacters, retrieve};
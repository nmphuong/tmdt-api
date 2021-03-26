import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_Ng0eKdQlSBqy8T-WJFKFj5M-8tdsMms",
  authDomain: "rokida-4b62d.firebaseapp.com",
  databaseURL: "https://rokida-4b62d-default-rtdb.firebaseio.com",
  projectId: "rokida-4b62d",
  storageBucket: "rokida-4b62d.appspot.com",
  messagingSenderId: "876071240258",
  appId: "1:876071240258:web:ae6d0666eccda3b2c963db"
};

firebase.initializeApp(firebaseConfig)

export default firebase

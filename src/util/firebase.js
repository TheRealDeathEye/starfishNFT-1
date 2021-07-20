import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCi4fmfwH9H76rTc__J476BUon33Or6f0M",
  authDomain: "starfishnft.firebaseapp.com",
  projectId: "starfishnft",
  storageBucket: "starfishnft.appspot.com",
  messagingSenderId: "482915082692",
  appId: "1:482915082692:web:80239847435d6f24dd8491",
  measurementId: "G-EJH4RXQF53"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
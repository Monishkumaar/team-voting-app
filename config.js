import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDf1a7wqmlD3YeNrtL00wmwHy4VoBzs7l4",
    authDomain: "team-voting-app-8faff.firebaseapp.com",
    projectId: "team-voting-app-8faff",
    storageBucket: "team-voting-app-8faff.appspot.com",
    messagingSenderId: "960162743387",
    appId: "1:960162743387:web:03084fe339b75da4bb6b7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
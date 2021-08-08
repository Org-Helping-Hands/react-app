import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAmO4F5P_R2J70x3ggKYsZrV8oB_23aWAo',
  authDomain: 'helping-hands-f0a98.firebaseapp.com',
  projectId: 'helping-hands-f0a98',
  storageBucket: 'helping-hands-f0a98.appspot.com',
  messagingSenderId: '357777142586',
  appId: '1:357777142586:web:2a6527a97ea0da1dfed603',
  measurementId: 'G-GQV6CZ8JYG'
};
export const fireApp = firebase.initializeApp(config);

export const auth = firebase.auth;

// some firebase specific stuff
import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCYj7eaKR1AG1irKUa_kgrWxAIKs4BGT-E',
  authDomain: 'catch-of-the-day-m2751.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-m2751.firebaseio.com',
});

// database() is a fn that will return the firebase db
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

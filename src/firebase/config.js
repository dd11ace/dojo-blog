import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBs6ECCMgtqyLA2LB2zYcQg-7Jjh4toJNg',
  authDomain: 'vue-firebase-blog-site.firebaseapp.com',
  projectId: 'vue-firebase-blog-site',
  storageBucket: 'vue-firebase-blog-site.appspot.com',
  messagingSenderId: '955817830818',
  appId: '1:955817830818:web:7afa2523980b1ad06feafb',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };

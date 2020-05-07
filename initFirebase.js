import firebase from 'firebase/app';
import 'firebase/auth';
import {
  apiKey,
  messagingSenderId,
  appId,
  measurementId,
} from 'root/keys';

const config = {
  apiKey,
  authDomain: 'deeper11.web.app',
  databaseURL: "https://deeper11.firebaseio.com",
  projectId: 'deeper11',
  storageBucket: "deeper11.appspot.com",
  messagingSenderId,
  appId,
  measurementId,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
  }

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }
}

export default new Firebase();

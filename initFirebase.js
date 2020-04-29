import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_API_KEY } from 'root/keys';

firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: 'deeper11.web.app',
  projectId: 'deeper11',
});

export default firebase;

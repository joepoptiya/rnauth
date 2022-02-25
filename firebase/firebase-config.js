// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDnZT0gEsP_75AHQJpVtPqprgZpkE8Rmc',
  authDomain: 'rnauth-61723.firebaseapp.com',
  projectId: 'rnauth-61723',
  storageBucket: 'rnauth-61723.appspot.com',
  messagingSenderId: '917231278754',
  appId: '1:917231278754:web:e115cce1298c01b65555fb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBIpSvfOU3x3j9iVA4ajK4lW7SgbBwvJ6E',
    authDomain: 'tenedores-c3f77.firebaseapp.com',
    projectId: 'tenedores-c3f77',
    storageBucket: 'tenedores-c3f77.appspot.com',
    messagingSenderId: '876656759830',
    appId: '1:876656759830:web:8d5c71fe4eace5d8a55137',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

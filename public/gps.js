const firebaseConfig = {
    apiKey: "AIzaSyBw6BFQF87kCuwfAXi6J93d5R6PAGPEO2Q",
    authDomain: "higps-ec870.firebaseapp.com",
    projectId: "higps-ec870",
    storageBucket: "higps-ec870.appspot.com",
    messagingSenderId: "660587256313",
    appId: "1:660587256313:web:7e490305c235ea846c0528",
    measurementId: "G-V2BE3G4DHR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true,
    merge: true
};
firestore.settings(settings);

export default firebase;

export {
    firestore,
};
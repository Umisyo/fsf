import firebase from 'firebase'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCWgKHDAMoIxW7I8juUQJXvg265t7Ls79I",
        authDomain: "five-seven-five.firebaseapp.com",
        databaseURL: "https://five-seven-five.firebaseio.com",
        projectId: "five-seven-five",
        storageBucket: "",
        messagingSenderId: "912639577685",
        appId: "1:912639577685:web:916bbbb7162e1609"
    })
}

export default firebase


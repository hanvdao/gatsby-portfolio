import firebase from "firebase/app"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCJlxJw66szjxoI9XGzxi9H0DsoIGEkNO8",
  authDomain: "hanvdao.firebaseapp.com",
  projectId: "hanvdao",
  storageBucket: "hanvdao.appspot.com",
  messagingSenderId: "949023672755",
  appId: "1:949023672755:web:ef583cd017cbeeef3423c6",
  measurementId: "G-XVJCB8RMV1",
}

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(config)
  firebaseInstance = firebase

  return firebase
}

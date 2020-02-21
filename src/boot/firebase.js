import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: 'YOURVALUEHERE',
  authDomain: 'YOURVALUEHERE',
  databaseURL: 'YOURVALUEHERE',
  projectId: 'YOURVALUEHERE',
  storageBucket: 'YOURVALUEHERE',
  messagingSenderId: 'YOURVALUEHERE',
  appId: 'YOURVALUEHERE',
  measurementId: 'YOURVALUEHERE'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firestore = firebaseApp.firestore()
const storage = firebaseApp.storage()
const db = firebaseApp.database()

export { firebaseAuth, firestore, storage, db }

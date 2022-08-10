import auth from '@react-native-firebase/auth';
import axios from 'axios';

function registerUser(email: string, password: string) {
  return auth().createUserWithEmailAndPassword(email, password)
}

function loginUser(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password)
}

function fetchPhotos() {
  return axios.get("https://jsonplaceholder.typicode.com/photos")
}

export {
  registerUser,
  loginUser,
  fetchPhotos
}

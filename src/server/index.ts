import auth from '@react-native-firebase/auth';

function registerUser(email: string, password: string) {
  return auth().createUserWithEmailAndPassword(email, password)
}

function loginUser(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password)
}

export {
  registerUser,
  loginUser
}

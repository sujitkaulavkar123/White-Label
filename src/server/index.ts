import auth from '@react-native-firebase/auth';

function registerUser(email: string, password: string, callback: (e: any) => void) {
  auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      callback({
        data: result,
        message: "User Registered successfully"
      })
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        callback({
          data: null,
          message: "That email address is already in use!"
        })
      } else if (error.code === 'auth/invalid-email') {
        callback({
          data: null,
          message: "That email address is invalid!"
        })
      } else {
        callback({
          data: null,
          message: error.userInfo.message,
        })
      }
    });
}

function loginUser(email: string, password: string, callback: (e: any) => void) {
  auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      callback({
        data: result,
        message: null
      })
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        callback({
          data: null,
          message: "That email address is already in use!"
        })
      } else if (error.code === 'auth/invalid-email') {
        callback({
          data: null,
          message: "That email address is invalid!"
        })
      } else {
        callback({
          data: null,
          message: error.userInfo.message,
        })
      }
    });
}

export {
  registerUser,
  loginUser
}

import { firebase } from '../firebase/firebase';
import { GoogleAuthProvider } from '../firebase/auth';

// LOGIN
export const userLogin = (uid, name) => ({
  type: 'USER_LOGIN',
  user: {
    uid,
    name,
  },
});

export const startUserLogin = () => () => {
  firebase.auth()
    .signInWithPopup(GoogleAuthProvider);
};

// LOGOUT
export const userLogout = () => ({
  type: 'USER_LOGOUT',
});

export const startUserLogout = () => () => {
  firebase.auth().signOut();
};

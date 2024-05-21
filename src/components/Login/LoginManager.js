import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
  firebase.initializeApp(firebaseConfig);
}

export const handleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      return signedInUser;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
}

export const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(fbProvider)
    .then(result => {
      var user = result.user;
      return user;
    })
    .catch(error => {
      var errorMessage = error.message;
      console.log('error', errorMessage);
    });
}

export const handleSignOut = () => {
  return firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: ''
      }
      return signOutUser;
    })
    .catch(err => {
      // an error happened.
    });
}

export const createUserWithEmailAndPassword = (user, setUser) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = { ...user };
      newUserInfo.error = '';
      setUser(newUserInfo);
    })
    .catch(error => {
      const newUserInfo = { ...user };
      newUserInfo.error = error.message;
      setUser(newUserInfo);
    });
}

export const signInWithEmailAndPassword = (user, setUser, setLoggedInUser, navigate) => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = { ...user };
      newUserInfo.error = '';
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      navigate('/shipment');
      console.log('sign in user info', res.user);
    })
    .catch(error => {
      const newUserInfo = { ...user };
      newUserInfo.error = error.message;
      setUser(newUserInfo);
    });
}

export const updateUserName = name => {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function () {
    console.log('user name updated successfully');
  }).catch(function (error) {
    console.log(error);
  });
}
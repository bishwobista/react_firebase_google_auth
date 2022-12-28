import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDED3OkFUKFw7vQRG4OrVaFf-rHXl6vAfs",
    authDomain: "react-chat-app-c2326.firebaseapp.com",
    projectId: "react-chat-app-c2326",
    storageBucket: "react-chat-app-c2326.appspot.com",
    messagingSenderId: "854567388101",
    appId: "1:854567388101:web:b54607f64b32053c67c1ac",
    measurementId: "G-71KQ3F1XDL"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
// FederatedAuthProvider.setCustomParameters(customOAuthParameters: CustomParameters): AuthProvider
// The custom OAuth parameters to pass in the OAuth request.

// Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in operations.

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
// const signInWithRedirect = () => auth.signInWithRedirect(provider);


// signInWithPopup(auth: Auth, provider: AuthProvider, resolver?: PopupRedirectResolver | undefined): Promise<UserCredential>
// The Auth instance.

// Authenticates a Firebase client using a popup-based OAuth authentication flow.

// @remarks
// If succeeds, returns the signed in user along with the provider's credential. If sign in was unsuccessful, returns an error object containing additional information about the error.

// @example

// // Sign in using a popup.
// const provider = new FacebookAuthProvider();
// const result = await signInWithPopup(auth, provider);

// // The signed-in user info.
// const user = result.user;
// // This gives you a Facebook Access Token.
// const credential = provider.credentialFromResult(auth, result);
// const token = credential.accessToken;
// @public

export default firebase;
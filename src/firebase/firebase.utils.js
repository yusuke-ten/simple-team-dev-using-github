import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};


export const createUserProfileDocument = async ( userAuth, additionalData ) => {

    if ( userAuth == null ) {
        return;
    }

    const userRef = firestore.doc( `users/${ userAuth.uid }` );
    const snapShot = await userRef.get();

    if ( !snapShot.exists ) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
            } );

        } catch ( error ) {
            console.log( 'error creating user', error.message );
        }
    }

    return userRef;
};


firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = ( event ) => {
    event.preventDefault();
    auth.signInWithPopup( provider );
};
export default firebase;
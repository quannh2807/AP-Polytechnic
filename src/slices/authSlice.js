import { createSlice } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
    },
    reducers: {
        userLoading: (state) => {
            if (state.loading === false) {
                state.loading = true;
            }
        },
        userReceived: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.user = action.payload;
            }
        },
    },
});

export const googleSignIn = () => async (dispatch) => {
    try {
        console.log('[gooogleSignIn]');
        dispatch(userLoading());
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);

        const currentUser = await GoogleSignin.getCurrentUser();
        dispatch(userReceived(currentUser));

        const jsonValue = JSON.stringify(currentUser);
        await AsyncStorage.setItem('loggedUser', jsonValue);
    } catch (error) {
        console.log('[onGoogleButtonPress ]', error);
    }
};

export const gooogleSignOut = () => async (dispatch) => {
    try {
        console.log('[gooogleSignOut]');
        dispatch(userLoading());
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        dispatch(userReceived(null));
    } catch (error) {
        console.error(error);
    }
};

const { reducer, actions } = authSlice;
export const { userLoading, userReceived } = actions;
export default reducer;

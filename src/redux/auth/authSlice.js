import { createSlice } from '@reduxjs/toolkit';

import { AUTH } from '~/constants';

const initialState = {
    contentScreen: AUTH.contentScreenSignIn,
    contentFormAuth: AUTH.contentFormAuthNPhone,
    currentUser: null,
    signInWithEmail: false,
    signInWithNumberPhone: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleSignInWithGoogle: (state, action) => {
            state.currentUser = action.payload;    /* mutation but run inmutation by IMMER */
        },
        handleSignInWithEmail: (state, action) => {
            state.signInWithEmail = action.payload;
        },
        handleSetContentScreen: (state, action) => {
            state.contentScreen = action.payload;
        },
        handleResetContentScreen: (state) => {
            state.contentScreen = initialState.contentScreen;
        },
        handleSetContentFormAuth: (state, action) => {
            state.contentFormAuth = action.payload;
        },
        handleResetContentFormAuth: (state) => {
            state.contentFormAuth = initialState.contentFormAuth;
        },
        handleSignInWithNumberPhone: (state, action) => {
            state.signInWithNumberPhone = action.payload;
        },
    },
});

export default authSlice;
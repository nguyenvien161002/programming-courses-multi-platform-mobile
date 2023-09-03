import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contentScreen: {
        unique: 1,
        titleAuth: 'Sign in to V3D8',
        dontHaveAcc: {
            title: `Don't have an account yet?`,
            titleLink: 'Sign up',
        },
    },
    contentFormAuth: {
        value: ['', ''],
        keyboardType: ['phone-pad', 'number-pad'],
        name: ['phone', 'phone_code'],
        placeholder: ['Phone number', 'Confirmation code'],
        labelGroup: ['Phone number', 'With email'],
    },
    currentUser: null,
    signInWithEmail: false,
    signInWithNumberPhone: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleSignInWithGoogle: (state, action) => {
            state.currentUser = action.payload; /* mutation but run inmutation by IMMER */
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

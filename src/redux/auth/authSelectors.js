const currentUserSelector = (state) => state.auth.currentUser;
const visibilityMoDal = (state) => state.auth.visibilityMoDal;
const getContentScreen = (state) => state.auth.contentScreen;
const getContentFormAuth = (state) => state.auth.contentFormAuth;
const getSignInWithEmail = (state) => state.auth.signInWithEmail;
const getSignInWithNumberPhone = (state) => state.auth.signInWithNumberPhone;

export {
    currentUserSelector,
    visibilityMoDal,
    getContentScreen,
    getSignInWithEmail,
    getSignInWithNumberPhone,
    getContentFormAuth,
};

const authSelectors = {
    currentUserSelector: (state) => state.auth.currentUser,
    visibilityMoDal: (state) => state.auth.visibilityMoDal,
    getContentScreen: (state) => state.auth.contentScreen,
    getContentFormAuth: (state) => state.auth.contentFormAuth,
    getSignInWithEmail: (state) => state.auth.signInWithEmail,
    getSignInWithNumberPhone: (state) => state.auth.signInWithNumberPhone,
};

export default authSelectors;

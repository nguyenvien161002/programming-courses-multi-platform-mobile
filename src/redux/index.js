import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '~/redux/auth';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default store;

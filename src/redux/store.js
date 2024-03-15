import { configureStore } from '@reduxjs/toolkit';
import loginApiReducer from '../redux/apiResponse/loginApiSlice';
import authReducer from '../redux/apiResponse/authSlice';

const store = configureStore({
  reducer: {
    loginApi: loginApiReducer,
    auth: authReducer,
  },
});

export default store;


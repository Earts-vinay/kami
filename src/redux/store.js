import { configureStore } from '@reduxjs/toolkit';
import loginApiReducer from '../redux/apiResponse/loginApiSlice';
import authReducer from '../redux/apiResponse/authSlice';
import resetPasswordApiReducer from '../redux/apiResponse/passwordResetApiSlice';

const store = configureStore({
  reducer: {
    loginApi: loginApiReducer,
    auth: authReducer,
    resetPasswordApi:resetPasswordApiReducer,
  },
});

export default store;


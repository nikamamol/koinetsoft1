import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "../reducer/billing/ClientSlice";
import clientDetailsSlice from "../reducer/billing/ViewClientDetails";
import userSlice from "../reducer/registeruser/Register";
import authSlice from "../reducer/registeruser/Login";
import otpSlice from "../reducer/registeruser/OtpVerify";
import createCampaign, { createNewCampaign } from "../reducer/createcampaign/CreateNewCampaign";
import CreateNewCampaign from "../reducer/createcampaign/CreateNewCampaign";
import rootReducer from "../reducer/createcampaign/CreateNewCampaign";

// import clientReducer from './clientSlice';
// import userReducer from './userSlice';
// import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    clients: ClientSlice,
    clientDetails: clientDetailsSlice,
    userRegister: userSlice,
    auth: authSlice,
    otp: otpSlice,
    reducer: rootReducer,
  },
});

export default store;

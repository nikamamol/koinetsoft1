import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "../reducer/billing/ClientSlice";
import clientDetailsSlice from "../reducer/billing/ViewClientDetails";
import userSlice from "../reducer/registeruser/Register";
import authSlice from "../reducer/registeruser/Login";
import otpSlice from "../reducer/registeruser/OtpVerify";
import rootReducer from "../reducer/createcampaign/CreateNewCampaign";
import campaignsSlice from "../reducer/createcampaign/GetCampaignData";
import templateSlice from "../reducer/createteplate/CreateNewTemplate";
import viewTemplateSlice from "../reducer/createteplate/GetTemplate";
import templateSliceById from "../reducer/createteplate/ViewTemplateById"
import fileUploadReducer from "../reducer/rpf/uploadcsvbyemploy"
import fileDataReducer from "../reducer/rpf/getcsvfiledata"


const store = configureStore({
    reducer: {
        clients: ClientSlice,
        clientDetails: clientDetailsSlice,
        userRegister: userSlice,
        auth: authSlice,
        otp: otpSlice,
        reducer: rootReducer,
        campaigns: campaignsSlice,
        template: templateSlice,
        templates: viewTemplateSlice,
        templateId: templateSliceById,
        fileUpload: fileUploadReducer,
        fileData: fileDataReducer,
    },
});

export default store;
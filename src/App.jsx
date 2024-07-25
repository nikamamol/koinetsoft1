import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNavbar from "./components/HeadNavbar";
import MainDashboard from '../src/views/MainDashboard';
import AddUser from "../src/views/userdetails/AddUser";
import VieweUser from "../src/views/userdetails/VieweUser";
import Attendance from "../src/views/userdetails/Attendance";
import Expired from "../src/views/rfp/Expired";
import Active from "../src/views/rfp/Active";
import Received from "../src/views/rfp/Received";
import MyEnterprise from "../src/views/enterprise/MyEnterprise";
import InviteEnterprise from "../src/views/enterprise/InviteEnterprise";
import InviteAgencies from "../src/views/agency/InviteAgencies";
import MyEngencies from "../src/views/agency/MyEngencies";
// billing
import AddClient from "../src/views/billing/AddClient";
import CreateInvoice from "../src/views/billing/CreateInvoice";
import InvoiceSetting from "../src/views/billing/InvoiceSetting";
import ProcessPayment from "../src/views/billing/ProcessPayment";
import VieweClient from "../src/views/billing/VieweClient";
import ViewInvoice from "../src/views/billing/ViewInvoice";
// support
import Emails from "../src/views/support/Emails";
import OnlineChat from "../src/views/support/OnlineChat";
// settings
import IpWhiteList_BlockList from "../src/views/settings/IpWhiteList_BlockList";
// library
import VoiceLibrary from "../src/views/library/VoiceLibrary";
// campaigns/agency
import ActiveCampaigns from "../src/views/leads/agency/ActiveCampaigns";
import AllCampaigns from "../src/views/leads/agency/AllCampaigns";
import ClosedCampaigns from "../src/views/leads/agency/ClosedCampaigns";
import PausedCampaigns from "../src/views/leads/agency/PausedCampaigns";
// campaigns/inhouse
import ActiveCampaignsIn from "../src/views/leads/inhousecampaign/ActiveCampaignsIn";
import AllCampaignsIn from "../src/views/leads/inhousecampaign/AllCampaignsIn";
import ClosedCampaignsIn from "../src/views/leads/inhousecampaign/ClosedCampaignsIn";
import PausedCampaignsIn from "../src/views/leads/inhousecampaign/PausedCampaignsIn";
import CreateCampaign from "../src/views/leads/inhousecampaign/CreateCampaign";
// campaigns/enterprises
import ActiveCampaignsEn from "../src/views/leads/enterprises/ActiveCampaignsEn";
import AllCampaignsEn from "../src/views/leads/enterprises/AllCampaignsEn";
import ClosedCampaignsEn from "../src/views/leads/enterprises/ClosedCampaignsEn";
import PausedCampaignsEn from "../src/views/leads/enterprises/PausedCampaignsEn";
import Profile from './views/userdetails/Profile';
import ViewAllCampaignsClick from './views/leads/ViewAllCampaignsClick';
// import { SignIn, SignUp } from '@clerk/clerk-react';
import Login from '../src/userloginsignup/Login';
import Register from '../src/userloginsignup/Register';
import NewLandingPage from '../src/views/landingpages/NewLandingPage';
import ViewLandingPages from '../src/views/landingpages/ViewLandingPages';
import TemplateOne from './template/TemplateOne';
import TemplateTwo from './template/TemplateTwo';
import TemplateThree from './template/TemplateThree';
import OtpInput from '../src/userloginsignup/OtpInput';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register', '/template-1', '/enterotp'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <HeadNavbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enterotp" element={<OtpInput />} />
          <Route path="/viewallcampaignsclick" element={<ViewAllCampaignsClick />} />
          {/* landing pages */}
          <Route path="/landingpages/createlandingpage" element={<NewLandingPage />} />
          <Route path="/landingpages/viewalllandingpages" element={<ViewLandingPages />} />
          <Route path="/template-1" element={<TemplateOne />} />
          <Route path="/template-2" element={<TemplateTwo />} />
          <Route path="/template-3" element={<TemplateThree />} />

          {/* user */}
          <Route path="/user/addUser" element={<AddUser />} />
          <Route path="/user/viewUser" element={<VieweUser />} />
          <Route path="/user/attendance" element={<Attendance />} />
          <Route path="/user/profile" element={<Profile />} />
          {/* RFP */}
          <Route path="/rfp/active" element={<Active />} />
          <Route path="/rfp/expired" element={<Expired />} />
          <Route path="/rfp/received" element={<Received />} />
          {/* Agency */}
          <Route path="/agency/myengencies" element={<MyEngencies />} />
          <Route path="/agency/inviteagency" element={<InviteAgencies />} />
          {/* enterprise */}
          <Route path="/enterprise/MyEnterprise" element={<MyEnterprise />} />
          <Route path="/enterprise/inviteEnterprise" element={<InviteEnterprise />} />
          {/* campaign/agency */}
          <Route path="/campaigns/agency/activecampaigns" element={<ActiveCampaigns />} />
          <Route path="/campaigns/agency/allCampaigns" element={<AllCampaigns />} />
          <Route path="/campaigns/agency/closedCampaigns" element={<ClosedCampaigns />} />
          <Route path="/campaigns/agency/pausedCampaigns" element={<PausedCampaigns />} />
          {/* campaign/Enterprise */}
          <Route path="/campaigns/enterprises/activecampaigns" element={<ActiveCampaignsEn />} />
          <Route path="/campaigns/enterprises/allCampaigns" element={<AllCampaignsEn />} />
          <Route path="/campaigns/enterprises/closedCampaigns" element={<ClosedCampaignsEn />} />
          <Route path="/campaigns/enterprises/pausedCampaigns" element={<PausedCampaignsEn />} />
          {/* campaign/inhouse */}
          <Route path="/campaigns/inhousecampaigns/activecampaigns" element={<ActiveCampaignsIn />} />
          <Route path="/campaigns/inhousecampaigns/allCampaigns" element={<AllCampaignsIn />} />
          <Route path="/campaigns/inhousecampaigns/closedCampaigns" element={<ClosedCampaignsIn />} />
          <Route path="/campaigns/inhousecampaigns/pausedCampaigns" element={<PausedCampaignsIn />} />
          <Route path="/campaigns/inhousecampaigns/createCampaign" element={<CreateCampaign />} />

          {/* billing */}
          <Route path="/billing/addClient" element={<AddClient />} />
          <Route path="/billing/createInvoice" element={<CreateInvoice />} />
          <Route path="/billing/invoiceSetting" element={<InvoiceSetting />} />
          <Route path="/billing/processPayment" element={<ProcessPayment />} />
          <Route path="/billing/vieweClient" element={<VieweClient />} />
          <Route path="/billing/viewInvoice" element={<ViewInvoice />} />
          {/* support */}
          <Route path="/support/email" element={<Emails />} />
          <Route path="/support/onlinechat" element={<OnlineChat />} />
          {/* settings */}
          <Route path="/settings/ipwhitelist_blocklist" element={<IpWhiteList_BlockList />} />
          {/* library */}
          <Route path="/library/voiceLibrary" element={<VoiceLibrary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import BusinessIcon from '@mui/icons-material/Business';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StorageIcon from '@mui/icons-material/Storage';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Collapse } from '@mui/material';
import LogoImage from "../assets/koinetlogo.png"
import UserProfile from './UserProfile';

const drawerWidth = 240;


function ResponsiveDrawer(props) {
  let navigate = useNavigate()
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isCollapseRFP, setIsCollapseRFP] = React.useState(false);
  const [isCollapseEnterprise, setIsCollapseEnterprise] = React.useState(false);
  const [isCollapseAgencies, setIsCollapseAgencies] = React.useState(false);
  const [isCollapseCamp, setIsCollapseCamp] = React.useState(false);
  const [isCollapseBilling, setIsCollapseBilling] = React.useState(false);
  const [isCollapseSupport, setIsCollapseSupport] = React.useState(false);
  const [isCollapseSetting, setIsCollapseSetting] = React.useState(false);
  const [isCollapseLib, setIsCollapseLib] = React.useState(false);
  const [openCampaigns, setOpenCampaigns] = React.useState(false);
  const [openEnterprises, setOpenEnterprises] = React.useState(false);
  const [openAgency, SetOpenAgency] = React.useState(false);
  const [openInHouse, SetOpenInHouse] = React.useState(false);
  const [landingPages, setLandingPages] = React.useState(false);


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  const handleListItemClick = () => {
    navigate('/dashboard');
  };
  const handleCollapseUser = () => {
    setIsCollapse(!isCollapse);
  };
  const handleCollapseRFP = () => {
    setIsCollapseRFP(!isCollapseRFP);
  };
  const handleCollapseEnterprise = () => {
    setIsCollapseEnterprise(!isCollapseEnterprise);
  };
  const handleCollapseAgencies = () => {
    setIsCollapseAgencies(!isCollapseAgencies);
  };
  // const handleCollapseCamp = () => {
  //   setIsCollapseCamp(!isCollapseCamp);
  // };

  const handleCollapseBilling = () => {
    setIsCollapseBilling(!isCollapseBilling);
  };

  const handleCollapseSupport = () => {
    setIsCollapseSupport(!isCollapseSupport);
  };

  const handleCollapseSetting = () => {
    setIsCollapseSetting(!isCollapseSetting);
  };
  const handleCollapseLib = () => {
    setIsCollapseLib(!isCollapseLib);
  };


  const handleCollapseLandingPage = () => {
    setLandingPages(!landingPages);
  };

  const handleCampaignsClick = () => {
    setOpenCampaigns(!openCampaigns);
  };

  const handleEnterprisesClick = () => {
    setOpenEnterprises(!openEnterprises);
  };
  const handleAgencyClick = () => {
    SetOpenAgency(!openAgency);
  };
  const handleInHouseClick = () => {
    SetOpenInHouse(!openInHouse);
  };
  const handleNavigation = (path) => {
    navigate(path);
  };

  const drawer = (
    <div className='sidebar_bg'>

      {/* <Toolbar /> */}
      <div className='text-center sticky-top sidebar_bg'>
        <img src={LogoImage} alt="logo" width={100} height={50} />
        <p>Koinet Media Ites Pvt Ltd.</p>


      </div>
      {/* <Divider /> */}
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            to="/campaigns/inhousecampaigns/createCampaign"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={handleListItemClick}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {/* Add any icon here if needed */}
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }} className='btn btn-danger'>New Campaign +</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* Dashboard Section */}
      <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={handleListItemClick}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
      {/* landing page section */}

      {/* <div className='text-center'>
        <p className='bg-light text-dark text-muted'>ADMIN</p>
      </div> */}
      <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={handleCollapseLandingPage}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LaptopChromebookIcon />
            </ListItemIcon>
            <ListItemText primary="Landing Pages" sx={{ opacity: open ? 1 : 0 }} />
            {landingPages ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={landingPages} timeout="auto" unmountOnExit>
          {[
            { text: 'New Landing Page', path: '/landingpages/createlandingpage' },
            { text: 'View Landing Pages', path: '/landingpages/viewalllandingpages' },

          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* {item.text === 'Landing Pages' && <LaptopChromebookIcon />} */}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
      {/* <div className='text-center'>
        <p className='bg-light text-dark text-muted'>PUBLISHER</p>
      </div> */}
      {/* user section */}
      <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={handleCollapseUser}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapse} timeout="auto" unmountOnExit>
          {[
            { text: 'View User', path: '/user/viewUser' },
            { text: 'Add User', path: '/user/addUser' },
            { text: 'Attendance', path: '/user/attendance' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.text === 'User' && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
      {/* RFP Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseRFP}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NoteAltIcon />
            </ListItemIcon>
            <ListItemText primary="RPF" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseRFP ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseRFP} timeout="auto" unmountOnExit>
          {[
            { text: 'Received', path: '/rfp/received' },
            { text: 'Active', path: '/rfp/active' },
            { text: 'Expired', path: '/rfp/expired' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* Enterprise Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseEnterprise}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Enterprise" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseEnterprise ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseEnterprise} timeout="auto" unmountOnExit>
          {[
            { text: 'MyEnterprise', path: '/enterprise/MyEnterprise' },
            { text: 'Invite Enterprise', path: '/enterprise/inviteEnterprise' },

          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* Agency Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseAgencies}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Agency" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseAgencies ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseAgencies} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { text: 'My Agencies', path: '/agency/myengencies' },
              { text: 'Invite Agencies', path: '/agency/inviteagency' },
            ].map((item) => (
              <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: "auto",
                      justifyContent: "center",
                    }}
                  >
                    {/* No icon specified for dropdown items */}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>

      {/* campaigns Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCampaignsClick}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText primary="Campaigns" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseCamp ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {/* Collapse for Campaigns */}
        <Collapse in={openCampaigns} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Enterprises */}
            <ListItem disablePadding sx={{ display: "block" }} onClick={handleEnterprisesClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 7,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                  {/* No icon needed for Enterprise */}
                </ListItemIcon>
                <ListItemText primary="Enterprises" />
                {openEnterprises ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            {/* Collapse for Enterprises */}
            <Collapse in={openEnterprises} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Options under Enterprises */}
                {[
                  { text: "All Campaigns", path: "/campaigns/enterprises/allCampaigns" },
                  { text: "Active Campaigns", path: "/campaigns/enterprises/activecampaigns" },
                  { text: "Paused Campaigns", path: "/campaigns/enterprises/pausedCampaigns" },
                  { text: "Closed Campaigns", path: "/campaigns/enterprises/closedCampaigns" },
                ].map((item) => (
                  <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                        {/* No icon specified for dropdown items */}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>
        {/* Agency */}
        <Collapse in={openCampaigns} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={{ display: "block" }} onClick={handleAgencyClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 7,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                  {/* No icon needed for Agency */}
                </ListItemIcon>
                <ListItemText primary="Agency" />
                {openAgency ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            {/* Collapse for Agency */}
            <Collapse in={openAgency} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Options under Agency */}
                {[
                  { text: "All Campaigns", path: "/campaigns/agency/allCampaigns" },
                  { text: "Active Campaigns", path: "/campaigns/agency/activecampaigns" },
                  { text: "Paused Campaigns", path: "/campaigns/agency/pausedCampaigns" },
                  { text: "Closed Campaigns", path: "/campaigns/agency/closedCampaigns" },
                ].map((item) => (
                  <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                        {/* No icon specified for dropdown items */}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>
        {/* In-House Campaigns */}
        <Collapse in={openCampaigns} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={{ display: "block" }} onClick={handleInHouseClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 7,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                  {/* No icon needed for In-House Campaigns */}
                </ListItemIcon>
                <ListItemText primary="In-House Campaigns" />
                {openInHouse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            {/* Collapse for In-House Campaigns */}
            <Collapse in={openInHouse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Options under In-House Campaigns */}
                {[
                  { text: "All Campaigns", path: "/campaigns/inhousecampaigns/allCampaigns" },
                  { text: "Active Campaigns", path: "/campaigns/inhousecampaigns/activecampaigns" },
                  { text: "Paused Campaigns", path: "/campaigns/inhousecampaigns/pausedCampaigns" },
                  { text: "Closed Campaigns", path: "/campaigns/inhousecampaigns/closedCampaigns" },
                  { text: "Create Campaign", path: "/campaigns/inhousecampaigns/createCampaign" },
                ].map((item) => (
                  <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                        {/* No icon specified for dropdown items */}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>


      {/* Billing Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseBilling}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BorderColorIcon />
            </ListItemIcon>
            <ListItemText primary="Billing" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseBilling ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseBilling} timeout="auto" unmountOnExit>
          {[
            { text: 'Invoice Setting', path: '/billing/invoiceSetting' },
            { text: 'Add Client', path: '/billing/addClient' },
            { text: 'View Client', path: '/billing/vieweClient' },
            { text: 'View Invoices', path: '/billing/viewInvoice' },
            { text: 'Create Invoice', path: '/billing/createInvoice' },
            { text: 'Process Payment', path: '/billing/processPayment' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* No icon specified for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>


      {/* Support Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseSupport}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SupportAgentIcon />
            </ListItemIcon>
            <ListItemText primary="Support" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseSupport ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseSupport} timeout="auto" unmountOnExit>
          {[
            // { text: 'Online Chat', path: '/support/onlinechat' },
            { text: 'Email', path: '/support/email' },

          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* No icon specified for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* Settings Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseSetting}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseSetting ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseSetting} timeout="auto" unmountOnExit>

          {[
            { text: 'IP Whitelist/Blocking', path: '/settings/ipwhitelist_blocklist' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* No icon specified for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* Library Section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseLib}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LibraryAddIcon />
            </ListItemIcon>
            <ListItemText primary="Library" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseLib ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseLib} timeout="auto" unmountOnExit>
          {[
            { text: "Voice Library", path: "/library/voiceLibrary" }
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(item.path)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* No icon specified for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"

        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#F8F4E1",


        }}
      >
        <Toolbar>
          <IconButton
            color="dark"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <div variant="p" noWrap component="div" className='ms-auto'>
            <UserProfile />
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              '&::-webkit-scrollbar': { display: 'none' },
              '&': { scrollbarWidth: 'none' }
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              '&::-webkit-scrollbar': { display: 'none' },
              '&': { scrollbarWidth: 'none' }
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      </Box>
    </Box>

  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

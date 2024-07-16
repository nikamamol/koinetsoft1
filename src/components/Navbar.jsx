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
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Collapse } from '@mui/material';
// import LogoImage from "../assets/demo1.png"

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

  const handleListItemClick = (text) => {
    if (text === 'Dashboard') {
      navigate('/');
    }
    // Add more conditions if needed
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


  const drawer = (
    <div>

      {/* <Toolbar /> */}
      <div className='text-center'>
        {/* <img src={LogoImage} alt="Hello" width={150} height={100} /> */}
        <h4>Logo</h4>

      </div>
      {/* <Divider /> */}
      <hr />
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

      {/* user section */}
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={handleCollapseUser}>
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
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapse} timeout="auto" unmountOnExit>
          {["View User", "Add User", "Attendance"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {text === "User" && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
            <ListItemText primary="RFP" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseRFP ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseRFP} timeout="auto" unmountOnExit>
          {["Received", "Active", "Expired"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
          {["My Enterprise", "Invite Enterprise"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Agency" sx={{ opacity: open ? 1 : 0 }} />
            {isCollapseAgencies ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseAgencies} timeout="auto" unmountOnExit>
          {["My Agencies", "Invite Agencies"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* campaigns Section */}
      <List>
        {/* Campaigns */}
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
        {/* Enterprises */}
        <Collapse in={openCampaigns} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleEnterprisesClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 7,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                  {/* No icon needed for Enterprise */}
                </ListItemIcon>
                <ListItemText primary="Enterprises" />
                {openEnterprises ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            {/* Options under Enterprises */}
            <Collapse in={openEnterprises} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 1 */}
                    </ListItemIcon>
                    <ListItemText primary="All Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Active Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Paused Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Closed Campaigns" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <Collapse in={openCampaigns} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleAgencyClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 7,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                  {/* No icon needed for Enterprise */}
                </ListItemIcon>
                <ListItemText primary="Agency" />
                {openAgency ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            {/* Options under Enterprises */}
            <Collapse in={openAgency} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 1 */}
                    </ListItemIcon>
                    <ListItemText primary="All Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Active Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Paused Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Closed Campaigns" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <Collapse in={openCampaigns} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleInHouseClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 7,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                  {/* No icon needed for Enterprise */}
                </ListItemIcon>
                <ListItemText primary="In-House Campaigns" />
                {openInHouse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
            {/* Options under Enterprises */}
            <Collapse in={openInHouse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 1 */}
                    </ListItemIcon>
                    <ListItemText primary="All Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Active Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Paused Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Closed Campaigns" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                      {/* No icon needed for Option 2 */}
                    </ListItemIcon>
                    <ListItemText primary="Create Campaigns" />
                  </ListItemButton>
                </ListItem>
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
          {["Invoice Setting", "Add Client", "View Client", "View Invoices", "Create Invoice", "Process Payment"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
          {["Online Chat", "Email"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
          {["IP Whitelist/Blocking"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
          {["Voice Library"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {/* No icon here for dropdown items */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
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
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="p" noWrap component="div" className='ms-auto'>
            User Name <span style={{
              display: 'inline-block',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ccc',
              textAlign: 'center',
              lineHeight: '40px',
              marginLeft: '10px'  // Adjust the margin as needed
            }}>
              U
            </span>
          </Typography>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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

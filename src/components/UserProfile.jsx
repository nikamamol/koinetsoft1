import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserDetails } from '../redux/reducer/registeruser/UserDetails';
import axios from 'axios';
import baseUrl from '../constant/ConstantApi';

export default function UserProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  // Fetch user details on component mount
  useEffect(() => {
    dispatch(fetchUserDetails()).catch((err) => {
      console.error('Error fetching user details:', err);
    });
  }, [dispatch]);

  const username = user?.username || 'User';

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    if (!user || !user._id) {
      console.error('User ID is not available.');
      alert('Error logging out. Please try again.');
      return;
    }

    const userId = user._id;
    console.log('Logging out user:', userId);

    try {
      // Make the logout API request
      await axios.post(`${baseUrl}user/logout`, { userId });

      // Clear local storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem('timer');

      // Navigate to login page
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out. Please try again.');
    }
  };

  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <span className='me-2 text-dark'>{username}</span>
            <Avatar sx={{ width: 40, height: 40, backgroundColor: "#f7434fcc", padding: "5px" }}>
              {username.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />
          <Link to="/user/profile" className='text-decoration-none text-dark'>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <span className='text-dark'>Log-Out</span>
        </MenuItem>
      </Menu>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
    </>
  );
}

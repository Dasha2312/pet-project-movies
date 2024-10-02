import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import style from './MainMenu.module.scss'
import SearchBlock from '../SearchBlock/SearchBlock';
import SingInForm from '../SingUpForm/SingUpForm';
import LogIn from '../LogIn/LogIn';
import SingUpForm from '../SingUpForm/SingUpForm';
import useUser from '../../hooks/Auth/useUser';
import useLogOut from '../../hooks/Auth/useLogOut';
import { useContextProvider } from '../../context/useContext';
import Sing_In_Up from '../Sing_In_Up/Sing_In_Up';


const pages = ['Home', 'Movies', 'Shows', 'Support', 'Subscriptions'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MainMenu({classBlock}) {
  const [searchShow, setSearchShow] = useState(false)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [openLogIn, setOpenLogInModal] = useState(false)

  const {isAuthenticated} = useContextProvider();


  const {logout, isPengindLogOut} = useLogOut();
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleSearchClick(event) {
    event.stopPropagation();
    setSearchShow(true);
  }

  function handleOpenLogInModal() {
    setOpenLogInModal(true)
  }



  return (
    <AppBar position="static" className={`${style.header__menu} ${classBlock}`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{position: 'relative'}}>

          <Box sx={{mr: 2, display: { xs: 'none', md: 'flex', maxWidth: '165px' }}}>
            <NavLink to="/">
              <img src="/img/Logo.svg" />
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={`/${page}`}>{page}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{mr: 2, display: { xs: 'flex', md: 'none' },}}>
            <NavLink to="/">
              <img src="./img/Logo.svg" />
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            <Box className={style.header__menuItems}>
              {pages.map((page) => (
                <Box key={page} onClick={handleCloseNavMenu} className={style.header__menuItem}>
                  <NavLink to={`/${page.toLowerCase()}`} 
                    className={({ isActive }) => `${style.header__menuLink} ${isActive ? style.active : ''}`}>
                      {page}
                  </NavLink>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className={style.header__menuActions}>
            <Box sx={{display: 'flex', alignItems: 'center'}} className={style.header__menuAction} onClick={handleSearchClick}>
              <img src="/img/icon/search.svg" />
            </Box>
            
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }} className={style.header__menuAction}>
              {
                isAuthenticated ? (
                  <>
                    <Tooltip>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <AccountCircleIcon sx={{fontSize: '35px', color: '#fff'}} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem>
                        <Typography sx={{ textAlign: 'center' }}>Account</Typography>
                      </MenuItem>
                      <MenuItem>
                        <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
                      </MenuItem>
                      <MenuItem onClick={logout}>
                        <Typography sx={{ textAlign: 'center' }}>Log Out</Typography>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <IconButton onClick={handleOpenLogInModal} sx={{ p: 0 }}>
                    <AccountCircleIcon sx={{fontSize: '35px', color: '#fff'}} />
                  </IconButton>
                )
              }
              
              <Sing_In_Up openLogIn={openLogIn} setOpenLogInModal={setOpenLogInModal} />
             
            </Box>
          </Box>
          {
            searchShow && <SearchBlock setSearchShow={setSearchShow}  />
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainMenu;
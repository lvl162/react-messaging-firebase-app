import React from 'react';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

import {
  BrandLogo,
  GroupIconsContainer,
  GroupIconsWrapper,
  IconChild,
  LogoContainer,
  NavBarContainer,
  NavBarWrapper,
  SearchBar,
  SearchInput,
} from './NavBarElements';
import { IoIosHome, IoIosNotifications, IoIosLogOut } from 'react-icons/io';
import { AiFillMessage } from 'react-icons/ai';
// import { auth } from '../../lib/firebase';
import { signOut } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
const NavBar = ({ avtUrl }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  console.log(avtUrl);
  const dispatch = useDispatch();
  const logoSrc = require('../../images/brandLogo.png').default;
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LogoContainer to='/'>
          <BrandLogo src={logoSrc} alt='Logo' />
        </LogoContainer>
        <SearchBar>
          <SearchInput placeholder='Tìm kiếm'></SearchInput>
        </SearchBar>
        <GroupIconsContainer>
          <GroupIconsWrapper>
            <IconChild to='/' onClick={toggleHome}>
              <IoIosHome />
            </IconChild>
            <IconChild to='/message'>
              <AiFillMessage />
            </IconChild>
            <IconChild to='/notifications'>
              <IoIosNotifications />
            </IconChild>
            <IconChild to='/lvl162'>
              <Avatar
                size='25'
                facebook-id='invalidfacebookusername'
                src={avtUrl}
              />
            </IconChild>
            {/* <div onClick={() => auth.signOut()}>OUT</div> */}
            <IconChild to='/' onClick={() => dispatch(signOut())}>
              <IoIosLogOut />
            </IconChild>
          </GroupIconsWrapper>
        </GroupIconsContainer>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;

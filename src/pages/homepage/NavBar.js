import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  ALOIDAIKLogo,
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
import Avatar from '../../components/Avatar';
const NavBar = ({ me }) => {
  const { uid } = me;
  const photoURL = me.photoURL;
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const dispatch = useDispatch();
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LogoContainer onClick={toggleHome}>
          {/* <BrandLogo src={logoSrc} alt='Logo' /> */}
          <ALOIDAIKLogo>ALOIDAIK</ALOIDAIKLogo>
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
            <IconChild to={`/user/${uid}`}>
              <Avatar size='30' src={photoURL} padding='1' />
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

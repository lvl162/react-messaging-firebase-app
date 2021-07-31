import React from 'react';
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
import { IoIosHome, IoIosNotifications } from 'react-icons/io';
import { AiFillMessage } from 'react-icons/ai';
const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LogoContainer>
          <BrandLogo
            src={require('../../images/brandLogo.png').default}
            alt='Logo'
          />
        </LogoContainer>
        <SearchBar>
          <SearchInput placeholder='Tìm kiếm'></SearchInput>
        </SearchBar>
        <GroupIconsContainer>
          <GroupIconsWrapper>
            <IconChild to='/'>
              <IoIosHome />
            </IconChild>
            <IconChild to='/message'>
              <AiFillMessage />
            </IconChild>
            <IconChild to='/notifications'>
              <IoIosNotifications />
            </IconChild>
            <IconChild to='/lvl162'>L</IconChild>
          </GroupIconsWrapper>
        </GroupIconsContainer>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;

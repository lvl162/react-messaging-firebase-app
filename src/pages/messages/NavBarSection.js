import React from 'react';
import { NavBarContainer } from './elements';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ALOIDAIKLogo } from '../homepage/NavBarElements';

const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 975px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoContainer = styled(Link)`
  /* cursor: inherit; */
  color: inherit;

  text-decoration: none;
  flex: 1 1 0%;
  min-width: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
`;
export const BrandLogo = styled.img`
  cursor: pointer;
  height: 50%;
  width: 160px;
`;

export const MsgLogo = styled(ALOIDAIKLogo)`
  text-align: left;
  font-size: 2rem;
`;

const NavBarSection = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LogoContainer to='/'>
          
          <MsgLogo>ALOIDAIK</MsgLogo>
        </LogoContainer>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBarSection;

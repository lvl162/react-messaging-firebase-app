import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
  margin-top: -54px;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  z-index: 998;
  background-color: white;
`;
export const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 975px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const LogoContainer = styled(Link)`
  cursor: inherit;
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

export const SearchBar = styled.div`
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  width: 250px;
  height: 30px;
  font-size: 1rem;
`;

export const GroupIconsContainer = styled.div`
  display: flex;
  flex: 1 0 0%;
  justify-content: flex-end;
  align-items: center;
`;

export const GroupIconsWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  gap: 20px;
`;

export const IconChild = styled(Link)`
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: inherit;
`;

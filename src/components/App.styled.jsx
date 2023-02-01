import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 6px 10px;
  outline: none;
  border-radius: 10px;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 3px 4px #2e2bc2;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  &:hover,
  &:focus {
    color: #ffbb00;
    transform: scale(1.04);
    box-shadow: 2px 3px 4px #b8c501, 1px 1px 2px #fbff00;

    cursor: zoom-in;
  }

  &.active {
    color: #ffbb00;
    background: linear-gradient(145deg, #1b0181, #0149a8);
  }
`;

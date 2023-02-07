import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const errorPic =
  'https://placeholder.pics/svg/1280x600/FBFF00-0A09FF/FF0000-FF0909/Poster%20not%20found';
export const SectionDetails = styled.section`
  position: relative;
  padding: 86px 40px;
  background-image: linear-gradient(to right, #070e11a2, #0f0f2b9d, #06023db4),
    url(${({ poster }) => poster || errorPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgb(46 43 194) 2px 6px 8px, rgb(29 6 235) -2px -2px 6px;
  border: 1px solid rgb(184, 197, 1);
`;

export const MovieDataWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MovieImageWrp = styled.div`
  box-shadow: rgb(46 43 194) 2px 6px 8px, rgb(29 6 235) -2px -2px 6px;
  display: block;
`;
export const MovieImage = styled.img`
  width: 300px;
`;

export const MovieContentWrp = styled.div`
  padding: 20px 40px 20px 40px;
`;

export const MovieTitle = styled.h3`
  font-size: 30px;
  color: rgb(220, 223, 183);
`;

export const MovieDescr = styled.p`
  font-size: 24px;
  font-weight: 500;
  width: 800px;
`;

export const MovieDescrSpan = styled.span`
  font-size: 20px;
  color: rgb(255, 187, 0);
`;

export const LinkList = styled.ul`
  text-align: center;
  padding: 20px;
`;

export const LinkItem = styled(NavLink)`
  color: white;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  font-size: 22px;
  transition: color 300ms ease-out 0s, color 150ms ease-in 0s;
  &:hover,
  &:focus {
    color: rgb(255, 187, 0);
  }
`;

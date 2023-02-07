import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const MoviesGalleryItemWrp = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  &:hover,
  &:focus {
    color: #ffbb00;
    transform: scale(1.02);
    box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;
    cursor: pointer;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: inherit;
  text-decoration: none;
  color: #ffffff;
  &.active {
    color: #ffbb00;
    background: linear-gradient(145deg, #1b0181, #0149a8);
  }
`;

export const MoviesGalleryImageWrp = styled.div`
  display: block;
`;

export const MoviesGalleryImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 450px;
`;

export const MoviesGalleryContentWrp = styled.div`
  padding: 14px;
`;

export const MoviesGalleryTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  height: 80px;
`;

export const MoviesGalleryDate = styled.p`
  font-weight: 500;
`;

export const MoviesGalleryWrp = styled.span`
  font-weight: 400;
`;

import styled from 'styled-components';

export const CastStyledItem = styled.li`
  border-radius: 6px;
  flex-basis: calc((100% - 40px) / 5);
  overflow: hidden;
  box-shadow: rgb(46 43 194) 2px 6px 8px, rgb(29 6 235);
`;

export const CastImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 240px;
`;

export const CastContentWrp = styled.div`
  background-color: #666666;
  color: #070707;
  padding: 14px;
  height: 200px;
`;

export const CastActor = styled.h3`
  text-align: center;
  height: 48px;
`;

export const CastCharacter = styled.p`
  font-size: 18px;
  font-weight: 500;
  &:nth-of-type(1) {
    height: 82px;
  }
`;

export const CastDescrSpan = styled.span`
  color: #d0ff00;
`;

import styled from 'styled-components';

export const ReviewStyledItem = styled.li`
  background-color: #06023db4;
  border-radius: 6px;
  padding: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  box-shadow: rgb(46 43 194) 2px 6px 8px, rgb(29 6 235) -2px -2px 6px;
  border: 1px solid rgb(184, 197, 1);
`;

export const ReviewImg = styled.img`
  width: 200px;
  overflow: hidden;
  border-radius: 6px;
`;

export const ReviewContentWrp = styled.div`
  max-width: 900px;
  padding: 20px;
`;
export const ReviewTitle = styled.h3`
  font-size: 20px;
`;
export const ReviewDescr = styled.p`
  font-size: 16px;
`;

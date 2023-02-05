import styled from 'styled-components';
export const StyledBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 0;
  width: 24px;
  height: 24px;
  color: #fff;
  border: 0;
  background-color: transparent;
  box-shadow: 2px 2px 3px #2e2bc2;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ffbb00;
    transform: scale(1.1);
    box-shadow: 2px 4px 6px #b8c501;
  }
`;

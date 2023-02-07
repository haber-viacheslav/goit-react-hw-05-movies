import styled from 'styled-components';

export const SearchForm = styled.form`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: transparent;
  border-radius: 6px;
  overflow: hidden;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;
  transition: 300ms box-shadow ease-out, 150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: #ffbb00;
    box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  background-color: transparent;
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: #fff;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #fff;
  }
`;

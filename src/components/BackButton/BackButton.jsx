import { StyledBackBtn } from './BackButton.styled';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
export const BackButton = ({ onClick, children }) => {
  return (
    <StyledBackBtn type="button" onClick={onClick}>
      <BsFillArrowLeftCircleFill size="24" />
      {children}
    </StyledBackBtn>
  );
};

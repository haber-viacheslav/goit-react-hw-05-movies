import { StyledBackBtn } from './BackButton.styled';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
export const BackButton = ({ onClick, children }) => {
  return (
    <StyledBackBtn type="button" onClick={onClick}>
      <BsFillArrowLeftCircleFill size="24" />
      {children}
    </StyledBackBtn>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

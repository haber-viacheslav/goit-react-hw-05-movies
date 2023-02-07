import PropTypes from 'prop-types';
import { SectionWrp, SectionTitle } from './Section.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrp>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </Container>
    </SectionWrp>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

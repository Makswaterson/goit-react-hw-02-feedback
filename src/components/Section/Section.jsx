import PropTypes from 'prop-types';
import { SectionTitle, SectionFB } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionFB>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionFB>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

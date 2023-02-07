import { CastItem } from 'components/CastItem/CastItem';
import { CastStyledList } from './CastList.styled';
import PropTypes from 'prop-types';
export const CastList = ({ casts }) => {
  return (
    <CastStyledList>
      {casts.map(cast => (
        <CastItem key={cast.id} cast={cast} />
      ))}
    </CastStyledList>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      known_for_department: PropTypes.string,
      profile_path: PropTypes.string,
      popularity: PropTypes.number,
    })
  ),
};

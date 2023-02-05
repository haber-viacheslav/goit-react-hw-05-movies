import { CastItem } from 'components/CastItem/CastItem';
import PropTypes from 'prop-types';
export const CastList = ({ casts }) => {
  return (
    <ul>
      {casts.map(cast => (
        <CastItem key={cast.id} cast={cast} />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string,
    character: PropTypes.string,
    known_for_department: PropTypes.string,
    profile_path: PropTypes.string,
    popularity: PropTypes.number,
  }),
};

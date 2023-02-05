import { urlGenerator } from 'components/helpers/urlGenerator';
import PropTypes from 'prop-types';
export const CastItem = ({
  cast: { name, character, known_for_department, profile_path, popularity },
}) => {
  return (
    <li>
      <div>
        <div>
          <img src={urlGenerator(profile_path)} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>Character: {character || 'No name'}</p>
          <p>Department: {known_for_department || '-'} </p>
          <p>Popularity: {popularity.toFixed(1) || '-'}</p>
        </div>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string,
    character: PropTypes.string,
    known_for_department: PropTypes.string,
    profile_path: PropTypes.string,
    popularity: PropTypes.number,
  }),
};

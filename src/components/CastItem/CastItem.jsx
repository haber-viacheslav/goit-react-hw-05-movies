import { urlGenerator } from 'components/helpers/urlGenerator';
import {
  CastStyledItem,
  CastImg,
  CastContentWrp,
  CastActor,
  CastCharacter,
  CastDescrSpan,
} from './CastItem.styled';

import PropTypes from 'prop-types';
export const CastItem = ({
  cast: { name, character, known_for_department, profile_path, popularity },
}) => {
  return (
    <CastStyledItem>
      <CastImg src={urlGenerator(profile_path)} alt={name} />

      <CastContentWrp>
        <CastActor>{name}</CastActor>
        <CastCharacter>
          Character: <CastDescrSpan>{character || 'No name'}</CastDescrSpan>
        </CastCharacter>
        <CastCharacter>
          Department:{' '}
          <CastDescrSpan>{known_for_department || '-'}</CastDescrSpan>
        </CastCharacter>
        <CastCharacter>
          Popularity:{' '}
          <CastDescrSpan>{popularity.toFixed(1) || '-'}</CastDescrSpan>
        </CastCharacter>
      </CastContentWrp>
    </CastStyledItem>
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

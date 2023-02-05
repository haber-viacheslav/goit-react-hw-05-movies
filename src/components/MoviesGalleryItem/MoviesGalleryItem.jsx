import PropTypes from 'prop-types';
import { StyledLink } from './MoviesGalleryItem.styled';
import {
  MoviesGalleryItemWrp,
  MoviesGalleryImageWrp,
  MoviesGalleryImg,
  MoviesGalleryContentWrp,
  MoviesGalleryTitle,
  MoviesGalleryDate,
  MoviesGalleryWrp,
} from './MoviesGalleryItem.styled';
import { urlGenerator } from 'components/helpers/urlGenerator';
import { useLocation } from 'react-router-dom';

export const MoviesGalleryItem = ({
  movie: { title, name, poster_path, release_date, id },
}) => {
  const location = useLocation();
  return (
    <MoviesGalleryItemWrp>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <MoviesGalleryImageWrp>
          <MoviesGalleryImg
            src={urlGenerator(poster_path)}
            alt={title || name}
          />
        </MoviesGalleryImageWrp>
        <MoviesGalleryContentWrp>
          <MoviesGalleryTitle>{title || name}</MoviesGalleryTitle>
          <MoviesGalleryDate>
            Release date:
            <MoviesGalleryWrp> {release_date || 'not found'}</MoviesGalleryWrp>
          </MoviesGalleryDate>
        </MoviesGalleryContentWrp>
      </StyledLink>
    </MoviesGalleryItemWrp>
  );
};

MoviesGalleryItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
  }),
};

import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { MoviesGalleryList } from './MoviesGallery.styled';
import PropTypes from 'prop-types';

export const MoviesGallery = ({ movies }) => {
  return (
    <MoviesGalleryList>
      {movies.map(movie => (
        <MoviesGalleryItem key={movie.id} movie={movie} />
      ))}
    </MoviesGalleryList>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

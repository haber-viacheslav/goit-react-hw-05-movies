import { urlGenerator } from 'components/helpers/urlGenerator';
import {
  MovieDataWrp,
  MovieImageWrp,
  MovieImage,
  MovieContentWrp,
  MovieTitle,
  MovieDescr,
  MovieDescrSpan,
} from './MovieData.styled';
import PropTypes from 'prop-types';

export const MovieData = ({
  data: { title, name, poster_path, overview, genres, budget, vote_average },
}) => {
  return (
    <MovieDataWrp>
      <MovieImageWrp>
        <MovieImage src={urlGenerator(poster_path)} alt={title || name} />
      </MovieImageWrp>
      <MovieContentWrp>
        <MovieTitle>{title || name}</MovieTitle>
        <MovieDescr>
          Raiting:{' '}
          <MovieDescrSpan>{(vote_average * 10).toFixed(1)}%</MovieDescrSpan>
        </MovieDescr>
        <MovieDescr>
          Genres:{' '}
          <MovieDescrSpan>
            {genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </MovieDescrSpan>
        </MovieDescr>
        <MovieDescr>
          Overview: <MovieDescrSpan>{overview}</MovieDescrSpan>
        </MovieDescr>
        <MovieDescr>
          Budget: <MovieDescrSpan>{budget}</MovieDescrSpan>
        </MovieDescr>
      </MovieContentWrp>
    </MovieDataWrp>
  );
};

MovieData.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    budget: PropTypes.number,
    vote_average: PropTypes.number,
  }),
};

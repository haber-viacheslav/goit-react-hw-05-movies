import { urlGenerator } from 'components/helpers/urlGenerator';
import { MovieDataWrp } from './MovieData.styled';
export const MovieData = ({ data }) => {
  const {
    title,
    name,
    backdrop_path,
    poster_path,
    overview,
    genres,
    budget,
    vote_average,
  } = data;
  return (
    <MovieDataWrp poster={urlGenerator(backdrop_path)}>
      <img src={urlGenerator(poster_path)} alt={title || name} />
      <h3>{title || name}</h3>
      <p>Raiting: {(vote_average * 10).toFixed(1)}%</p>
      <p>
        Genres:{' '}
        {genres
          .map(genre => {
            return genre.name;
          })
          .join(', ')}
      </p>
      <p>Overview: {overview}</p>
      <p>Budget: {budget}</p>
    </MovieDataWrp>
  );
};

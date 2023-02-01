import Searchbar from './Searchbar';
import MoviesGallery from './MoviesGallery';
// import Button from './Button';
// import PropTypes from 'prop-types';
import Loader from './Loader';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Container, Header, MainNav, StyledLink } from './App.styled';
import {
  fetchTrandingMovies,
  // fetchSearchMovies,
  // fetchMovieDetails,
  // fetchMovieReviews,
  // fetchMovieCredits
} from './Api/FetchApi';
import { useState, useEffect } from 'react';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // const handleOnSearch = newSearchQuery => {
  //   if (newSearchQuery === '' || newSearchQuery === searchQuery) {
  //     return;
  //   }
  //   setMovies([]);
  //   setSearchQuery(newSearchQuery);
  //   setPage(1);
  // };

  // const handleOnLoad = () => {
  //   setPage(prevPage => prevPage + 1);
  // };
  useEffect(() => {
    async function fetchMovies(page) {
      try {
        setIsLoading(true);
        const data = await fetchTrandingMovies(page);
        console.log(data.results);
        setMovies([...data.results]);
        return data.results;
      } catch (error) {
        setMovies([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [page]);

  return (
    <Container>
      <Header>
        <MainNav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </MainNav>
      </Header>

      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Searchbar onSubmit={handleOnSearch} />
      <MoviesGallery movies={movies} /> */}
      {/* {!!movies.length && page <= totalImages && (
        <Button onClick={handleOnLoad} />
      )} */}
      {isLoading && <Loader />}
    </Container>
  );
};

// App.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//       totalImages: PropTypes.number.isRequired,
//     }).isRequired
//   ),
//   searchQuery: PropTypes.string,
//   page: PropTypes.number,
// };

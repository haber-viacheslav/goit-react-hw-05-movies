import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'components/Api/FetchApi';
import { Loader } from 'components/Loader/Loader';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Button } from 'components/Button/Button';
import { uniqueBy } from 'components/helpers/uniqueBy';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovieBySearch = async (query, page) => {
      try {
        setIsLoading(true);
        const data = await fetchSearchMovies(query, page);
        setTotalPages(data.total_pages);
        setMovies(prevMovies => {
          return page === 1 ? data.results : [...prevMovies, ...data.results];
        });
        setMovies(prevMovies => uniqueBy(prevMovies, 'id'));

        return data;
      } catch (error) {
        setMovies([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!searchQuery) {
      return;
    }
    getMovieBySearch(searchQuery, page);
  }, [searchQuery, page]);

  useEffect(() => {
    const getMovieBySearch = async (query, page) => {
      try {
        if (!movieName) {
          return;
        }
        setIsLoading(true);
        const data = await fetchSearchMovies(query, page);
        setTotalPages(data.total_pages);
        setMovies(prevMovies => {
          return page === 1 ? data.results : [...prevMovies, ...data.results];
        });
        setMovies(prevMovies => uniqueBy(prevMovies, 'id'));

        return data;
      } catch (error) {
        setMovies([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieBySearch(movieName, page);
  }, [movieName, page]);

  const handleOnSearch = query => {
    if (query === '' || query === searchQuery) {
      return;
    }
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setMovies([]);
    setSearchQuery(query);
    setPage(1);
  };

  const handleOnLoad = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <main>
      <Searchbar movieName={movieName} onSubmit={handleOnSearch} />
      <Section>
        <MoviesGallery movies={movies} />
      </Section>

      {isLoading && <Loader />}
      {!!movies.length && page < totalPages && (
        <Button onClick={handleOnLoad} />
      )}
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  isLoading: PropTypes.bool,
  totalPages: PropTypes.number,
};

export default Movies;

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';
import { fetchTrandingMovies } from 'components/Api/FetchApi';
import { Loader } from 'components/Loader/Loader';
import { notify } from 'components/Notification/Notification';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnLoad = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    async function fetchMovies(page) {
      try {
        setIsLoading(true);
        const data = await fetchTrandingMovies(page);
        setMovies(prevMovies => {
          return page === 1 ? data.results : [...prevMovies, ...data.results];
        });
        if (data.results) {
          return () => notify();
        }
        return data.results;
      } catch (error) {
        setMovies([]);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies(page);
  }, [page]);
  return (
    <main>
      <Section title="Trending">
        {!!movies.length && <MoviesGallery movies={movies} />}
      </Section>

      {!!movies.length && page <= 100 && <Button onClick={handleOnLoad} />}
      {isLoading && <Loader />}
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  page: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default Home;
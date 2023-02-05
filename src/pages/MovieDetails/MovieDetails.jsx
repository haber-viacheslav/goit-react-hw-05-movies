import {
  useParams,
  useLocation,
  NavLink,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from 'components/Api/FetchApi';
import { useEffect, useState } from 'react';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieData } from 'components/MovieData/MovieData';
import { BackButton } from 'components/BackButton/BackButton';
import { Section } from 'components/Section/Section';
import { Suspense } from 'react';
const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backBtnLink = location.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoading(true);
    const getMovieById = async id => {
      try {
        const data = await fetchMovieDetails(id);
        setMovieDetail(data);
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById(id);
  }, [id]);

  const handleGoBack = () => {
    navigate(backBtnLink);
  };
  return (
    <Section>
      <Container>
        <BackButton onClick={handleGoBack} />
        {movieDetail && <MovieData data={movieDetail} />}
        <ul>
          <li>
            <NavLink to="cast" state={{ from: location.state.from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: location.state.from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>

      {isLoading && <Loader />}
    </Section>
  );
};

export default MovieDetails;

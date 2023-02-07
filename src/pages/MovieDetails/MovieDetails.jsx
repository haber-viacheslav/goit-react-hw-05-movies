import { useParams, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from 'components/Api/FetchApi';
import { useEffect, useState } from 'react';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieData } from 'components/MovieData/MovieData';
import { BackButton } from 'components/BackButton/BackButton';
import { SectionDetails } from 'components/MovieData/MovieData.styled';
import { Suspense } from 'react';
import { urlGenerator } from 'components/helpers/urlGenerator';
import { LinkList, LinkItem } from 'components/MovieData/MovieData.styled';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backBtnLink = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const getMovieById = async id => {
      try {
        const data = await fetchMovieDetails(id, {
          signal: controller.signal,
        });
        setMovieDetail(data);
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById(id);
    return () => controller.abort();
  }, [id]);

  const handleGoBack = () => {
    navigate(backBtnLink);
  };

  console.log('movieDetail', movieDetail);
  if (movieDetail) {
    return (
      <>
        <SectionDetails
          poster={
            urlGenerator(movieDetail.backdrop_path) ||
            'https://placeholder.pics/svg/1280x600/FBFF00-0A09FF/FF0000-FF0909/Poster%20not%20found'
          }
        >
          <Container>
            <BackButton onClick={handleGoBack} />
            {movieDetail && <MovieData data={movieDetail} />}
          </Container>

          {isLoading && <Loader />}
        </SectionDetails>
        <Container>
          <LinkList>
            <li>
              <LinkItem to="cast" state={{ from: location.state.from }}>
                Cast
              </LinkItem>
            </li>
            <li>
              <LinkItem to="reviews" state={{ from: location.state.from }}>
                Reviews
              </LinkItem>
            </li>
          </LinkList>
        </Container>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};
MovieDetails.propTypes = {
  movieDetail: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default MovieDetails;

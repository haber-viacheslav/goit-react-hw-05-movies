import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'components/Api/FetchApi';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReview, setMovieReview] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const getMovieReview = async id => {
      try {
        const data = await fetchMovieReviews(id, {
          signal: controller.signal,
        });
        setMovieReview(data.results);
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReview(id);
    return () => controller.abort();
  }, [id]);

  return (
    <Section title={'Reviews'}>
      <ReviewsList reviews={movieReview} />
      {isLoading && <Loader />}
      {!!movieReview.length || <div>Not found</div>}
    </Section>
  );
};

Reviews.propTypes = {
  isLoading: PropTypes.bool,
  movieReview: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
      }),
      content: PropTypes.string,
    })
  ),
};

export default Reviews;

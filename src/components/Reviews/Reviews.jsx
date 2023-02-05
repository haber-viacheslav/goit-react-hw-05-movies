import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'components/Api/FetchApi';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReview, setMovieReview] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getMovieReview = async id => {
      try {
        const data = await fetchMovieReviews(id);
        setMovieReview(data.results);
        console.log('data review', data.results);

        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReview(id);
  }, [id]);

  return (
    <div>
      <h2>Review</h2>
      <ReviewsList reviews={movieReview} />
      {isLoading && <Loader />}
      {!!movieReview.length || <div>Not found</div>}
    </div>
  );
};

export default Reviews;

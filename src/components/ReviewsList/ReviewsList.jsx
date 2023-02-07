import PropTypes from 'prop-types';
import { ReviewItem } from 'components/ReviewsItem/ReviewsItem';
import { ReviewStyledList } from './ReviewsLIst.style';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewStyledList>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ReviewStyledList>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

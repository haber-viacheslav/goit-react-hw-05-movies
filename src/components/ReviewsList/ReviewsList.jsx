import { ReviewItem } from 'components/ReviewsItem/ReviewsItem';
export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

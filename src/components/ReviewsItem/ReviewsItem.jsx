import PropTypes from 'prop-types';
import { urlGenerator } from 'components/helpers/urlGenerator';
import {
  ReviewStyledItem,
  ReviewImg,
  ReviewContentWrp,
  ReviewTitle,
  ReviewDescr,
} from './ReviewsItem.styled';

export const ReviewItem = ({
  review: {
    author,
    author_details: { avatar_path },
    content,
  },
}) => {
  return (
    <ReviewStyledItem>
      <ReviewImg src={urlGenerator(avatar_path)} alt={author} />
      <ReviewContentWrp>
        <ReviewTitle>{author}</ReviewTitle>
        <ReviewDescr>{content}</ReviewDescr>
      </ReviewContentWrp>
    </ReviewStyledItem>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string,
    }),
    content: PropTypes.string,
  }),
};

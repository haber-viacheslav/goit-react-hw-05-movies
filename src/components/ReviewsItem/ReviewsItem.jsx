import { urlGenerator } from 'components/helpers/urlGenerator';
export const ReviewItem = ({
  review: {
    author,
    author_details: { avatar_path },
    content,
  },
}) => {
  console.log('avatar_path', avatar_path);

  return (
    <li>
      <img src={urlGenerator(avatar_path)} alt={author} />
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  );
};

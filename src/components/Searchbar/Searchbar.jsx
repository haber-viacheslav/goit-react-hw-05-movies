import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.search.value.trim().toLowerCase());
    e.currentTarget.reset();
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn type="submit">
        <FcSearch size="30" />
        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
      </SearchFormBtn>
      <SearchFormInput
        name="search"
        type="text"
        autoComplete="off"
        placeholder="Search movies"
      />
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

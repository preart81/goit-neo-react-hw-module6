import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ searchText, handleSearch }) => {
  const searchTextId = useId();

  const handleChange = event => {
    handleSearch(event.target.value);
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchTextId}>Find contacts by name or number</label>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
        id={searchTextId}
      />
    </div>
  );
};

export default SearchBox;

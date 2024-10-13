import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTextId = useId();
  const searchText = useSelector(selectNameFilter);

  const handleChange = event => {
    // handleSearch(event.target.value);
    dispatch(changeFilter(event.target.value));
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

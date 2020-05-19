import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Radio/Radio';
import Button from '../Button/Button';
import CategoriesList from '../CategoriesList/CategoriesList';
import SearchInput from '../SearchInput/SearchInput';

const SearchJokeForm = ({
  setInputText,
  options,
  setType,
  getJoke,
  setCategory,
  chosenOption,
  chosenCategory,
  categories,
}) => {
  return (
    <div>
      <Radio
        name="search-type"
        value="Random"
        checked={chosenOption === options.random}
        option={options.random}
        handleChange={setType}
      />
      <Radio
        name="search-type"
        value="From categories"
        checked={chosenOption === options.categories}
        option={options.categories}
        handleChange={setType}
      />
      {chosenOption === options.categories ? (
        <CategoriesList
          categories={categories}
          setCategory={setCategory}
          chosenCategory={chosenCategory}
        />
      ) : null}
      <Radio
        name="search-type"
        value="Search"
        checked={chosenOption === options.search}
        option={options.search}
        handleChange={setType}
      />
      {chosenOption === options.search ? (
        <SearchInput placeholder="Free text search..." onChange={setInputText} />
      ) : null}
      <Button text="Get a joke" onClick={getJoke} />
    </div>
  );
};

SearchJokeForm.propTypes = {
  options: PropTypes.shape({
    random: PropTypes.string,
    categories: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  setType: PropTypes.func.isRequired,
  getJoke: PropTypes.func.isRequired,
  chosenOption: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  chosenCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchJokeForm;

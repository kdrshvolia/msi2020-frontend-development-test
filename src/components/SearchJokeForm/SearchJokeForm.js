import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Radio/Radio';
import Button from '../Button/Button';
import CategoriesList from '../CategoriesList/CategoriesList';
import { withCategoriesList } from '../../hocs/withCategoriesList/withCategoriesList';
import { withSearchInput } from '../../hocs/withSearchInput/withSearchInput';
import SearchInput from '../SearchInput/SearchInput';

const SearchJokeForm = ({
  options,
  setType,
  getJoke,
  setCategory,
  chosenOption,
  chosenCategory,
  joke,
}) => {
  const EnhancedCategoriesList = withCategoriesList(CategoriesList);
  const EnhancedSearchInput = withSearchInput(SearchInput);
  return (
    <div>
      <Radio name="search-type" value="Random" option={options.random} handleChange={setType} />
      <Radio
        name="search-type"
        value="From categories"
        option={options.categories}
        handleChange={setType}
      />
      {chosenOption === options.categories ? (
        <EnhancedCategoriesList setCategory={setCategory} />
      ) : null}
      <Radio name="search-type" value="Search" option={options.search} handleChange={setType} />
      {chosenOption === options.search ? (
        <EnhancedSearchInput placeholder="Search sth"/>
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
};

export default SearchJokeForm;

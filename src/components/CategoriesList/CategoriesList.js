import React from 'react';
import PropTypes from 'prop-types';
import { CategoriesListWrapper } from './StyledComponents';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesList = ({ categories, setCategory, chosenCategory }) => {
  const handleClick = (id) => {
    setCategory(id);
  };

  return (
    <CategoriesListWrapper>
      {categories.length === 0
        ? null
        : categories.map((category) => (
            <CategoryItem
              onClick={handleClick}
              isChosen={category === chosenCategory}
              id={category}
            >
              {category.toUpperCase()}
            </CategoryItem>
          ))}
    </CategoriesListWrapper>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCategory: PropTypes.func.isRequired,
  chosenCategory: PropTypes.string.isRequired,
};

export default CategoriesList;

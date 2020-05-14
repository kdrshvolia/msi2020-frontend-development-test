import React from 'react';
import PropTypes from 'prop-types';
import { CategoriesListWrapper, CategoryItem } from './StyledComponents';

const CategoriesList = ({ categories, setCategory }) => {
  return (
    <CategoriesListWrapper>
      {categories.length === 0
        ? null
        : categories.map((category) => (
            <CategoryItem onClick={setCategory}>{category.toUpperCase()}</CategoryItem>
          ))}
    </CategoriesListWrapper>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoriesList;

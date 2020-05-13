import React from 'react';
import PropTypes from 'prop-types';

const CategoriesList = ({ categories, setCategory }) => {

  return (
    <div>
      {categories.length === 0
        ? null
        : categories.map((category) => <div onClick={setCategory}>{category}</div>)}
    </div>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoriesList;

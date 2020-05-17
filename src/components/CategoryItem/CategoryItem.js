import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Item } from './StyledComponents';

const CategoryItem = ({ id, onClick, children, isChosen }) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <Item isChosen={isChosen} onClick={handleClick}>
      {children}
    </Item>
  );
};

CategoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default CategoryItem;

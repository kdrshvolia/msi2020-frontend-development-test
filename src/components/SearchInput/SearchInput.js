import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, InputWrapper } from './StyledComponents';

const SearchInput = ({ placeholder, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper>
      <CustomInput type="text" placeholder={placeholder} onChange={handleChange} />
    </InputWrapper>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;

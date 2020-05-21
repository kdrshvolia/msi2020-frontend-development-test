import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, InputWrapper } from './StyledComponents';

const SearchInput = ({ placeholder, onChange, inputText }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper>
      <CustomInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={inputText}
      />
    </InputWrapper>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default SearchInput;

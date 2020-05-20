import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { CustomRadio, RadioWrapper } from './StyledComponents';

const Radio = ({ name, value, option, checked, handleChange }) => {
  const onChange = useCallback(() => {
    handleChange(option);
  }, [option]);

  return (
    <RadioWrapper>
      <CustomRadio type="radio" name={name} id={value} checked={checked} onChange={onChange} />{' '}
      <label htmlFor={value}>{value}</label>
    </RadioWrapper>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Radio;

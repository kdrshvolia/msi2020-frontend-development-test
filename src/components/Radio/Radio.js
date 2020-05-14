import React from 'react';import PropTypes from 'prop-types';const Radio = ({ name, value, option, checked, handleChange }) => {  const onChange = () => {    handleChange(option);  };  return (    <>      <input type="radio" name={name} checked={checked} onChange={onChange} />      {value}    </>  );};Radio.propTypes = {  name: PropTypes.string.isRequired,  value: PropTypes.string.isRequired,  option: PropTypes.string.isRequired,  handleChange: PropTypes.func.isRequired,};export default Radio;
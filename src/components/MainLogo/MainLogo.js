import React from 'react';import PropTypes from 'prop-types';const MainLogo = ({ text }) => {  return <div>{text}</div>;};MainLogo.propTypes = {  text: PropTypes.string.isRequired,};export default MainLogo;
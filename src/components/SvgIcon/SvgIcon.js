import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ fill, width, height, viewBox = '0 0 20 17', path, onClick }) => (
  <svg onClick={onClick} width={width} height={height} viewBox={viewBox}>
    <path d={path} fill={fill} />
  </svg>
);

SvgIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SvgIcon;

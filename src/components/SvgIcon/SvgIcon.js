import React from 'react';

const SvgIcon = ({ fill, width, height, viewBox = '0 0 20 17', path, onClick }) => (
  <svg onClick={onClick} width={width} height={height} viewBox={viewBox}>
    <path d={path} fill={fill} />
  </svg>
);

export default SvgIcon;

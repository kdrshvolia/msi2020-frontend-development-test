import styled, { css } from 'styled-components';

const RadioWrapper = styled.div`
  padding: 0 10px;
`;

const CustomRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
  }
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #ababab;
    box-sizing: border-box;
    border-radius: 100%;
    background: #fff;
  }

  &:checked + label:before {
    border: 2px solid #333333;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 100%;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: #333333;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export { CustomRadio, RadioWrapper };

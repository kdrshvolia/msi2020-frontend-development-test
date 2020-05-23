import styled, { css } from 'styled-components';

const Item = styled.div`
  background: ${(props) => (props.isChosen ? '#f8f8f8' : '#FFFFFF')};
  color: ${(props) => (props.isChosen ? '#333333' : '#ababab')};
  display: flex;
  height: 28px;
  cursor: pointer;
  border: 2px solid #f8f8f8;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 6px 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  transition: 0.7s;
  margin: 5px 0 0;
`;

export { Item };

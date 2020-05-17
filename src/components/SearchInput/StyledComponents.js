import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  max-width: 680px;
`;
const CustomInput = styled.input`
  width: 100%;
  margin: 10px 0;
  height: 42px;
  border: 2px solid #333333;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ababab;
  padding: 10px 15px;
`;

export { CustomInput, InputWrapper };

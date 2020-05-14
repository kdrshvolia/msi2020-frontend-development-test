import styled, { css } from 'styled-components';

const JokeWrapper = styled.div`
  width: 680px;
  height: 225px;
  background: #f8f8f8;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

const JokeText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #333333;
  width: 540px;
`;

const UpdateInfo = styled.div`
  font-size: 10px;
  line-height: 14px;
  /* identical to box height, or 140% */
  width: 128px;
  color: #ababab;
`;

export { JokeWrapper, JokeText, UpdateInfo };

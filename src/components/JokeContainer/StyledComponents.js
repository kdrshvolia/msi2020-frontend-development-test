import styled, { css } from 'styled-components';

const JokeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  padding: 6px 20px;
  box-sizing: border-box;
  width: 107px;
  background: #ffffff;
  border-radius: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #333333;
  text-align: center;
`;

const JokeWrapper = styled.div`
  display: flex;
  width: 680px;
  background: #f8f8f8;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  align-items: top;
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

export { JokeWrapper, JokeText, UpdateInfo, Category, JokeInfo };

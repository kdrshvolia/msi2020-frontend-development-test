import styled, { css } from 'styled-components';

const JokeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FavoritedIcon = styled.div`
  display: flex;
  & > svg {
    margin-left: auto;
  }
  padding: 10px 0;
`;

const Category = styled.div`
  padding: 6px 20px;
  box-sizing: border-box;
  width: 107px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`;

const Joke = styled.div`
  display: flex;
`;

const JokeWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.isInFavoritedList ? '400px' : '680px')};
  background: ${(props) => (props.isInFavoritedList ? '#ffffff' : '#f8f8f8')};
  border-radius: 20px;
  box-sizing: border-box;
  padding: ${(props) => (props.isInFavoritedList ? '20px' : '45px')};
  font-weight: normal;
  align-items: top;
  margin: 10px 0;
  box-shadow: ${(props) => (props.isInFavoritedList ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const JokeText = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
`;

const UpdateInfo = styled.div`
  font-size: 10px;
  line-height: 14px;
  width: 128px;
  color: #ababab;
`;

const Link = styled.div`
  color: #8ea7ff;
  & > a {
    color: #8ea7ff;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 20px 0 0;
`;

export { JokeWrapper, JokeText, UpdateInfo, Category, JokeInfo, Link, Logo, Joke, FavoritedIcon };

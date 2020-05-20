import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimeDifference } from '../../util';
import {
  JokeText,
  JokeWrapper,
  UpdateInfo,
  Category,
  JokeInfo,
  Link,
  Logo,
  Joke,
  FavoritedIcon,
} from './StyledComponents';
import SvgIcon from '../SvgIcon/SvgIcon';
import StaticLogo from '../../images/static-logo.svg';
import LinkLogo from '../../images/link.svg';
import StaticLogoFav from '../../images/static-logo-fav.svg';

const JokeContainer = ({ joke, toggleFav, isFavorited, isInFavoritedList }) => {
  const path = isFavorited
    ? 'M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z'
    : 'M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z';
  const handleClick = () => {
    toggleFav(joke.id);
  };
  return (
    <JokeWrapper isInFavoritedList={isInFavoritedList}>
      <FavoritedIcon>
        <SvgIcon onClick={handleClick} width="20" height="17" path={path} fill="#ff6767" />
      </FavoritedIcon>
      <Joke>
        <Logo>
          <img src={isInFavoritedList ? StaticLogoFav : StaticLogo} alt="" />
        </Logo>
        <div>
          <Link>
            ID:&nbsp;
            <a href={joke.url} target="_blank" rel="noopener noreferrer">
              {joke.id}
            </a>
            &nbsp;
            <img src={LinkLogo} alt="" />
          </Link>
          <JokeText className="joke-text">{joke.value}</JokeText>
        </div>
      </Joke>
      <JokeInfo>
        <UpdateInfo className="last-update">
          Last update: {calculateTimeDifference(Date.parse(joke.updated_at), new Date())} hours ago.
        </UpdateInfo>
        {joke.categories.length === 0 ? null : (
          <Category className="category">{joke.categories} </Category>
        )}
      </JokeInfo>
    </JokeWrapper>
  );
};

JokeContainer.propTypes = {
  toggleFav: PropTypes.func.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  joke: PropTypes.shape({
    categories: PropTypes.array,
    created_at: PropTypes.string.isRequired,
    icon_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  isInFavoritedList: PropTypes.bool.isRequired,
};

export default JokeContainer;

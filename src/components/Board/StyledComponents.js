import styled, { css } from 'styled-components';

const BoardWrapper = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  flex: 2;
  overflow-y: auto;
  min-height: 100vh;
`;

const Favorites = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  background: #f8f8f8;
  box-sizing: border-box;
  padding: 40px;
  @media (max-width: 992px) {
    display: none;
  }

  &:last-of-type {
    display: none;
    background: #ffffff;
    @media (max-width: 992px) {
      background: ${(props) => (props.isSideBarOpened ? '#f8f8f8' : '#ffffff')};
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transition: all 0.5s ease;
    }
  }
`;

const Search = styled.div`
  @media only screen and (min-width: 1200px) {
    flex-basis: 60%;
  }
  @media only screen and (max-width: 1200px) {
    flex-basis: 100%;
  }
  padding: 0 7%;
`;

const FavoritesBtn = styled.div`
  display: none;
  @media (max-width: 1040px) {
    display: block;
  }
`;

const FavSection = styled.aside`
  @media (max-width: 992px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
`;

const FavoritesList = styled.div`
  @media (max-width: 1200px) {
    display: ${(props) => (props.isSideBarOpened ? 'flex' : 'none')};
    z-index: 2;
  }
`;

const SideBarOverlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  display: ${(props) => (props.isSideBarOpened ? 'block' : 'none')};
   @media (min-width: 992px) {
    display: none;
   }
  }
`;
export { BoardWrapper, Favorites, Search, FavoritesList, FavoritesBtn, SideBarOverlay };
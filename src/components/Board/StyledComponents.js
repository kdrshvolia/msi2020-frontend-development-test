import styled, { css } from 'styled-components';const BoardWrapper = styled.div`  display: flex;  max-width: 100%;`;const Favorites = styled.div`  display: flex;  flex-direction: column;  flex-basis: 40%;  background: #f8f8f8;  box-sizing: border-box;  padding: 40px;  @media (max-width: 1040px) {    display: none;  }`;const Search = styled.div`  @media only screen and (min-width: 1200px) {    flex-basis: 60%;  }  @media only screen and (max-width: 768px) {    flex-basis: 100%;  }  padding: 0 7%;`;export { BoardWrapper, Favorites, Search };
import styled from 'styled-components';

const SideBarHeader = styled.div`
  display: flex;
  position: absolute;
  right: 5%;
  z-index: 20;
  top: 40px;
  @media (min-width: 992px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

export { SideBarHeader, HamburgerIcon };

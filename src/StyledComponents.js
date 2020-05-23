import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #333333;
    height: 100%;
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    overflow-x: hidden;
  }
`;

export { GlobalStyle };

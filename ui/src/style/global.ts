import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * { box-sizing: border-box; }
  body {
    background: white;
    border: 30px solid black;
    padding: 30px;
  }
`;

export default GlobalStyle;

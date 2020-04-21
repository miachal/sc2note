import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * { box-sizing: border-box; }
  body {
    background: white;
    border: 30px solid #e0e0e0;
    padding: 30px;
  }
`;

export default GlobalStyle;

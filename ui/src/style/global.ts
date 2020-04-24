import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@600&display=swap');

  * { box-sizing: border-box; }
  body {
    background: white;
    border: 30px solid #e0e0e0;
    padding: 30px;
  }
`;

export default GlobalStyle;

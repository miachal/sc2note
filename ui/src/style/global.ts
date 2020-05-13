import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@600&display=swap');

  * { box-sizing: border-box; }
  html {
    background: #e0e0e0;
  }
  body {
    background: white;
    padding: 30px;
    width: 1400px;
    margin: 30px auto;
    height: 90vh;
    overflow-y: hidden;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import { $background, $charcoal, $pussy } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

import CanelaMed from 'fonts/canela/canela-med.woff2';

import AndesReg from 'fonts/andes/andes-reg.woff2';
import AndesMed from 'fonts/andes/andes-med.woff2';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 16px;
    color: ${$charcoal};
    caret-color: ${$pussy};
    background: ${$background};
    font-family: 'Andes Reg';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    ${disableHighlight}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "Canela Med";
    src: url(${CanelaMed});
  }

  @font-face {
    font-family: "Andes Reg";
    src: url(${AndesReg});
  }

  @font-face {
    font-family: "Andes Med";
    src: url(${AndesMed});
  }
`;

export default GlobalStyles;

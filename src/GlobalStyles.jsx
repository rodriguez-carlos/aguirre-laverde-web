import { css } from '@emotion/react';
import regular from './fonts/AlteHaasGroteskRegular.ttf';
import bold from './fonts/AlteHaasGroteskBold.ttf';

export default css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  p {
    text-align: justify;
    line-height: 1.5;
  }

  @font-face {
    font-family: "Regular";
    src: url(${regular}) format("truetype");
  }
  @font-face {
    font-family: "Bold";
    src: url(${bold}) format("truetype");
  }

  * {
    z-index: 1;
    font-family: "Regular";
  }
`;
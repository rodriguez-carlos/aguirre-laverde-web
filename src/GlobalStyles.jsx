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
    line-height: 1.5;
    font-size: 16px;

    @media (min-width: 960px) {
      text-align: justify;
    }
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
    z-index: 0;
    font-family: "Regular";
  }
`;
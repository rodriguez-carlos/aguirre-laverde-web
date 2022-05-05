import { css, keyframes } from '@emotion/react';
import regular from './fonts/AlteHaasGroteskRegular.ttf';
import bold from './fonts/AlteHaasGroteskBold.ttf';

const GlobalStyles = css`
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

const SlideDown = keyframes`
  0% {
    height: 0%;
  }

  100% {
    height: 100%;
  }
`;

export default GlobalStyles;
export { SlideDown };
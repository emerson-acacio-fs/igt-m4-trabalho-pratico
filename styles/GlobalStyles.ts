import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      #root {
        height: 100vh;
        width: 100vw;
      }
    }
  `}
`

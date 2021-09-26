import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  ul {
    margin: 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .liItem {
    max-width: 50%;
    font-size: 1rem;
    text-decoration: none;
    margin: 1em;
  }

`;

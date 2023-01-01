import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    outline: 0;

    box-sizing: border-box;

    font-family: "Plus Jakarta Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    transition: 100ms all ease;
  }

  #root, body {
    width: 100%;
    min-height: 100vh;
    height: 100%;

    display: flex;

    overflow: hidden;
  }
`
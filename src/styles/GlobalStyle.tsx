import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
  box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
  }

  h1, h2 {
    margin-top: 0;
  }

  ul, li {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

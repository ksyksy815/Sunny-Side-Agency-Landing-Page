import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3 {
    font-family: 'Fraunces', serif;
  }

  button {
    font-family: 'Fraunces', serif;
  }
`

/*
600
font-family: 'Barlow', sans-serif;

700, 900
font-family: 'Fraunces', serif;

*/
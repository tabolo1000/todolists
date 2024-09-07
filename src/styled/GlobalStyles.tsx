import { createGlobalStyle } from "styled-components";
import fone from '../assets/image/image.webp'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
  margin: 0;
  font-family:"Poppins" ,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: url(${fone});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover ;
    object-fit: cover;
    min-height: 100vh;
}



code {
  font-family: "Poppins", source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`


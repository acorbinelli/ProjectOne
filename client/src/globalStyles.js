import { createGlobalStyle } from "styled-components"
import { Colors } from "./constants/colors"

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 500;
    color: black;
}
html{
    font-size: 10px;
}

button {
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    text-decoration: none;
    border: none;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
}

.button__primary{
    color: ${Colors.canary};
    transition: 0.3s background-color;
    :hover {
      background: ${Colors.canary};
      color: ${Colors.mediumslateblue};
      cursor: pointer;
    }
}
`

export default GlobalStyles

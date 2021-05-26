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


section{
    width: 100vw;
    padding: 10rem 10rem;
    display: flex;
    justify-content: center;
}

nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    padding: 0.3rem 1rem;    
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
    border-radius: 1rem;
    :hover {
      background: ${Colors.canary};
      color: ${Colors.mediumslateblue};
      cursor: pointer;
    }
    
}
.button__secondary{    
    transition: 0.3s background-color;    
    i,h2{
        color: ${Colors.fuchsia};
        font-size: 2rem;
    }
    :hover {
      background: ${Colors.mediumslateblue};
      height: 100%;
      cursor: pointer;
      i,h2{
        color: ${Colors.canary};
      }
      i{
          font-size: 4rem;
      }
      h2{
          font-weight: 700;
      }
    }    
}

h1{
    font-size: 4rem;
    letter-spacing: 0.3rem;
    font-weight: 600;
}
`

export default GlobalStyles

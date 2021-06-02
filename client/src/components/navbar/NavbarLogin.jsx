import { set } from "mongoose"
import React, { useContext } from "react"
import styled from "styled-components"
import { LanguageContext } from "../../LanguageContext"

const NavbarLoginStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    margin: auto 2rem;
  }
`

const NavbarLogin = () => {
  const [language, setLanguage] = useContext(LanguageContext)

  const changeLanguage = (event) => {
    event.preventDefault()
    language === "en" ? setLanguage("ro") : setLanguage("en")
  }
  return (
    <NavbarLoginStyled>
      <li>
        <button
          href='#'
          value='EN'
          className='button__primary'
          onClick={changeLanguage}
        >
          {language.toUpperCase()}
        </button>
      </li>
      <li>
        <button href='#' value='LogIn' className='button__primary'>
          {language === "ro" ? "Conectare" : "Log In"}
        </button>
      </li>
      <li>
        <button href='#' value='SignUp' className='button__primary'>
          {language === "ro" ? "Inregistrare" : "Sign Up"}
        </button>
      </li>
    </NavbarLoginStyled>
  )
}

export default NavbarLogin

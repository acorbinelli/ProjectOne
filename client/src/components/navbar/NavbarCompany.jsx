import React, { useContext } from "react"
import styled from "styled-components"
import { LanguageContext } from "../../LanguageContext"

const NavbarCompanyStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-right: 25vw;
  li {
    margin: auto 2rem;
  }
`

const NavbarCompany = () => {
  const [language] = useContext(LanguageContext)

  return (
    <NavbarCompanyStyled>
      <li>
        <button href='#' value='Company' className='button__primary'>
          {language === "en" ? "Company" : "Companie"}
        </button>
      </li>
      <li>
        <button href='#' value='Prices' className='button__primary'>
          {language === "en" ? "Prices" : "Preturi"}
        </button>
      </li>
      <li>
        <button href='#' value='Help' className='button__primary'>
          {language === "en" ? "Help" : "Ajutor"}
        </button>
      </li>
    </NavbarCompanyStyled>
  )
}

export default NavbarCompany

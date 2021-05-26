import React from "react"
import styled from "styled-components"

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
  return (
    <NavbarCompanyStyled>
      <li>
        <button href='#' value='Company' className='button__primary'>
          Company
        </button>
      </li>
      <li>
        <button href='#' value='Prices' className='button__primary'>
          Prices
        </button>
      </li>
      <li>
        <button href='#' value='Help' className='button__primary'>
          Help
        </button>
      </li>
    </NavbarCompanyStyled>
  )
}

export default NavbarCompany

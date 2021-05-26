import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"

const CompanyItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  li {
    margin: auto 2rem;
  }
`

const NavbarCompany = () => {
  return (
    <CompanyItems>
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
    </CompanyItems>
  )
}

export default NavbarCompany

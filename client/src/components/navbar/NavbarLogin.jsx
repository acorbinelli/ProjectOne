import React from "react"
import styled from "styled-components"

const NavbarLoginStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    margin: auto 2rem;
  }
`

const NavbarLogin = () => {
  return (
    <NavbarLoginStyled>
      <li>
        <button href='#' value='EN' className='button__primary'>
          EN
        </button>
      </li>
      <li>
        <button href='#' value='LogIn' className='button__primary'>
          Log In
        </button>
      </li>
      <li>
        <button href='#' value='SignUp' className='button__primary'>
          Sign Up
        </button>
      </li>
    </NavbarLoginStyled>
  )
}

export default NavbarLogin

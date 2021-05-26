import React from "react"
import styled from "styled-components"

const LoginItems = styled.ul`
  position: absolute;
  right: 0;
  list-style: none;
  padding: 1rem 2 rem;
  display: flex;
  flex-direction: row;

  li {
    margin: auto 2rem;
  }
`

const NavbarLogin = () => {
  return (
    <LoginItems>
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
    </LoginItems>
  )
}

export default NavbarLogin

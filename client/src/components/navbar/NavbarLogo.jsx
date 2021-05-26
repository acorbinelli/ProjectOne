import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"

const Logo = styled.h1`
  color: ${Colors.white};
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin: 0;
`

const NavbarLogo = () => {
  return <Logo>ProjectOne</Logo>
}

export default NavbarLogo

import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"

const Logo = styled.h1`
  color: ${Colors.canary};
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
`

const NavbarLogo = () => {
  return <Logo>ProjectOne</Logo>
}

export default NavbarLogo

import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"
import NavbarLogo from "./NavbarLogo"
import NavbarItems from "./NavbarItems"

const Wrapper = styled.nav`
  background-color: ${Colors.mediumslateblue};
  height: 5rem;
  display: flex;
  align-items: center;
  position: relative;
`

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarLogo></NavbarLogo>
      <NavbarItems />
    </Wrapper>
  )
}

export default Navbar

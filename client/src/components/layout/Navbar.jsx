import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"
import NavbarLogo from "../navbar/NavbarLogo"
import NavbarItems from "../navbar/NavbarItems"

const Wrapper = styled.nav`
  background-color: ${Colors.mediumslateblue};
  height: 5rem;

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

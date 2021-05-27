import React, { useContext } from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"

import HeroNavButton from "./HeroNavButton"
import { HeroContext } from "./HeroContext"

const HeroNavStyled = styled.nav`
  height: 20%;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.4);
  background-color: ${Colors.fuchsia};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const HeroNav = (props) => {
  const [hero, setHero] = useContext(HeroContext)

  return (
    <HeroNavStyled>
      {hero.map((e) => (
        <HeroNavButton data={e} key={e.id}></HeroNavButton>
      ))}
    </HeroNavStyled>
  )
}

export default HeroNav

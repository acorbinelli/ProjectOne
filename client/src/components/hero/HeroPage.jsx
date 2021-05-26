import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"

import ParentsHero from "../parents/ParentsHero"

const HeroPageStyled = styled.div`
  height: 100%;
  padding: 3rem;
`

const HeroPage = () => {
  return (
    <HeroPageStyled>
      <ParentsHero />
    </HeroPageStyled>
  )
}

export default HeroPage

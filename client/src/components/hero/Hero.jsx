import React from "react"
import Section from "../layout/Section"
import styled from "styled-components"

import HeroNav from "./HeroNav"
import HeroPage from "./HeroPage"

const Wrapper = styled.div`
  background-color: white;
  height: 50rem;
  min-width: 50rem;
  width: 65rem;
  margin-right: 60rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const Hero = () => {
  return (
    <Section imageURL='../../IMG/hero_2.jpg' flexDirection='row'>
      <Wrapper>
        <HeroNav />
        <HeroPage />
      </Wrapper>
    </Section>
  )
}

export default Hero

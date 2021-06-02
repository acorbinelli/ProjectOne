import Section from "../layout/Section"
import styled from "styled-components"
import React from "react"
import HeroNav from "./HeroNav"
import HeroPage from "./HeroPage"

import { HeroProvider } from "./HeroContext"

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
    <HeroProvider>
      <Section imageURL='../../IMG/hero_2.jpg' flexDirection='row'>
        <Wrapper>
          <HeroNav />
          <HeroPage />
        </Wrapper>
      </Section>
    </HeroProvider>
  )
}

export default Hero

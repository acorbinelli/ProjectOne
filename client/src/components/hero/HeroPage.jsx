import React, { useContext, useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { Colors } from "../../constants/colors"
import { HeroContext } from "./HeroContext"
const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const HeroPageStyled = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const HeroPage = () => {
  const [heroContext, setHeroContext] = useContext(HeroContext)

  let storyItem = {}
  heroContext.map((e) => (e.focused ? (storyItem = e) : {}))

  return (
    <HeroPageStyled>
      <h1>{storyItem.story[0].title}</h1>
      <h2>{storyItem.story[0].content}</h2>
      {storyItem.buttons
        ? React.createElement(
            "button",
            { className: "button__special" },
            `${storyItem.buttons}`
          )
        : ""}
    </HeroPageStyled>
  )
}

export default HeroPage

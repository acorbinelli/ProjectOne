import React, { useContext } from "react"
import styled from "styled-components"

import { HeroContext } from "./HeroContext"
import { LanguageContext } from "../../LanguageContext"

const HeroPageStyled = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const HeroPage = () => {
  const [heroContext] = useContext(HeroContext)
  const [language] = useContext(LanguageContext)

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
      <a href='#'>{storyItem.learnMore}</a>
    </HeroPageStyled>
  )
}

export default HeroPage

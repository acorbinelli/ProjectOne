import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"
import { HeroContext } from "./HeroContext"

const HeroPageStyled = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const HeroPage = () => {
  const [hero] = useContext(HeroContext)

  let storyItem = hero.map((e) => (e.focused ? e.story : e.story))
  const [story, setStory] = useState(storyItem)

  const updateStoryItem = () => {
    storyItem = hero.map((e) => (e.focused ? e.story : e.story))
  }

  useEffect(() => {
    setStory(updateStoryItem)
  }, [hero])

  return (
    <HeroPageStyled>
      <h1>{story[0][1].title}</h1>
      <h2>{story[0][1].content}</h2>
      <button className='button__special'>Sign Up</button>
    </HeroPageStyled>
  )
}

export default HeroPage

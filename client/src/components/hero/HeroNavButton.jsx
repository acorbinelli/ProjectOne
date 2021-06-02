import React, { useContext } from "react"
import styled from "styled-components"

import { HeroContext } from "./HeroContext"
import { LanguageContext } from "../../LanguageContext"

const HeroNavButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`

const HeroNavButton = ({ data }) => {
  const [hero, setHero] = useContext(HeroContext)
  const [language] = useContext(LanguageContext)
  const setHeroHandler = () => {
    let heroNew = [...hero]

    heroNew.map((e) =>
      e.id === data.id ? (e.focused = true) : (e.focused = false)
    )
    setHero(heroNew)
  }
  return (
    <HeroNavButtonStyled
      href='#'
      type='button'
      id={data.id}
      onClick={setHeroHandler}
      className={`button__${data.type} button__${data.type}--${
        data.focused ? "focused" : "unfocused"
      }`}
    >
      <i className={data.icon} />
      <span style={{ fontSize: "2rem", color: "white" }}>
        {language === "en" ? data.value.en : data.value.ro}
      </span>
    </HeroNavButtonStyled>
  )
}

export default HeroNavButton

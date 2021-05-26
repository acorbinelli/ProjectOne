import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"

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

const HeroNavButton = ({ value, text, icon, className }) => {
  return (
    <HeroNavButtonStyled href='#' value={value} className={className}>
      <i className={icon} />
      <span style={{ fontSize: "2rem", color: "white" }}>{text}</span>
    </HeroNavButtonStyled>
  )
}

export default HeroNavButton

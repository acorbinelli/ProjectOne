import React from "react"
import styled from "styled-components"
import { Colors } from "../../constants/colors"
import { Icons } from "../../constants/icons"
import HeroNavButton from "./HeroNavButton"

const HeroNavStyled = styled.nav`
  height: 20%;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.4);
  background-color: ${Colors.fuchsia};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const HeroNav = (props) => {
  return (
    <HeroNavStyled>
      <HeroNavButton
        value='Parents'
        text='Parents'
        icon={Icons.users}
        className='button__secondary'
      >
        {props.children}
      </HeroNavButton>
      <HeroNavButton
        value='Educators'
        text='Educators'
        icon={Icons.educator}
        className='button__secondary'
      >
        {props.children}
      </HeroNavButton>
      <HeroNavButton
        value='Business'
        text='Business'
        icon={Icons.briefcase}
        className='button__secondary'
      >
        {props.children}
      </HeroNavButton>
      {/* <button href='#' value='Parents' className='button__primary'>
        <i class='fas fa-user-friends'></i>Parents
      </button>
      <button href='#' value='Educators' className='button__primary'>
        <i class='fas fa-user-friends'></i>Educators
      </button> */}
    </HeroNavStyled>
  )
}

export default HeroNav

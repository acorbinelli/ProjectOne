import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import { HeroContext } from "../hero/HeroContext"

const SectionStyled = styled.section`
  background-image: url(${({ backGroundIMG }) => backGroundIMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ bgColor }) => bgColor};
  flex-direction: ${({ flexDirection }) => flexDirection};
  overflow: hidden;
  transition: 0.2s all;
`

const Section = (props) => {
  const [heroContext] = useContext(HeroContext)
  const [backGround, setBackGround] = useState("")
  useEffect(() => {
    console.log("changing")
    heroContext.map((e) =>
      e.focused === true ? setBackGround(e.picture) : "black"
    )
  }, [heroContext])

  return (
    <SectionStyled
      backGroundIMG={backGround}
      flexDirection={props.flexDirection}
    >
      {props.children}
    </SectionStyled>
  )
}

export default Section

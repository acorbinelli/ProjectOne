import React from "react"
import styled from "styled-components"

const SectionStyled = styled.section`
  background-image: url(${({ backGroundIMG }) => backGroundIMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ bgColor }) => bgColor};
  flex-direction: ${({ flexDirection }) => flexDirection};
  overflow: hidden;
`

const Section = (props) => {
  return (
    <SectionStyled
      backGroundIMG={props.imageURL}
      bgColor={props.bgColor}
      flexDirection={props.flexDirection}
    >
      {props.children}
    </SectionStyled>
  )
}

export default Section

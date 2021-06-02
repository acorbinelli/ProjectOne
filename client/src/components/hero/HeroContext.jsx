import React, { useState, createContext, useEffect } from "react"
import { Icons } from "../../constants/icons"

export const HeroContext = createContext()

export const HeroProvider = (props) => {
  const [hero, setHero] = useState([
    {
      id: "1",
      value: "Parents",
      icon: `${Icons.users}`,
      type: "secondary",
      focused: true,
      picture: "../../IMG/hero_3.jpg",
      story: [
        {
          title: "Stay organized",
          content: "Lorem ipsum 50",
        },
        {
          title: "Be informed",
          content: "Lorem ipsum 70",
        },
        {
          title: "Take care",
          content: "Lorem ipsum 120",
        },
      ],
      buttons: "Get Started!",
    },
    {
      id: "2",
      value: "Educators",

      icon: `${Icons.educator}`,
      type: "secondary",
      focused: false,
      picture: "../../IMG/hero_2.jpg",
      story: [
        {
          title: "asdsadsadsa",
          content: "Lo12321321321321",
        },
        { title: "12321312", content: "321321" },
        { title: "asdsadsadsa13r23", content: "Lorem ipsum 120" },
      ],
      buttons: "Educate!",
    },
    {
      id: "3",
      value: "Business",

      icon: `${Icons.briefcase}`,
      type: "secondary",
      focused: false,
      picture: "../../IMG/hero_1.jpg",
      story: [
        {
          title: "vd223f2fe2",
          content: "f3232f32f32f",
        },
        { title: "8f1n383n2f", content: "Lorem ipsum 70" },
        { title: "c8h18h19uh", content: "Lorem ipsum 120" },
      ],
      buttons: "Register Business",
    },
  ])

  return (
    <HeroContext.Provider value={[hero, setHero]}>
      {props.children}
    </HeroContext.Provider>
  )
}

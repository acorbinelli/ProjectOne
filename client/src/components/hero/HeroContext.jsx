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
      story: [
        { title: "Stay organized", content: "Lorem ipsum 50" },
        { title: "Be informed", content: "Lorem ipsum 70" },
        { title: "Take care", content: "Lorem ipsum 120" },
      ],
    },
    {
      id: "2",
      value: "Educators",

      icon: `${Icons.educator}`,
      type: "secondary",
      focused: false,
      story: [
        { title: "asdsadsadsa", content: "Lorem ipsum 50" },
        { title: "12321312", content: "Lorem ipsum 70" },
        { title: "asdsadsadsa13r23", content: "Lorem ipsum 120" },
      ],
    },
    {
      id: "3",
      value: "Business",

      icon: `${Icons.briefcase}`,
      type: "secondary",
      focused: false,
      story: [
        { title: "vd223f2fe2", content: "Lorem ipsum 50" },
        { title: "8f1n383n2f", content: "Lorem ipsum 70" },
        { title: "c8h18h19uh", content: "Lorem ipsum 120" },
      ],
    },
  ])

  return (
    <HeroContext.Provider value={[hero, setHero]}>
      {props.children}
    </HeroContext.Provider>
  )
}

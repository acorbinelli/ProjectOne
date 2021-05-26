import React, { Fragment } from "react"
import NavbarLogin from "./NavbarLogin"
import NavbarCompany from "./NavbarCompany"

const NavbarItems = () => {
  return (
    <Fragment>
      <NavbarCompany />
      <NavbarLogin />
    </Fragment>
  )
}

export default NavbarItems

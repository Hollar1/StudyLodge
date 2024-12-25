import React from 'react'
import NavBar from "./NavBar";
import AboutStyles from "../components/style_Modules/About.module.css"

function About() {
  return (
    <div>
        {/* <NavBar/> */}
        <div className={AboutStyles.about_img}>
About Us
        </div>
    </div>
  )
}

export default About
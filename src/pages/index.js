import React from "react"
import "../styles/styles.scss"

//import components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutBlurb />
    </div>
  )
}

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Cover from "../components/cover";
import Footer from "../components/footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const IndexPage = () => (

  <div style={{
    "overflow": "hidden"
  }}>
    <Navigation />
    <Cover />
    <About />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage

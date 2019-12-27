import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Cover from "../components/cover";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => (
  
  <div> 
    <Navigation />
    <Cover/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
  </div>
)

export default IndexPage

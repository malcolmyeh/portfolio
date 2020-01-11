import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navigation from "../components/navigation";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Cover from "../components/cover";
import Footer from "../components/footer";
import Layout from "../components/layout";


const IndexPage = () => (
  <Layout>
    <Navigation />
    <Cover />
    <About />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
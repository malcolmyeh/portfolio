import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import skillList from "../data/skills.json"

// export this to global
const Wrapper = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    // height: 100vh;
`;

const AboutContainer = styled.div`
    padding-top: 8vh;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 8vh;
`;

const About = () => (
    <StaticQuery
        query={graphql`
query{
    profile: file(
        sourceInstanceName:{eq:"profile"}
        name: {eq: "Profile"}
    ) {
        childImageSharp {
            fluid(maxWidth: 1200){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`}
        render={data => (
            <Wrapper id="about">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="6">
                        <Img
                            fluid={data.profile.childImageSharp.fluid}
                            style={{
                                height: "100vh",
                            }} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="6">
                        <AboutContainer>
                            <h1>ABOUT ME</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div>
                                {skillList.map((skillSet) => (
                                    <div style={{
                                        padding: "10px",
                                        "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                                    }}>
                                        <Row>
                                            <Col>
                                                <h3>{skillSet.type}</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {skillSet.data.map((skill) => (
                                                <Col><p>{skill}</p></Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </AboutContainer>
                    </Col>
                </Row>
            </Wrapper >
        )}
    />
);

export default About;
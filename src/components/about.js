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
    height: 100vh;
`;

const AboutContainer = styled.div`
    padding-top: 8vh;
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
                    <Col>
                        <Img
                            fluid={data.profile.childImageSharp.fluid}
                            fit />
                    </Col>
                    <Col>
                        <AboutContainer>
                            <h1>ABOUT ME</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            {skillList.map((skillSet) => (
                                <div>
                                    <h3>{skillSet.type}</h3>
                                    {skillSet.data.map((skill)=> (
                                        <p>{skill}</p>
                                    ))}
                                </div>
                            ))}
                        </AboutContainer>
                    </Col>
                </Row>
            </Wrapper>
        )}
    />
);

export default About;
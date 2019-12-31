import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import skillList from "../data/skills.json"
import Collapsible from 'react-collapsible';

// export this to global
const Wrapper = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
`;

const AboutContainer = styled.div`
    padding-top: 8vh;
    padding-left: 5vw;
    padding-right: 5vw;
    // padding-bottom: 8vh;
`;

export const Wrapper2 = styled.div`
  &:hover {
    cursor: pointer;
  }
  .faq {
    border-bottom: 1px solid grey;
  }
  .faq-title {
    border: none;
    background: none;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;

    font-weight: bold;
    padding-left: 10px;
    padding-top: 10px;

    position: relative;
  }
  .faq-content {
    padding: 10px;
  }
`;

const SkillSet = ({ title, children }) => (
    <Wrapper2>
        <Collapsible
            open
            className="faq"
            openedClassName="faq"
            triggerClassName="faq-title"
            triggerOpenedClassName="faq-title"
            triggerTagName="button"
            contentInnerClassName="faq-content"
            trigger={title}
            transitionTime={300}
            easing="ease-out"
        ><span>• </span>
            {children.map(skill => (
                <span>{skill} • </span>
            ))}
        </Collapsible>
    </Wrapper2>
);

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
                            {/* <h1>ABOUT ME</h1> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Proin sed libero enim sed faucibus turpis in. Tortor vitae purus faucibus ornare suspendisse sed nisi. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. </p>
                            <div>
                                {skillList.map((skillSet) => (
                                    <SkillSet title={skillSet.type}>
                                        {skillSet.data}
                                    </SkillSet>
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
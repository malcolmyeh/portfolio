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
        >
            {children.map(skill => (
                <span>{skill} </span>
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
                    <Col xs="12" sm="12" md="12" lg="6" style={{
                        "display": "flex",
                        "align-items": "center",
                    }}>
                        <AboutContainer>
                            <div>
                                <h4>Hi, I'm Malcolm Yeh. I'm a 2A Mathematics student
                                    at the University of Waterloo currently looking
                                    for a software co-op job for the upcoming Spring
                                    2020 term.
                                </h4>
                                <br></br>
                                <p>I have worked primarily with ReactJS and GraphQL building
                                    web applications. I am looking for an organisation where I
                                    can apply my experience and knowledge and also have the opportunities
                                    to learn new skills and technologies.
                                    Currently, I'm learning about DevOps principles, better UI/UX practices
                                    , and how to build a full-stack application
                                    using the Serverless framework and AWS services.
                                 </p>
                                <p>Outside of school and work, my hobbies include playing the
                                    violin, learning about nutritional science, and
                                    discovering new music. </p>
                                <div>
                                    {skillList.map((skillSet) => (
                                        <SkillSet title={skillSet.type}>
                                            {skillSet.data}
                                        </SkillSet>
                                    ))}
                                </div>
                            </div>
                        </AboutContainer>
                    </Col>
                </Row>
            </Wrapper >
        )}
    />
);

export default About;
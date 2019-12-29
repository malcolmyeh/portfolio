import React from "react";
import experienceList from "../data/experience";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'


const HoverText = styled.div`
    padding-top: 8vh;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 7vh;
`;


const Experience = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allFile(filter: {sourceInstanceName: {eq: "experience"}}){
                        edges{
                            node{
                                relativePath
                                childImageSharp{
                                    fluid(maxWidth: 1920, maxHeight:480){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <div>
                    <div id="experience" style={{
                        "paddingTop": "8vh",
                        "paddingLeft": "5vw",
                        "paddingRight": "5vw",
                        "paddingBottom": "7vh",
                    }}>
                        <h1>EXPERIENCE</h1>
                    </div>

                    {experienceList.map(({ company, position, description, startDate, endDate, image, location, link }) => {
                        const img = data.allFile.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;
                        return (
                            <Row style={{ "min-height": "50vh" }}>
                                <BackgroundImage backgroundColor={`#040e18`} fluid={img.childImageSharp.fluid}>
                                    <HoverText>
                                        <h1>{company}</h1>
                                        <h4>{position}</h4>
                                        <p>{startDate} - {endDate}</p>
                                        <p>{location}</p>
                                        <p>{description}</p>
                                    </HoverText>
                                </BackgroundImage>

                            </Row>

                        );
                    })}

                </div >

            )
            }
        />
    );
};

export default Experience;
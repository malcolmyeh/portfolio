import React from "react";
import experienceList from "../data/experience";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col } from "reactstrap";
import styled from "styled-components";


const HoverCol = styled(Col)`
    padding: 0;
    overflow: hidden;

`;

const HoverImage = styled(Img)`
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    ${HoverCol}:hover & {
        transform: scale(1.1);
        opacity: 0.4;
    }

`;

const HoverText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    ${HoverCol}:hover & {
        opacity: 1;
    }
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
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
                    <Row>
                        {experienceList.map(({ company, position, description, startDate, endDate, image }) => {
                            const img = data.allFile.edges.find(
                                ({ node }) => node.relativePath === image
                            ).node;
                            return (
                                // overflow: "hidden"}}>
                                <HoverCol>
                                    {/* <Img fluid={img.childImageSharp.fluid} /> */}
                                    <HoverImage fluid={img.childImageSharp.fluid} />
                                    <HoverText>
                                        <h1>{company}</h1>
                                        <h3>{position}</h3>
                                        <p>{startDate}</p>
                                        <p>{endDate}</p>
                                        {description.map(entry => (
                                            <p>{entry}</p>
                                        ))}
                                    </HoverText>
                                </HoverCol>

                            );
                        })}
                    </Row>
                </div >

            )
            }
        />
    );
};

export default Experience;
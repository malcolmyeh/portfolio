import React from "react";
import experienceList from "../data/experience";
import { StaticQuery, graphql } from "gatsby";
import { Row } from "reactstrap";
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'


const HoverText = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
`;

const HoverRow = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
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
                <div id="experience">
                    {experienceList.map(({ company, position, description, startDate, endDate, image, location, link }) => {
                        const img = data.allFile.edges.find(
                            ({ node }) => node.relativePath === image
                        ).node;
                        return (
                            <Row style={{ "min-height": "50vh" }}>
                                <BackgroundImage fluid={img.childImageSharp.fluid}>
                                    <HoverRow>
                                        <HoverText>
                                            <h1>{company}</h1>
                                            <h4>{position}</h4>
                                            <p>{startDate} - {endDate}</p>
                                            <p>{location}</p>
                                            <p>{description}</p>
                                        </HoverText>
                                    </HoverRow>
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
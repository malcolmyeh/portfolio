import React from "react";
import experienceList from "../data/experience";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
                                    fluid(maxWidth: 3000, maxHeight:2000){
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
                    <h1>EXPERIENCE</h1>
                    {experienceList.map(({ company, position, description, startDate, endDate, image }) => {
                            const img = data.allFile.edges.find(
                                ({ node }) => node.relativePath === image
                            ).node;
                            return (
                                <div key={company} style={{width: "500px", height: "500px"}}>
                                    <h1>{company}</h1>
                                    <h1>{position}</h1>
                                    <h1>{startDate}</h1>
                                    <h1>{endDate}</h1>
                                    {description.map(entry => (
                                        <h3>{entry}</h3>
                                    ))}
                                    <Img fluid={img.childImageSharp.fluid} />
                                </div>
                            );
                        })}
                </div>
            )}
        />
    );
};

export default Experience;
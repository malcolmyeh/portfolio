import React from "react";
import experienceList from "../data/experience";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col } from "reactstrap";
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
                                <Col key={company} style={{ padding: "0"}}>
                                    <Img fluid={img.childImageSharp.fluid} />
                                    <div style={{
                                        background: "grey",
                                        position: "absolute",
                                        margin: "0",
                                        padding: "0",
                                        boxSizing: "border-box",
                                        borderBottomStyle: "solid",
                                        borderBottomWidth: "thin",
                                        top: "0",
                                        left: "0",
                                        opacity: "0.3",
                                        width: "100%",
                                        height: "100%",
                                    }}></div>
                                    <div style={{
                                        color: "black",
                                        margin: "0",
                                        "text-align": "center",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        "marginRight": "-50%",
                                        transform: "translate(-50%, -50%)"
                                    }}>
                                        <h1>{company}</h1>
                                        <h3>{position}</h3>
                                        <p>{startDate}</p>
                                        <p>{endDate}</p>
                                        {description.map(entry => (
                                            <p>{entry}</p>
                                        ))}
                                    </div>
                                </Col>
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
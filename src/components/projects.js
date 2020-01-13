import React, { useState } from "react";
import projectList from "../data/projects";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import styled from "styled-components";
import Collapsible from 'react-collapsible';

// transform available filter options into an Object
const options = {
    Language: [...new Set([].concat.apply([], projectList.map(project => project.languages)))],
    Type: [...new Set([].concat.apply([], projectList.map(project => project.type)))],
    Library: [...new Set([].concat.apply([], projectList.map(project => project.libraries)))]
};

const HoverCol = styled(Col)`
    padding: 0;
    height: 50vh;
`;

const HoverImage = styled(Img)`
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    ${HoverCol}:hover & {
        transform: scale(1.1);
        opacity: 0.35;
    }

`;

const HoverText = styled.div`
    text-align: left;
    position: absolute;
    top: 75%;
    left: 50%;
    margin-right: -40%;
    transform: translate(-50%, -50%);
    opacity: 0;
    ${HoverCol}:hover & {
        opacity: 1;
        top: 50%;
    }
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
`;



// TODO: 
// - find better way to implement handleChange (switch statement seems redundant)
//      - https://zacjones.io/handle-multiple-inputs-in-react-with-hooks
// - find a way to filter by all instead of adding "All" to projectList property

const Projects = () => {
    const [language, setLanguage] = useState("All");
    const [type, setType] = useState("All");
    const [library, setLibrary] = useState("All");

    const handleChange = (event) => {
        switch (event.target.name) {
            case "Language":
                setLanguage(event.target.value);
                break;
            case "Type":
                setType(event.target.value);
                break;
            case "Library":
                setLibrary(event.target.value);
                break;
            default:
                break;
        }
    }
    return (
        <StaticQuery
            query={graphql`
            query {
                allFile(filter: {sourceInstanceName: {eq: "projects"}}){
                    edges{
                        node{
                            relativePath
                            childImageSharp{
                                fluid(maxWidth:1920, maxHeight:1920){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
            render={data => (
                <div id="projects">
                    <div style={{
                        "paddingTop": "8vh",
                        "paddingLeft": "5vw",
                        "paddingRight": "5vw",
                        "paddingBottom": "8vh"
                    }}>
                        <h1>PROJECTS</h1>
                        <Collapsible
                            trigger="Filter by"
                        >
                            <Form onChange={handleChange}>
                                <Row>
                                    {Object.entries(options).map((entry) => (
                                        <Col xs="12" sm="12" md="12" lg="4">
                                            <FormGroup>
                                                <Label for={entry[0]}>{entry[0]}</Label>
                                                <Input type="select" name={entry[0]}>
                                                    {entry[1].map((option) => (
                                                        <option>{option}</option>
                                                    ))}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                            </Form>
                        </Collapsible>
                    </div>
                    <Row>
                        {projectList.filter(project => (project.languages.includes(language) &&
                            project.type.includes(type) && project.libraries.includes(library)))
                            .map(({ title, description, image, link, libraries }) => {
                                const img = data.allFile.edges.find(
                                    ({ node }) => node.relativePath === image
                                ).node;
                                return (
                                    <HoverCol xs="12" sm="12" md="12" lg="6" key={title} style={{
                                        padding: "0",
                                        overflow: "hidden",
                                    }}>
                                        <HoverImage fluid={img.childImageSharp.fluid} />
                                        <HoverText>
                                            <h1>{title}</h1>
                                            <span>• </span>
                                            {libraries.filter(entry => entry !== "All").map(entry => (
                                                <span>{entry} • </span>
                                            ))}
                                            {description.map(entry => (
                                                <p>{entry}</p>
                                            ))}
                                            <a style={{"color": "black", "text-decoration":"none"}}href={link}>Source Code</a>
                                        </HoverText>

                                    </HoverCol>
                                );
                            })}
                    </Row>
                </div >
            )} />
    );
};

export default Projects;
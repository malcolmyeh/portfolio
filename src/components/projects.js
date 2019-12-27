import React, { useState } from "react";
import projectList from "../data/projects";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

// transform available filter options into an Object
const options = {
    Language: [...new Set([].concat.apply([], projectList.map(project => project.languages)))],
    Type: [...new Set([].concat.apply([], projectList.map(project => project.type)))],
    Library: [...new Set([].concat.apply([], projectList.map(project => project.libraries)))]
};

// TODO: 
// - find better way to implement handleChange (switch statement seems redundant)
//      - https://zacjones.io/handle-multiple-inputs-in-react-with-hooks
// - find a way to filter by all instead of adding "All" to projectList property

const Experience = () => {
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
                                fluid(maxWidth:3000, maxHeight:2000){
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
                    <h1>PROJECTS</h1>
                    <Form onChange={handleChange}>
                        <Row>
                            {Object.entries(options).map((entry) => (
                                <Col>
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
                    {projectList.filter(project => (project.languages.includes(language) &&
                        project.type.includes(type) && project.libraries.includes(library)))
                        .map(({ title, description, languages, image }) => {
                            const img = data.allFile.edges.find(
                                ({ node }) => node.relativePath === image
                            ).node;
                            return (
                                <div key={title} style={{width: "500px", height: "500px"}}>
                                    <h1>{title}</h1>
                                    {description.map(entry => (
                                        <h3>{entry}</h3>
                                    ))}
                                    <Img fluid={img.childImageSharp.fluid} />
                                </div>
                            );
                        })}
                </div>
            )} />
    );
};

export default Experience;
import React from "react";
import Fade from 'react-reveal/Fade';
import { StaticQuery, graphql } from "gatsby";
import "./cover.css";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import BackgroundImage from "gatsby-background-image";

const Background = styled(BackgroundImage)`
    height: 100vh;
    align-items: center;
`;

const SocialList = [
    {
        link: "https://www.github.com/malcolmyeh",
        text: "Github"
    },
    {
        link: "https://www.linkedin.com/in/malcolmyeh/",
        text: "LinkedIn"
    },
    {
        link: "https://instagram.com/malcolmyeh",
        text: "Instagram"
    }
];

const Cover = () => (
    <StaticQuery
        query={graphql`
            query {
                cover: file(
                    sourceInstanceName:{eq: "cover"}
                    name: {eq:"Cover"}
                ) {
                    childImageSharp {
                        fluid(maxWidth: 3000){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Background fluid={data.cover.childImageSharp.fluid}>
                <div className="center">
                    <Fade>
                        <h1>MALCOLM YEH</h1>
                        <Row>
                            {SocialList.map(social => (
                                <Col>
                                    <a style={{ color: "black", "text-decoration": "none", }} href={social.link}>
                                        {social.text}
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </Fade>
                </div>
            </Background>
        )}

    />
);

export default Cover;
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./cover.css";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
const Background = styled(BackgroundImage)`
    height: 100vh;
    align-items: center;
`;

const Overlay = styled.div`
    position: absolute;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-bottom-style: solid;
    border-bottom-width: thin;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const SocialList = [
    {
        link: "https://www.github.com/malcolmyeh",
        icon: faGithub
    },
    {
        link: "https://www.linkedin.com",
        icon: faLinkedin
    },
    {
        link: "https://instagram.com",
        icon: faInstagram
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
                <Overlay/>
                <div className="center">
                    <h1>MALCOLM YEH</h1>
                    <Row>
                        {SocialList.map(social => (
                            <Col>
                                <a style={{ color: "black" }} href={social.link}>
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <p className="greetings">Scroll down to get to know me!</p>

                </div>

            </Background>
        )}

    />
);

export default Cover;
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./cover.css";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const Background = styled(BackgroundImage)`
    height: 100vh;
    align-items: center;
`;

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
                    <h1>MALCOLM YEH</h1>
                    <p className="greetings">Scroll down to get to know me!</p>
                </div>
            </Background>
        )}

    />
);

export default Cover;
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./cover.css";
import styled from "styled-components";

const ImageWrapper = styled.div`
    height: 100vh;
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
            <ImageWrapper>
                <Img
                    style={
                        {
                            height: "100%",
                            width: "100%",
                        }
                    }
                    fluid={data.cover.childImageSharp.fluid} />
                <div className="center">
                    <h1 className="name">
                        <b>MALCOLM YEH</b>
                    </h1>
                    <p className="greetings">Scroll down to get to know me!</p>
                </div>
            </ImageWrapper>
        )}

    />
);

export default Cover;
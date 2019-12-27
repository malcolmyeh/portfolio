import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    padding-top: 30px;
    text-align: center;
    bottom: 0;
    left: 0;
    background-color: gray;
    color: white;
`;

const Footer = () => (
    <FooterContainer>
        <p>Copyright Malcolm Yeh 2019</p>
    </FooterContainer>
);

export default Footer;
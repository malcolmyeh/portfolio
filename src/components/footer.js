import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const SocialList = [
    {
        link: "https://www.github.com/malcolmyeh",
        text: "GitHub"
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
        <Row>
            {SocialList.map(social => (
                <Col>
                    <a style={{ color: "white", "text-decoration": "none" }} href={social.link}>
                        {social.text}
                    </a>
                </Col>
            ))}
        </Row>
    </FooterContainer>
);

export default Footer;
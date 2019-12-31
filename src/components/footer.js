import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Row, Col } from "reactstrap";

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
        <div style={{width: "20%", margin: "0 auto"}}>
        <p>Copyright Malcolm Yeh 2019</p>
        <Row>
            {SocialList.map(social => (
                <Col>
                    <a style={{ color: "white" }} href={social.link}>
                        <FontAwesomeIcon icon={social.icon} />
                    </a>
                </Col>

            ))}
        </Row>
        </div>
    </FooterContainer>
);

export default Footer;
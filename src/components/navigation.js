import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    NavItem,
} from "reactstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./navigation.css";

const navigationItems = ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];

const Navigation = () => {
    const [screenPosition, setScreenPosition] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => {
        if (mobileOpen) {
            setMobileOpen(!mobileOpen);
        }
    };

    const getNavAnchorLink = (item) => (
        <AnchorLink className="nav-link" href={`#${item.toLowerCase()}`} onClick={toggleMobile}>
            {item}
        </AnchorLink>
    );

    useEffect(() => {
        const handleScroll = () => {
            setScreenPosition((document.documentElement.scrollTop || document.body.scrollTop)
                > 300 ? true : false)
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("Scroll", handleScroll);

    }, [screenPosition]);

    const whiteBackground = screenPosition ? "white-background navbar-border"
        : "";


    return (
        <Navbar className={whiteBackground} fixed={"top"} expand="md">
            <NavbarBrand>
                MALCOLM YEH
            </NavbarBrand>
            <NavbarToggler onClick={() => setMobileOpen(!mobileOpen)}>
                ╳
            </NavbarToggler>
            <Collapse isOpen={mobileOpen} navbar>
                <Scrollspy
                    items={navigationItems.map(item => item.toLowerCase())}
                    currentClassName="active"
                    className="ml-auto navbar-nav"
                    navbar>
                    {navigationItems.map(item => (
                        <NavItem key={item}>{getNavAnchorLink(item)}</NavItem>
                    ))}
                </Scrollspy>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
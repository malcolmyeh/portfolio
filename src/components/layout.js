import React from "react";
import styled from "styled-components";


const Container = styled.div`
    overflow: hidden;
`;

const Layout = ({children}) => (
    <Container>
        {children}
    </Container>
);

export default Layout;
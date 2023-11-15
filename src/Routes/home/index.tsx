import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Home = () => {
    return (
        <Container>
            THIS IS HOME
            <br />
            <Link to="/onboarding">onboarding</Link>
        </Container>
    );
};
export default Home;

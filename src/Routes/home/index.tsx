import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BottomTab from "../../components/bottom-tab";
import FamilyList from "../../components/home/family-list";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Home = () => {
    return (
        <Container>
            <Header />
            <FamilyList />
            <BottomTab />
        </Container>
    );
};
export default Home;

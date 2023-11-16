import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import BottomTab from "../../components/bottom-tab";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Home = () => {
    const onClick = () => {
        window.ReactNativeWebView.postMessage("camera");
    };
    return (
        <Container>
            <Header />
            <button onClick={onClick}>send message</button>
            <BottomTab />
        </Container>
    );
};
export default Home;

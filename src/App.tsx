import React from "react";
import GlobalStyle from "./global-style";
import Router from "./router";
import styled from "styled-components";
import { getResponsiveMaxWidth } from "./utils/layout-util";

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    margin: 0 auto !important;
    ${getResponsiveMaxWidth()}
`;

function App() {
    // function postMessage() {
    //     window.ReactNativeWebView.postMessage("안녕하세요");
    // }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Router />
            </Wrapper>
        </>
    );
}

export default App;

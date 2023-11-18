import React from "react";
import GlobalStyle from "./global-style";
import Router from "./router";
import styled from "styled-components";
import { getResponsiveMaxWidth } from "./utils/layout-util";
import { AuthProvider } from "./contexts/auth-provider";

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    margin: 0 auto !important;
    ${getResponsiveMaxWidth()}
`;

function App() {
    // window.addEventListener("message", (event: any) => {
    //     console.log(event);
    //     // console.log(data);
    // });
    // document.addEventListener("message", (event: any) => {
    //     console.log(event);
    // });
    // window.addEventListener("message", (event) => {
    //     console.log(event, " hi");
    // });
    // function postMessage() {
    //     window.ReactNativeWebView.postMessage("안녕하세요");
    // }

    return (
        <>
            <AuthProvider>
                <GlobalStyle />
                <Wrapper>
                    <Router />
                </Wrapper>
            </AuthProvider>
        </>
    );
}

export default App;

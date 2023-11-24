import React from "react";
import GlobalStyle from "./global-style";
import Router from "./router";
import styled from "styled-components";
import { getResponsiveMaxWidth } from "./utils/layout-util";
import { AuthProvider } from "./contexts/auth-provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    margin: 0 auto !important;
    ${getResponsiveMaxWidth()}
`;

window.addEventListener("message", (event) => {
    if (typeof event.data === "string" && event.data.startsWith("ExponentPushToken")) {
        localStorage.setItem("expo_push_token", event.data);
    }
});

function App() {
    return (
        <>
            <ToastContainer closeButton={false} />
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

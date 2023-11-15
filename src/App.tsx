import React from "react";
import GlobalStyle from "./global-style";
import Router from "./router";

function App() {
    // function postMessage() {
    //     window.ReactNativeWebView.postMessage("안녕하세요");
    // }

    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;

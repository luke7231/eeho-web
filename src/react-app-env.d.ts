/// <reference types="react-scripts" />
interface Window {
    ReactNativeWebView: {
        postMessage(msg: string): void;
    };
}
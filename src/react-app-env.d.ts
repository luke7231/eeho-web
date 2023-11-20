/// <reference types="react-scripts" />
interface Data {
    type: string;
    payload: any;
}
interface Window {
    ReactNativeWebView: {
        postMessage(msg: string, data?: Data): void;
    };
}

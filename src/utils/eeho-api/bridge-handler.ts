export const tellClearHistory = () => {
    const payload = {
        type: "clear_history",
    };
    window.ReactNativeWebView.postMessage(JSON.stringify(payload));
};

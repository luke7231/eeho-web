import React from 'react';

function App() {
  function postMessage() {
    window.ReactNativeWebView.postMessage("안녕하세요");
  }
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button onClick={postMessage}>click Me!</button>    
    </div>
  );
}

export default App;

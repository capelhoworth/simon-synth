import React from "react";
import "./App.css";
import styled from "styled-components";
import SynthEngine from "./SynthEngine";
// import Footer from "./Footer";

// Set the button colors using styled-components
const H2 = styled.h2`
  font-size: 24px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simon Synth 🐕</h1>
        <h5>(aka "Slime Ball")</h5>
        <H2>A polyphonic TypeScript synthesizer</H2>
      </header>
      <SynthEngine />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

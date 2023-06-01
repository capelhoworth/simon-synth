import React from "react";
import "./App.css";
import styled from "styled-components";
import SynthEngine from "./SynthEngine";
// import Footer from "./Footer";
import { Stack } from "@mui/material";

// Set the button colors using styled-components
const H2 = styled.h2`
  font-size: 24px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack alignItems="center" spacing={2}>
          <h1>Simon Synth 🐕</h1>
          <h4>(aka "Slime Ball")</h4>
          <H2>A polyphonic TypeScript synthesizer</H2>
          <br />
        </Stack>
      </header>
      <SynthEngine />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

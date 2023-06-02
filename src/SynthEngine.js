import React, { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import {
    Stack,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
} from "@mui/material";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function valuetext(value) {
    return `${value}`;
}

function SynthEngine() {
    {
        /* Declare our state variables */
    }
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume, setVolume] = useState(0);
    const [delayAmount, setDelayAmount] = useState(0);
    const [distortionAmount, setDistortion] = useState(0);
    const [steps] = useState([
        ["C3", "E3", "A3"],
        ["C3", "E3", "G3", "B3"],
        ["C3", "F3", "A3"],
        ["D3", "G3", "B3"],
    ]);
    const [synthType, setSynthType] = useState("amSynth");

    const volumeChange = (event) => {
        setVolume(event.target.value);
    };

    const delayAmountChange = (event) => {
        setDelayAmount(event.target.value);
    };

    const distortionChange = (event) => {
        setDistortion(event.target.value);
    };

    return (
        <>
            <Song isPlaying={isPlaying}>
                <Track steps={steps} volume={volume}>
                    <Instrument type={synthType} />

                    {/* Setup our effect chain */}
                    <Effect type="distortion" wet={distortionAmount} />
                    <Effect type="feedbackDelay" wet={delayAmount} />
                </Track>
            </Song>
            <Stack
                spacing={5}
                direction="column"
                sx={{ mb: 1 }}
                alignItems="center"
                className="CenterAlign"
            >
                <Box sx={{ width: 300 }}>
                    <Typography id="input-slider">Volume</Typography>
                    <Slider
                        min={-30}
                        max={10}
                        step={0.5}
                        defaultValue={volume}
                        onChange={volumeChange}
                        aria-label="Volume"
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    >
                        <label id={"volume"}>Volume</label>
                    </Slider>
                    <Typography id="input-slider">Delay</Typography>
                    <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        defaultValue={delayAmount}
                        onChange={delayAmountChange}
                        aria-label="Delay"
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    >
                        <label id={"delay-amount"}>Delay Amount</label>
                    </Slider>
                    <Typography id="input-slider">Distortion</Typography>
                    <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        defaultValue={distortionAmount}
                        onChange={distortionChange}
                        aria-label="Distortion"
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    >
                        <label id={"delay-amount"}>Distortion</label>
                    </Slider>
                </Box>
            </Stack>
            <br />

            <Stack alignItems="center" className="CenterAlign">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Synth Engine</FormLabel>
                    <RadioGroup
                        aria-label="synth-engine"
                        defaultValue="amSynth"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="amSynth"
                            control={<Radio onClick={() => setSynthType("amSynth")} />}
                            label="amSynth"
                        />
                        <FormControlLabel
                            value="fmSynth"
                            control={<Radio onClick={() => setSynthType("fmSynth")} />}
                            label="fmSynth"
                        />
                        <FormControlLabel
                            value="monoSynth"
                            control={<Radio onClick={() => setSynthType("monoSynth")} />}
                            label="monoSynth"
                        />
                    </RadioGroup>
                </FormControl>
                <br />
                <button
                    onClick={() => {
                        setIsPlaying(!isPlaying);
                    }}
                >
                    {isPlaying ? "Stop" : "Play sequence"}
                </button>

                <br />
                <br />
                <br />
            </Stack>
        </>
    );
}
export default SynthEngine;

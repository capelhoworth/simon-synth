import React, { useState } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { Stack, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function SynthEngine() {

    {/* Declare our state variables */ }
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume, setVolume] = useState(0)
    const [delayAmount, setDelayAmount] = useState(0)
    const [distortionAmount, setDistortion] = useState(0)
    const [steps] = useState([
        ['C3', 'E3', 'A3'],
        null,
        ['C3', 'E3', 'G3', 'B3'],
        null,
        ['C3', 'F3', 'A3'],
        null,
        ['D3', 'G3', 'B3'],
        null,
    ]);
    const [synthType, setSynthType] = useState('amSynth')

    return (
        <>
            <Song isPlaying={isPlaying}>
                <Track
                    steps={steps}
                    volume={volume}
                >
                    <Instrument type={synthType} />

                    {/* Setup our effect chain */}
                    <Effect type="distortion" wet={distortionAmount} />
                    <Effect type="feedbackDelay" wet={delayAmount} />
                </Track>
            </Song>
            <Stack spacing={5} direction="column" sx={{ mb: 1 }} alignItems="center" className='CenterAlign'>
                <Box sx={{ width: 300 }}>
                    <Slider
                        diameter={100}
                        min={-50}
                        max={10}
                        step={1}
                        value={volume}
                        onValueChange={setVolume}
                        ariaLabelledBy={'volume'}
                    >
                        <label id={'volume'}>Volume</label>
                    </Slider >

                    <Slider
                        diameter={100}
                        min={0}
                        max={1}
                        step={.25}
                        value={delayAmount}
                        onValueChange={setDelayAmount}
                        ariaLabelledBy={'delay-amount'}
                    >
                        <label id={'delay-amount'}>Delay Amount</label>
                    </Slider >

                    <Slider
                        diameter={100}
                        min={0}
                        max={1}
                        step={.25}
                        value={distortionAmount}
                        onValueChange={setDistortion}
                        ariaLabelledBy={'delay-amount'}
                    >
                        <label id={'delay-amount'}>Distortion</label>
                    </Slider >
                </Box>

            </Stack >
            <br />

            <Stack alignItems="center" className='CenterAlign'>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Synth Engine</FormLabel>
                    <RadioGroup
                        aria-label="synth-engine"
                        defaultValue="amSynth"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="amSynth" control={<Radio onClick={() => setSynthType('amSynth')} />} label="amSynth" />
                        <FormControlLabel value="fmSynth" control={<Radio onClick={() => setSynthType('fmSynth')} />} label="fmSynth" />
                        <FormControlLabel value="monoSynth" control={<Radio onClick={() => setSynthType('monoSynth')} />} label="monoSynth" />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <button
                    onClick={() => {
                        setIsPlaying(!isPlaying);
                    }}
                >
                    {isPlaying ? 'Stop' : 'Play sequence'}
                </button>

                <br />
                <br />
                <br />

            </Stack>
        </>
    );
}
export default SynthEngine;

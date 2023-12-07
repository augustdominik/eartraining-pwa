import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as Tone from 'tone';
import { Button, Fade, Paper, Slider, Typography } from '@mui/material';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';
import { Box } from '@mui/system';
import { random } from 'lodash';

// PIANO SAMPLER
const sampler = new Tone.Sampler({
    urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
    },

    release: 10,
    volume: 1,

    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();

const reverb = new Tone.Reverb(5);
sampler.chain(reverb, Tone.Destination);

function InnerHearingQuiz({ questions, setState, numTopTones }) {

    const [curQuestion, setCurQuestion] = React.useState(0);
    const [questionAnswered, setQuestionAnswered] = React.useState(false);
    const [chord, setChord] = React.useState(ChordGenerator.getInnerHearingChord(numTopTones));
    const [showChord, setShowChord] = React.useState(false);
    const [toneDelay, setToneDelay] = React.useState(0.03);
    const [sustainSeconds, setSustainSeconds] = React.useState(7.0);

    const playChord = () => {

        chord.map((note, idx) => {
            sampler.triggerAttackRelease(note, sustainSeconds, `+${idx * toneDelay}`, 0.95);
        })

    };

    const playRootNote = () => {
        sampler.triggerAttackRelease(chord[0], '1n');
    };

    const nextQuestion = (event) => {
        if (curQuestion >= questions.length - 1) {
            setState('evaluation');
        } else {
            setChord(ChordGenerator.getInnerHearingChord(numTopTones));
            setShowChord(false);
            setQuestionAnswered(false);
            setCurQuestion(curQuestion + 1);
        }
    }

    const handleChange = (event, newValue) => {
        setToneDelay(newValue);
    };

    const displayChord = () => {
        var chordString = '';
        if (chord.length > 0) {
            chord.map((note) => {
                chordString += note + ', ';
            });
        }

        return <p>alle toner: {chordString}</p>
    }


    return (
        <Fade in={true}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    alignSelf: 'stretch',
                }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        flex: 1,
                        padding: 2
                    }}
                >

                    <Paper sx={{
                        padding: '20px 20px'
                    }}>
                        <Typography variant='h5'>Hvad hører du?</Typography>
                        <p>do: {chord ? chord[0] : '-'}</p>
                        {showChord ? displayChord() : <p> - </p>}
                    </Paper>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '30px'
                    }}>
                        <Box>
                            <Typography>Toneforsinkelse</Typography>
                            <Slider
                                value={toneDelay}
                                onChange={handleChange}
                                min={0.00}
                                max={0.2}
                                step={0.01}
                            />
                        </Box>
                        <Box>
                            <Typography>Sustain</Typography>
                            <Slider
                                value={sustainSeconds}
                                onChange={(event) => setSustainSeconds(event.target.value)}
                                min={0.5}
                                max={10}
                                step={0.1}
                            />
                        </Box>
                        <Button
                            variant='contained'
                            onPointerDown={() => setShowChord(true)}
                            fullWidth={true}
                        >
                            Vis svar
                        </Button>
                        <Button
                            variant='contained'
                            onPointerDown={() => playRootNote()}
                            endIcon={<VolumeUpIcon />}
                            fullWidth={true}
                        >
                            Spil do
                        </Button>
                        <Button
                            variant='contained'
                            onPointerDown={() => playChord()}
                            endIcon={<VolumeUpIcon />}
                            fullWidth={true}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            Spil akkord
                        </Button>
                    </Box>
                </Box>


                <Paper
                    elevation={2}
                    className='footer'
                    sx={{ paddingLeft: 2 }}
                >
                    <p>{(1 + curQuestion).toString() + ' / ' + questions.length}</p>
                    <Button
                        variant='contained'
                        onPointerDown={nextQuestion}
                        endIcon={<NavigateNextIcon />}
                    >
                        {questionAnswered ? 'Næste' : 'Næste'}
                    </Button>
                </Paper>
            </Box>
        </Fade>
    );
}

export default InnerHearingQuiz;

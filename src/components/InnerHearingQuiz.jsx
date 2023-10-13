
import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as Tone from 'tone';
import { Button, Fade, Paper, Typography } from '@mui/material';
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

function InnerHearingQuiz({ questions, setQuestions, setState, chordsToInclude }) {

    //dominant and tonic
    const [curQuestion, setCurQuestion] = React.useState(0);
    const [questionAnswered, setQuestionAnswered] = React.useState(false);
    const [chord, setChord] = React.useState(ChordGenerator.getInnerHearingChord());
    const [showChord, setShowChord] = React.useState(false);

    const playChord = () => {

        // ChordGenerator.getInnerHearingChord();
        const triggerAttackTime = random(0.03, 0.15);

        //TODO: få den til at spille akkorderne oppefra og ned også
        chord.map((note, idx) => {
            sampler.triggerAttackRelease(note, '1n', `+${idx * triggerAttackTime}`, 1.2);
        })

    };

    const playRootNote = () => {
        sampler.triggerAttackRelease(chord[0], '1n');
    };

    const nextQuestion = (event) => {
        if (curQuestion >= questions.length - 1) {
            setState('evaluation');
        } else {
            setChord(ChordGenerator.getInnerHearingChord());
            setShowChord(false);
            setQuestionAnswered(false);
            setCurQuestion(curQuestion + 1);
        }
    }

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
                        padding:'20px 20px'
                        }}>
                        <Typography variant='h5'>Hvad hører du?</Typography>
                        <p>do: {chord ? chord[0] : '-'}</p>
                        {showChord ? displayChord() : <p> - </p>}
                    </Paper>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        gap:'30px'
                        }}>
                        <Button
                            variant='contained'
                            onPointerDown={() => setShowChord(true)}
                            fullWidth={true}
                            sx={{ height: '75px' }}
                        >
                            Vis svar
                        </Button>
                        <Button
                            variant='contained'
                            onPointerDown={() => playRootNote()}
                            endIcon={<VolumeUpIcon />}
                            fullWidth={true}
                            sx={{ height: '75px' }}
                        >
                            Spil do
                        </Button>
                        <Button
                            variant='contained'
                            onPointerDown={playChord}
                            endIcon={<VolumeUpIcon />}
                            fullWidth={true}
                            sx={{ height: '75px' }}
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

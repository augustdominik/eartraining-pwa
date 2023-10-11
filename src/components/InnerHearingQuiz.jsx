
import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as Tone from 'tone';
import { Button, Fade, Paper, Typography } from '@mui/material';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';
import { Box } from '@mui/system';
import SoundRightAnswer from '../assets/right.mp3';
import SoundWrongAnswer from '../assets/wrong.mp3';
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
    volume:1,

    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();

function InnerHearingQuiz({ questions, setQuestions, setState, chordsToInclude }) {

    //dominant and tonic
    const [curQuestion, setCurQuestion] = React.useState(0);
    const [questionAnswered, setQuestionAnswered] = React.useState(false);

    const playChord = () => {

        const triggerAttackTime = random(0.01, 0.07);

        questions[curQuestion].chord.notes.map((note, idx) => {
            sampler.triggerAttackRelease(note, '1n', `+${idx * triggerAttackTime}`, 1.2);
        })
        //sampler.triggerAttackRelease(questions[curQuestion].chord.voicings[0], '2n');
    };

    const nextQuestion = (event) => {
        if (curQuestion >= questions.length - 1) {
            setState('evaluation');
        } else {
            setQuestionAnswered(false);
            setCurQuestion(curQuestion + 1);
        }
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
                        justifyContent: 'space-between',
                        flex: 1,
                        padding: 2
                    }}
                >
                    <Typography variant='h5'>Hvad hører du?</Typography>
                    <Box sx={{
                        display:'grid',
                        gridTemplateColumns:'1fr 1fr 1fr 1fr',
                        gap:2
                    }}>
                    </Box>
                    <Button
                        variant='contained'
                        onPointerDown={playChord}
                        endIcon={<VolumeUpIcon />}
                        fullWidth={true}
                        sx={{height:'75px'}}
                    >
                        Spil akkord
                    </Button>
                </Box>


                <Paper
                    elevation={2}
                    className='footer'
                    sx={{paddingLeft:2}}
                >
                    <p>{(1 + curQuestion).toString() + ' / ' + questions.length}</p>
                    <Button
                        variant='contained'
                        onPointerDown={nextQuestion}
                        endIcon={<NavigateNextIcon />}
                    >
                        {questionAnswered ? 'Næste' : 'Spring over'}
                    </Button>
                </Paper>
            </Box>
        </Fade>
    );
}

export default InnerHearingQuiz;

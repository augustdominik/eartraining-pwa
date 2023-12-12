import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, Fade, Paper, Slider, Typography } from '@mui/material';
import * as ChordGenerator from '../../utils/ChordGenerator.js';
import '../InnerHearing/Udvidelser.css';
import { Box } from '@mui/system';
import PianoSampler from '../../utils/PianoSampler';

function InnerHearingQuiz({ questions, setState, numTopTones }) {

    const [curQuestion, setCurQuestion] = React.useState(0);
    const [questionAnswered, setQuestionAnswered] = React.useState(false);
    const [chord, setChord] = React.useState(ChordGenerator.getInnerHearingChord(numTopTones));
    const [showChord, setShowChord] = React.useState(false);
    const [toneDelay, setToneDelay] = React.useState(0.03);
    const [sustainSeconds, setSustainSeconds] = React.useState(7.0);

    const playChord = () => {

        chord.map((note, idx) => {
            PianoSampler.triggerAttackRelease(note, sustainSeconds, `+${idx * toneDelay}`, 0.95);
        })

    };

    const playRootNote = () => {
        PianoSampler.triggerAttackRelease(chord[0], '1n');
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
                        marginX:3,
                        marginTop:5,
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
                                // @ts-ignore 
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

import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as Tone from 'tone';
import { Button, Fade, Paper, Typography, useTheme } from '@mui/material';
import '../InnerHearing//Udvidelser.css';
import { Box } from '@mui/system';
import SoundRightAnswer from '../../assets/right.mp3';
import SoundWrongAnswer from '../../assets/wrong.mp3';
import { random } from 'lodash';
import PianoSampler from '../../utils/PianoSampler';

const playerRightAnwser = new Tone.Player(SoundRightAnswer).toDestination();
const playerWrongAnswer = new Tone.Player(SoundWrongAnswer).toDestination();

function ChordIdentificationQuiz({ questions, setQuestions, setState, chordsToInclude }) {

    const theme = useTheme();

    //dominant and tonic
    const [curQuestion, setCurQuestion] = React.useState(0);
    const [questionAnswered, setQuestionAnswered] = React.useState(false);

    const pianoSampler = React.useRef(null);

    React.useEffect(()=>{
        console.log('setup');
        pianoSampler.current = PianoSampler;
    },[]);

    const playDominantChord = () => {

        const triggerAttackTime = random(0.01, 0.07);

        questions[curQuestion].chord.voicings[0].map((note, idx) => {
            pianoSampler.current.triggerAttackRelease(note, '1n', `+${idx * triggerAttackTime}`, 1.2);
        })
        //sampler.triggerAttackRelease(questions[curQuestion].chord.voicings[0], '2n');
    };

    const playFeedbackSound = (wasRight) => {
        if (wasRight) {
            playerRightAnwser.start(0);
        } else {
            playerWrongAnswer.start(0);
        }
    }

    const nextQuestion = (event) => {
        if (curQuestion >= questions.length - 1) {
            setState('evaluation');
        } else {
            setQuestionAnswered(false);
            setCurQuestion(curQuestion + 1);
        }
    }

    const answer = (answerString) => {
        setQuestions(questions[curQuestion].guess = answerString);
        setQuestionAnswered(true);
        playFeedbackSound(questions[curQuestion].answer === answerString);
    }

    const getButtonColor = (symbol) => {
        if (questionAnswered) {
            if (symbol === questions[curQuestion].answer) {
                return 'success';
            } else {
                return 'error';
            }
        } else {
            return 'primary';
        }
    }

    const getButtonVariant = (symbol) => {
        if (questionAnswered) {
            if (symbol === questions[curQuestion].answer || symbol === questions[curQuestion].guess) {
                return 'contained';
            } else {
                return 'outlined';
            }
        } else {
            return 'outlined';
        }
    }

    const answerButtons = chordsToInclude.map((chordSymbol, i) =>
        <Button
            sx={{
                textTransform: 'none',
                
            }}
            key={i}
            className='answerButton'
            variant={getButtonVariant(chordSymbol)}
            color={getButtonColor(chordSymbol)}
            onClick={() => answer(chordSymbol)}
        >
            {chordSymbol}
        </Button>
    );

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
                        marginX:3,
                        marginTop:8
                    }}
                >
                    <Typography variant='h5'>Hvad hører du?</Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gap: 2
                    }}>
                        {answerButtons}
                    </Box>
                    <Button
                        variant='contained'
                        onPointerDown={playDominantChord}
                        endIcon={<VolumeUpIcon />}
                        fullWidth={true}
                        sx={{ height: '75px', marginBottom:5 }}
                    >
                        Spil akkord
                    </Button>
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
                        {questionAnswered ? 'Næste' : 'Spring over'}
                    </Button>
                </Paper>
            </Box>
        </Fade>
    );
}

export default ChordIdentificationQuiz;

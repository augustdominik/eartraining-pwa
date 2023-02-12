import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as Tone from 'tone';
import { Button, Fade, Paper } from '@mui/material';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';

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

    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();


function QuizUdvidelser({ questions, setQuestions, setState }) {

    //dominant and tonic
    const [curQuestion, setCurQuestion] = React.useState(0);
    const [questionAnswered, setQuestionAnswered] = React.useState(false);

    const playDominantChord = () => {
        sampler.triggerAttackRelease(questions[curQuestion].chord.voicings[0], '2n');
    };

    const nextQuestion = () => {
        if (curQuestion >= questions.length - 1) {
            setState('menu');
        } else {
            setQuestionAnswered(false);
            setCurQuestion(curQuestion + 1);
        }
    }

    const answer = (answerString) => {
        setQuestions(questions[curQuestion].guess = answerString);
        setQuestionAnswered(true);
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

    const answerButtons = Object.keys(ChordGenerator.dominantChords).map((keyName, i) =>
        <Button
            style={{ textTransform: 'none' }}
            key={i}
            className='answerButton'
            variant={getButtonVariant(ChordGenerator.dominantChords[keyName].symbol)}
            color={getButtonColor(ChordGenerator.dominantChords[keyName].symbol)}
            onClick={() => answer(ChordGenerator.dominantChords[keyName].symbol)}
        >
            {ChordGenerator.dominantChords[keyName].symbol}
        </Button>
    );

    return (
        <Fade in={true}>
            <div className="udvidelser-quiz">

                <div className='udvidelser-quiz-content'>
                    <h2>Hvad hører du?</h2>
                    <div className='answerButtons'>
                        {answerButtons}
                    </div>
                    <div className='chordButtons'>
                        <Button variant='contained' onPointerDown={playDominantChord} endIcon={<VolumeUpIcon />}>Spil</Button>
                    </div>
                </div>


                <Paper elevation={2} className='footer'>
                    <p>{(1 + curQuestion).toString() + ' / ' + questions.length}</p>
                    <Button variant='contained' onPointerDown={nextQuestion} endIcon={<NavigateNextIcon />}>
                        {questionAnswered ? 'Næste' : 'Spring over'}
                    </Button>
                </Paper>
            </div>
        </Fade>
    );
}

export default QuizUdvidelser;

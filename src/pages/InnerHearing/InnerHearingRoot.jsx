import * as React from 'react';
import * as ChordGenerator from '../../utils/ChordGenerator';
import './Udvidelser.css';
import InnerHearingMenu from './InnerHearingMenu';
import InnerHearingQuiz from './InnerHearingQuiz';

function generateQuestions(numQuestions) {

    var questions = [];

    for (var i = 0; i < numQuestions; i++) {
        const question = {};
        const chord = ChordGenerator.getInnerHearingChord();
        question.chord = chord;
        question.answer = '';
        question.guess = '';
        questions.push(question);
    }

    return questions;
}

function InnerHearingRoot() {

    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState('menu');
    const [questions, setQuestions] = React.useState();
    const [topTones, setTopTones] = React.useState(3);
    //TODO num top tones

    const startQuiz = (numQuestions, numTopTones) => {
        setTopTones(numTopTones);
        setQuestions(generateQuestions(numQuestions));
        setState('quiz');
    }

    const renderState = (_state) => {

        if (_state === 'menu') {
            return (<InnerHearingMenu startQuiz={startQuiz} />);
        } else if (_state === 'quiz') {
            return (<InnerHearingQuiz
                numTopTones={topTones}
                questions={questions}
                setQuestions={() => setQuestions}
                setState={setState}
            />);
        } else if (_state === 'evaluation') {
            setState('menu');
        } else {
            return (<InnerHearingMenu startQuiz={startQuiz}/>);
        }
    }

    return (
        renderState(curState)
    );
}

export default InnerHearingRoot;

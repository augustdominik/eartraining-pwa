import * as React from 'react';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';
import ChordIdentificationEvaluation from '../components/ChordIdentificationEvaluation';
import ChordIdentificationMenu from '../components/ChordIdentificationMenu';
import ChordIdentificationQuiz from '../components/ChordIdentificationQuiz';
import InnerHearingMenu from '../components/InnerHearingMenu';
import InnerHearingQuiz from '../components/InnerHearingQuiz';

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

    const startQuiz = (numQuestions) => {
        setQuestions(generateQuestions(numQuestions));
        setState('quiz');
    }

    const renderState = (_state) => {

        if (_state === 'menu') {
            return (<InnerHearingMenu startQuiz={startQuiz} />);
        } else if (_state === 'quiz') {
            return (<InnerHearingQuiz
                questions={questions}
                setQuestions={() => setQuestions}
                setState={setState}
            />);
        } else if (_state === 'evaluation') {
            return(<ChordIdentificationEvaluation questions={questions} setState={setState}/>)
        } else {
            return (<ChordIdentificationMenu />);
        }
    }

    return (
        renderState(curState)
    );
}

export default InnerHearingRoot;

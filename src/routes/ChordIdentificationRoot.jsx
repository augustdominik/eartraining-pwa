import * as React from 'react';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';
import ChordIdentificationEvaluation from '../components/ChordIdentificationEvaluation';
import ChordIdentificationMenu from '../components/ChordIdentificationMenu';
import ChordIdentificationQuiz from '../components/ChordIdentificationQuiz';

function generateQuestions(numQuestions, chordsToIncludeList) {

    var questions = [];

    for (var i = 0; i < numQuestions; i++) {
        const question = {};
        const chord =
            ChordGenerator.getDominantTransposed(chordsToIncludeList[Math.floor(chordsToIncludeList.length * Math.random())]);
        question.chord = chord;
        question.answer = question.chord.symbol;
        question.guess = '';
        questions.push(question);
    }

    return questions;
}

function ChordIdentificationRoot() {

    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState('menu');
    const [questions, setQuestions] = React.useState();
    const [chordsToInclude, setChordsToInclude] = React.useState([]);


    const startQuiz = (numQuestions, chordsToIncludeList) => {
        setQuestions(generateQuestions(numQuestions, chordsToIncludeList));
        setChordsToInclude(chordsToIncludeList);
        setState('quiz');
    }

    const renderState = (_state) => {

        if (_state === 'menu') {
            return (<ChordIdentificationMenu startQuiz={startQuiz} />);
        } else if (_state === 'quiz') {
            return (<ChordIdentificationQuiz
                questions={questions}
                setQuestions={() => setQuestions}
                setState={setState}
                chordsToInclude={chordsToInclude}/>);
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

export default ChordIdentificationRoot;

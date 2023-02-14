import * as React from 'react';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';
import MenuUdvidelser from '../components/MenuUdvidelser';
import QuizUdvidelser from '../components/QuizUdvidelser';

function generateQuestions(amount){
    var questions = [];

    for(var i = 0; i < amount; i++){
        const question = {};
        const chord = ChordGenerator.getRandomDominant();
        question.chord = chord;
        question.answer = question.chord.symbol; 
        question.guess = '';
        questions.push(question);
    }

    return questions;
}

function Udvidelser() {

    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState('menu');
    const [questions, setQuestions] = React.useState();

    const startQuiz = (numQuestions, chordsToIncludeList) => {
        setQuestions(generateQuestions(numQuestions));
        setState('quiz');
    }

    const renderState = (_state) => {

        if (_state === 'menu') {
            return (<MenuUdvidelser startQuiz={startQuiz} />);
        } else if (_state === 'quiz') {
            return (<QuizUdvidelser questions={questions} setQuestions={() => setQuestions} setState={setState}/> );
        } else if (_state === 'evaluation') {

        } else {
            return (<MenuUdvidelser />);
        }
    }

    return (
        renderState(curState)
    );
}

export default Udvidelser;

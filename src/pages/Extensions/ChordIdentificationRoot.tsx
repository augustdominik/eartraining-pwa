import * as React from 'react';
import * as ChordGenerator from '../../utils/ChordGenerator';
import '../InnerHearing//Udvidelser.css';
import ChordIdentificationEvaluation from './ChordIdentificationEvaluation';
import ChordIdentificationMenu from './ChordIdentificationMenu';
import ChordIdentificationQuiz from './ChordIdentificationQuiz';

//TODO add this to /common/types

type Question = {
    chord:Array<string>,
    answer:string,
    guess:string
}

function generateQuestions(numQuestions, chordsToIncludeList) {

    var questions:Array<Question> = [];

    for (var i = 0; i < numQuestions; i++) {
        const chord =
            ChordGenerator.getDominantTransposed(chordsToIncludeList[Math.floor(chordsToIncludeList.length * Math.random())]);
        const question:Question = {
            chord:chord,
            answer:chord.symbol,
            guess:''
        }
        questions.push(question);
    }

    return questions;
}

function ChordIdentificationRoot() {

    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState('menu');
    const [questions, setQuestions] = React.useState();
    const [chordsToInclude, setChordsToInclude] = React.useState([]);


    // @ts-ignore
    const startQuiz = (numQuestions:number, chordsToIncludeList) => {
    // @ts-ignore
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
            return (<ChordIdentificationMenu startQuiz={startQuiz} />);
        }
    }

    return (
        renderState(curState)
    );
}

export default ChordIdentificationRoot;

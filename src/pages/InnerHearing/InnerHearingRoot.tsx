import * as React from 'react';
import * as ChordGenerator from '../../utils/ChordGenerator';
import './Udvidelser.css';
import InnerHearingMenu from './InnerHearingMenu';
import InnerHearingQuiz from './InnerHearingQuiz';

type Question = {
    chord:Array<string>,
    answer:string,
    guess:string
}

function generateQuestions(numQuestions:number) {

    var questions = [];

    for (var i = 0; i < numQuestions; i++) {
        const chord = ChordGenerator.getInnerHearingChord();
        const question:Question = {
            chord:chord,
            answer:'',
            guess:''
        };
        questions.push(question);
    }

    return questions;
}

function InnerHearingRoot() {

    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState('menu');
    const [questions, setQuestions] = React.useState<Array<Question>>();
    const [topTones, setTopTones] = React.useState(3);

    const startQuiz = (numQuestions:number, numTopTones:number) => {
        setTopTones(numTopTones);
        setQuestions(generateQuestions(numQuestions));
        setState('quiz');
    }

    const renderState = (_state:string) => {

        if (_state === 'menu') {
            return (<InnerHearingMenu startQuiz={startQuiz} />);
        } else if (_state === 'quiz') {
            return (<InnerHearingQuiz
                numTopTones={topTones}
                questions={questions}
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

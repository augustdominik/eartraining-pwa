import * as React from 'react';
import './Udvidelser.css';
import MenuStringOfTones from './MenuStringOfNotes';
import GameStringOfNotes from './GameStringOfNotes';

export default function StateManagerStringOfNotes() {

    enum State {
        Menu,
        Game,
        Evaluation
    }
    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState(State.Menu);
    const [questions, setQuestions] = React.useState();
    const [numTones, setNumTones] = React.useState(3);

    function generateQuestions(numQuestions:number){
        return numQuestions;
    }

    const startGame = (numQuestions:number, numTones:number) => {
        setNumTones(numTones);
        setState(State.Game);
    }

    const renderState = (_state:State) => {

        if (_state === State.Menu) {
            return (<MenuStringOfTones startGame={startGame}/>);
        } else if (_state === State.Game) {
            return (<GameStringOfNotes
                questions={questions}
                numTones={numTones}
            />);
        } else if (_state === State.Evaluation) {
            setState(State.Menu);
        } else {
            return (<MenuStringOfTones startGame={startGame}/>);
        }
    }

    return (
        renderState(curState)
    );
}

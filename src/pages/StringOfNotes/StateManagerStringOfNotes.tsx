import * as React from 'react';
import MenuStringOfTones from './MenuStringOfNotes';
import GameStringOfNotes from './GameStringOfNotes';
import { GameSON } from './TypesStringOfNotes';

export default function StateManagerStringOfNotes() {

    enum State {
        Menu,
        Game,
        Evaluation
    }
    //states include: menu, quiz, evaluation
    const [curState, setState] = React.useState(State.Menu);
    const [game, setGame] = React.useState<GameSON>();

    const startGame = (newGame:GameSON) => {
        setGame(newGame);
        setState(State.Game);
    }

    const renderState = (_state:State) => {

        if (_state === State.Menu) {
            return (<MenuStringOfTones startGame={startGame}/>);
        } else if (_state === State.Game) {
            return (<GameStringOfNotes game={game}/>);
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

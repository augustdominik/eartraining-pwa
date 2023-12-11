"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./Udvidelser.css");
var MenuStringOfNotes_1 = __importDefault(require("./MenuStringOfNotes"));
var GameStringOfNotes_1 = __importDefault(require("./GameStringOfNotes"));
function StateManagerStringOfNotes() {
    var State;
    (function (State) {
        State[State["Menu"] = 0] = "Menu";
        State[State["Game"] = 1] = "Game";
        State[State["Evaluation"] = 2] = "Evaluation";
    })(State || (State = {}));
    //states include: menu, quiz, evaluation
    var _a = React.useState(State.Menu), curState = _a[0], setState = _a[1];
    var _b = React.useState(), questions = _b[0], setQuestions = _b[1];
    var _c = React.useState(3), numTones = _c[0], setNumTones = _c[1];
    function generateQuestions(numQuestions) {
        return numQuestions;
    }
    var startGame = function (numQuestions, numTones) {
        setNumTones(numTones);
        setState(State.Game);
    };
    var renderState = function (_state) {
        if (_state === State.Menu) {
            return (React.createElement(MenuStringOfNotes_1.default, { startGame: startGame }));
        }
        else if (_state === State.Game) {
            return (React.createElement(GameStringOfNotes_1.default, { questions: questions, numTones: numTones }));
        }
        else if (_state === State.Evaluation) {
            setState(State.Menu);
        }
        else {
            return (React.createElement(MenuStringOfNotes_1.default, { startGame: startGame }));
        }
    };
    return (renderState(curState));
}
exports.default = StateManagerStringOfNotes;

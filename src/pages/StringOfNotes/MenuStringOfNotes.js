"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
function MenuStringOfNotes(_a) {
    var startGame = _a.startGame;
    var _b = react_1.default.useState(5), numQuestions = _b[0], setNumQuestions = _b[1];
    var _c = react_1.default.useState(3), numTopTones = _c[0], setNumTopTones = _c[1];
    return (react_1.default.createElement(material_1.Fade, { in: true },
        react_1.default.createElement(material_1.Box, { className: "menu-udvidelser", sx: { paddingLeft: 2, paddingRight: 2 } },
            react_1.default.createElement("div", { className: "slider" },
                react_1.default.createElement(material_1.Typography, { variant: "h4" }, "String of Tones"),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Typography, null,
                        "Number of questions: ",
                        numQuestions),
                    react_1.default.createElement(material_1.Slider, { className: "slider-num-answers", onChange: function (event) { return setNumQuestions(event.target.value); }, value: numQuestions, step: 1, min: 1, max: 30 })),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Typography, null,
                        "Number of tones at a time: ",
                        numTopTones),
                    react_1.default.createElement(material_1.Slider, { className: "slider-num-answers", onChange: function (event) { return setNumTopTones(event.target.value); }, value: numTopTones, step: 1, min: 2, max: 6 })),
                react_1.default.createElement(material_1.Button, { variant: "contained", onClick: function () {
                        startGame(numQuestions, numTopTones);
                    } }, "Start")))));
}
exports.default = MenuStringOfNotes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
function GameStringOfNotes(_a) {
    var questions = _a.questions, number = _a.numTones;
    return (react_1.default.createElement(material_1.Fade, { in: true },
        react_1.default.createElement(material_1.Box, { sx: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignSelf: 'stretch',
            } },
            react_1.default.createElement(material_1.Typography, null, "String of Tones"))));
}
exports.default = GameStringOfNotes;

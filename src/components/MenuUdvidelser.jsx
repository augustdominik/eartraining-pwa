import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Fade, Slider, Typography } from "@mui/material";
import React from "react";
import '../styles/MenuUdvidelser.css';
import * as ChordGenerator from '../utils/ChordGenerator';
import { cloneDeep } from 'lodash';

function loadChordsToIncludeList() {
    const chordsToChoose = [];

    Object.keys(ChordGenerator.dominantChords).map((keyName, i) => {
        const chordItem = {}
        chordItem.symbol = ChordGenerator.dominantChords[keyName].symbol;
        chordItem.include = false;
        chordsToChoose.push(chordItem);
    });
    return chordsToChoose;
}

export default function MenuUdvidelser({ startQuiz }) {


    const [chordsToIncludeList, setChordsToIncludeList] = React.useState(loadChordsToIncludeList());

    const [numQuestions, setNumQuestions] = React.useState(15)
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event, newValue) => {
        setNumQuestions(newValue);
    }

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleIncludeChord = (chordToToggleInclude) => {
        setChordsToIncludeList(
            chordsToIncludeList.map((chord) => {
                if (chord.symbol === chordToToggleInclude.symbol) {
                    chord.include = !chord.include;
                }
                return chord;
            })
        );
    }

    const toggleIncludeAllChords = (include) => {
        setChordsToIncludeList(
            chordsToIncludeList.map((chord) => {
                chord.include = include;
                return chord;
            })
        )
    }

    const chordsToIncludeButtons = chordsToIncludeList.map((chord, i) =>
        <Button
            style={{ textTransform: 'none' }}
            key={i}
            className='answerButton'
            onClick={() => toggleIncludeChord(chord)}
            variant={chord.include ? 'contained' : 'outlined'}
        >
            {chord.symbol}
        </Button>
    );

    return (
        <Fade in={true}>
            <div className="menu-udvidelser">
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body1">Vælg akkorder</Typography>
                    <Accordion expanded={expanded === 'dominanter'} onChange={handleChangeAccordion('dominanter')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Dominanter
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>10/10</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Button
                                variant="outlined"
                                onClick={() => toggleIncludeAllChords(true)}
                            >
                                Vælg alle
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => toggleIncludeAllChords(false)}
                            >
                                Fravælg alle
                            </Button>
                            <Box>
                                {chordsToIncludeButtons}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <div className="slider">
                    <Slider className="slider-num-answers"
                        onChange={handleChange}
                        value={numQuestions}
                        step={1}
                        max={30}
                        valueLabelDisplay='on'
                    />
                    <Button variant="contained" onClick={() => startQuiz(numQuestions, chordsToIncludeList)}>Start Quiz</Button>
                </div>
            </div>
        </Fade>
    );
}


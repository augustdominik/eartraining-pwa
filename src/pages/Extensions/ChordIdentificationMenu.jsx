import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Fade, Slider, Typography } from "@mui/material";
import React from "react";
import '../InnerHearing/MenuUdvidelser.css';
import * as ChordGenerator from '../../utils/ChordGenerator';

function loadChordsToIncludeList() {
    const chordsToIncludeList = [];

    //If we've saved a chordsToIncludeList, load that
     // if (localStorage.getItem('chordsToIncludeList') != null) {
     //     return JSON.parse(localStorage.getItem('chordsToIncludeList'));
     // }

    Object.keys(ChordGenerator.dominantChords).map((keyName, i) => {
        const chordItem = {}
        chordItem.symbol = ChordGenerator.dominantChords[keyName].symbol;
        chordItem.include = false;
        chordsToIncludeList.push(chordItem);
    });
    return chordsToIncludeList;
}

function saveChordsToIncludeList(chordsToIncludeList) {
    localStorage.setItem('chordsToIncludeList', JSON.stringify(chordsToIncludeList));
}

//returns an array of chord symbol strings
function cleanChordsToIncludeList(chordsToIncludeList) {
    var arrayOfChordSymbols = [];

    chordsToIncludeList.forEach((chordItem) => {
        if (chordItem.include)
            arrayOfChordSymbols.push(chordItem.symbol);
    })

    return arrayOfChordSymbols;
}

export default function ChordIdentificationMenu({ startQuiz }) {


    const [chordsToIncludeList, setChordsToIncludeList] = 
        React.useState(loadChordsToIncludeList());

    const [numQuestions, setNumQuestions] = React.useState(15)
    const [expanded, setExpanded] = React.useState('dominanter');

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


    const amountSelectedChords = () => {
        var amount = 0;
        chordsToIncludeList.forEach((chord) => {
            if (chord.include)
                amount = amount + 1;
        });
        return amount;
    }

    const amountSelectedChordsString = () => {
        var amount = 0;
        chordsToIncludeList.forEach((chord) => {
            if (chord.include)
                amount = amount + 1;
        });
        return amount.toString() + ' / ' + chordsToIncludeList.length.toString();
    }

    return (
        <Fade in={true}>
            <Box
                className="menu-udvidelser"
                sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
                <Typography variant="h4">Vælg akkorder</Typography>
                <Box sx={{ textAlign: 'left' }}>
                    <Accordion expanded={expanded === 'dominanter'} onChange={handleChangeAccordion('dominanter')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Dominanter
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{amountSelectedChordsString()}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
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
                            </Box>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gap: 1,
                            }}>
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
                    <Button
                        disabled={amountSelectedChords() > 0 ? false : true}
                        variant="contained"
                        onClick={() => {
                            startQuiz(numQuestions, cleanChordsToIncludeList(chordsToIncludeList));
                            saveChordsToIncludeList(chordsToIncludeList);
                        }}>
                        Start Quiz
                    </Button>
                </div>
            </Box>
        </Fade>
    );
}


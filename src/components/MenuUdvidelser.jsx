import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Fade, Slider, Typography } from "@mui/material";
import React from "react";
import '../styles/MenuUdvidelser.css';
import * as ChordGenerator from '../utils/ChordGenerator';

export default function MenuUdvidelser({ startQuiz }) {
    const [numQuestions, setNumQuestions] = React.useState(15)
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event, newValue) => {
        setNumQuestions(newValue);
    }

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const answerButtons = Object.keys(ChordGenerator.dominantChords).map((keyName, i) =>
        <Button
            style={{ textTransform: 'none' }}
            key={i}
            className='answerButton'
            onClick={() => console.log('clicked')}
            variant='outlined'
        >
            {ChordGenerator.dominantChords[keyName].symbol}
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
                            <Button variant="outlined">Vælg alle</Button>
                            <Box>
                                {answerButtons}
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
                    <Button variant="contained" onClick={() => startQuiz(numQuestions)}>Start Quiz</Button>
                </div>
            </div>
        </Fade>
    );
}


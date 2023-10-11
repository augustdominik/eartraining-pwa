import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Fade, Slider, Typography } from "@mui/material";
import React from "react";
import '../styles/MenuUdvidelser.css';
import * as ChordGenerator from '../utils/ChordGenerator';

export default function InnerHearingMenu({ startQuiz }) {

    const [numQuestions, setNumQuestions] = React.useState(15)

    const handleChange = (event, newValue) => {
        setNumQuestions(newValue);
    }

    return (
        <Fade in={true}>
            <Box
                className="menu-udvidelser"
                sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
                <div className="slider">
                    <Typography variant="h4">Inner hearing</Typography>
                    <Slider className="slider-num-answers"
                        onChange={handleChange}
                        value={numQuestions}
                        step={1}
                        min={1}
                        max={30}
                        valueLabelDisplay='on'
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            startQuiz(numQuestions);
                        }}>
                        Start
                    </Button>
                </div>
            </Box>
        </Fade>
    );
}


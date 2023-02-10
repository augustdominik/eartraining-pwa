import { Button, Slider, Typography } from "@mui/material";
import React from "react";
import '../styles/MenuUdvidelser.css';

export default function MenuUdvidelser({ startQuiz }) {
    const [numQuestions, setNumQuestions] = React.useState(15)

    const handleChange = (event, newValue) => {
        setNumQuestions(newValue);
    }

    return (
        <div className="menu-udvidelser">
            <div className="title">
                <Typography variant="h4">Hej hørechefen!</Typography>
                <Typography variant="body1">Kan du høre udvidelser??</Typography>
            </div>
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
    );
}


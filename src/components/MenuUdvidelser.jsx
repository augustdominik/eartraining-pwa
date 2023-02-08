import { Button, Slider, Typography } from "@mui/material";
import React from "react";
import '../styles/MenuUdvidelser.css';

export default function MenuUdvidelser({startQuiz}){
    const [numQuestions, setNumQuestions] = React.useState(15)

    const handleChange = (event, newValue) => {
        setNumQuestions(newValue);
    }

    return(
        <div className="menu-udvidelser">
            <div className="content">
                <Typography variant="h3">Quiz: Udvidelser på Dominanten</Typography>
                <div className="slider">
                    <Typography>Antal spørgsmål:</Typography>
                    <Slider className="slider-num-answers"
                        onChange={handleChange}
                        value={numQuestions}
                        step={1}
                        max={30}
                        valueLabelDisplay='on'
                    />
                </div>
                <Button variant="contained" onClick={() => startQuiz(numQuestions)}>Start Quiz</Button>
            </div>
        </div>
    );
}


import { Box, Button, Fade, Slider, Typography } from "@mui/material";
import React from "react";
import './MenuUdvidelser.css';

export default function InnerHearingMenu({ startQuiz }) {

    const [numQuestions, setNumQuestions] = React.useState(5)
    const [numTopTones, setNumTopTones] = React.useState(3)

    return (
        <Fade in={true}>
            <Box
                className="menu-udvidelser"
                sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
                <div className="slider">
                    <Typography variant="h4">Inner hearing</Typography>
                    <Box>
                        <Typography>Antal spørgsmål: {numQuestions}</Typography>
                        <Slider className="slider-num-answers"
                            //@ts-ignore: latterligt
                            onChange={(event) => setNumQuestions(event.target.value)}
                            value={numQuestions}
                            step={1}
                            min={1}
                            max={30}
                        />
                    </Box>
                    <Box>
                        <Typography>Antal toner på toppen: {numTopTones}</Typography>
                        <Slider className="slider-num-answers"
                            //@ts-ignore: slap af
                            onChange={(event) => setNumTopTones(event.target.value)}
                            value={numTopTones}
                            step={1}
                            min={2}
                            max={6}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        onClick={() => {
                            startQuiz(numQuestions, numTopTones);
                        }}>
                        Start
                    </Button>
                </div>
            </Box>
        </Fade>
    );
}


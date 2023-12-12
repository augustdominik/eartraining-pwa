import { Box, Button, Fade, Slider, Typography } from "@mui/material";
import React from "react";

export default function MenuStringOfNotes({ startGame }) {

    const [numQuestions, setNumQuestions] = React.useState(5)
    const [numTopTones, setNumTopTones] = React.useState(3)

    return (
        <Fade in={true}>
            <Box
                className="menu-udvidelser"
                sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
                <div className="slider">
                    <Typography variant="h4">String of Tones</Typography>
                    <Box>
                        <Typography>Number of questions: {numQuestions}</Typography>
                        <Slider className="slider-num-answers"
                            // @ts-ignore: bare grimt
                            onChange={(event) => setNumQuestions(event.target.value)}
                            value={numQuestions}
                            step={1}
                            min={1}
                            max={30}
                        />
                    </Box>
                    <Box>
                        <Typography>Number of tones at a time: {numTopTones}</Typography>
                        <Slider className="slider-num-answers"
                            // @ts-ignore: bare grimt
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
                            startGame(numQuestions, numTopTones);
                        }}>
                        Start
                    </Button>
                </div>
            </Box>
        </Fade>
    );
}


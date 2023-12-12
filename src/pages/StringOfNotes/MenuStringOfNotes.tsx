import { Box, Button, Checkbox, Fade, FormControlLabel, Slider, ToggleButton, Typography } from "@mui/material";
import React from "react";
import { GenerateGameSON } from "./TypesStringOfNotes";

export default function MenuStringOfNotes({ startGame }) {

    const [numPhrases, setNumPhrases] = React.useState(5)
    const [phraseLength, setPhraseLength] = React.useState(3)
    const [infiniteNumNotes, setInfiniteNumNotes] = React.useState<boolean>(false);

    return (
        <Fade in={true}>
            <Box
                className="menu-udvidelser"
                sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
                <div className="slider">
                    <Typography variant="h4">String of Notes</Typography>
                    <Box>
                        <Typography>Number of phrases: {numPhrases}</Typography>
                        <Slider className="slider-num-answers"
                            // @ts-ignore: bare grimt
                            onChange={(event) => setNumPhrases(event.target.value)}
                            value={numPhrases}
                            step={1}
                            min={1}
                            max={30}
                            disabled={infiniteNumNotes}
                        />
                    </Box>
                    {/* <Box> */}
                    {/*     <Typography>Infinite number of questions?</Typography> */}
                    {/*     <Checkbox checked={infiniteNumNotes} onChange={() => setInfiniteNumNotes(!infiniteNumNotes)} /> */}
                    {/* </Box> */}
                    <Box>
                        <Typography>Phrase length: {phraseLength}</Typography>
                        <Slider className="slider-num-answers"
                            // @ts-ignore: bare grimt
                            onChange={(event) => setPhraseLength(event.target.value)}
                            value={phraseLength}
                            step={1}
                            min={2}
                            max={6}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        onClick={() => {
                            startGame(GenerateGameSON(numPhrases, phraseLength));
                        }}>
                        Start
                    </Button>
                </div>
            </Box>
        </Fade>
    );
}


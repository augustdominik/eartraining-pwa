import { Box, Fade, Typography } from "@mui/material";
import React from "react";

export default function GameStringOfNotes({questions, numTones:number}){

    return(
        <Fade in={true}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    alignSelf: 'stretch',
                }}>
                <Typography>
                    String of Tones
                </Typography>
            </Box>
        </Fade>
    );
}

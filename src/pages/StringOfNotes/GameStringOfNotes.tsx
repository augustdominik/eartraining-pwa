import { Box, Fade, Typography } from "@mui/material";

export default function GameStringOfNotes({questions, numTones}:{questions:number, numTones:number}){

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

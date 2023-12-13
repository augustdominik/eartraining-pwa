import * as Tone from 'tone';
import React from "react";
import { Box, Divider, Fab, Fade, Typography } from "@mui/material";
import PianoSampler from '../../utils/PianoSampler'

export default function ModeExploerer(){

    // enum Modes {
    //     Ionian,
    //     Dorian,
    //     Phrygian,
    //     Lydian,
    //     Aeolian,
    //     Locrian
    // }
    //

    const [nextNoteTime, setNextNoteTime] = React.useState<number>(0);
    
    function noteScheduler(time:number){
        console.log(time, ', ', nextNoteTime);
        if(time > nextNoteTime){
            setNextNoteTime(time + 10 * 1000)
            PianoSampler.triggerAttackRelease('c4', '1n', `+1`, 1.2);
        }
    }

    const [frameTime, setFrameTime] = React.useState();
    React.useEffect(() => {
        let frameId
        const frame = (time) => {
            setFrameTime(time);
            frameId = requestAnimationFrame(frame);
            noteScheduler(time);
        }
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return(
        <Fade in={true}>
            <Box>
                <Box sx={{
                    position: 'fixed',
                    left: 'auto',
                    right: 40,
                    top: 'auto',
                    bottom: 40,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Fab
                        sx={{
                        }}
                        color="primary"
                        onClick={async ()=> await Tone.start()}
                    >
                    </Fab>
                </Box>
                <Typography variant='h4'>
                    {frameTime}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        alignSelf: 'stretch',
                        justifyContent: 'space-between'
                    }}>
                    <Box
                        sx={{
                            alignSelf: 'center'
                        }}>
                        <Typography
                            variant="h4"
                            sx={{
                                alignSelf: 'center',
                                marginTop: 4
                            }}>
                            Mode Explorer
                        </Typography>
                        <Divider />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 3
                        }}
                    >
                        <Box
                            sx={{
                                alignSelf: 'center',
                                overflow: 'hidden',
                            }}
                        >
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
}

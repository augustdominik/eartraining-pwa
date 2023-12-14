import * as Tone from 'tone';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import React from "react";
import { Box, Divider, Fab, Fade, FormControl, MenuItem, Select, Slider, Typography } from "@mui/material";
import PianoSampler from '../../utils/PianoSampler'
import { MODES, Mode, getNextNote } from './ModeUtils';
import { getRandomNumber } from '../../utils/CommonUtils';

export default function ModeExplorer() {

    const [curMode, setMode] = React.useState<Mode>(MODES.Ionian);
    const [noteQueue, setNoteQueue] = React.useState<Array<ScheduledNote>>([]);
    const [play, setPlay] = React.useState<boolean>(false);
    
    const [timeBetweenNotesRange, setTimeBetweenNotesRange] = React.useState<number[]>([0.2, 1])

    type ScheduledNote = {
        time: number
        note: string
    }

    React.useEffect(()=>{
        if(play){
            startModeExplorer();
        }else{

            stopModeExplorer();
        }
    },[play])

    function startModeExplorer(){
        addNoteToQueue(frameTime, '');
    }

    function stopModeExplorer(){
        setNoteQueue([]);
    }

    function addNoteToQueue(currentTime: number, prevNote: string) {
        console.log(currentTime);
        setNoteQueue([...noteQueue,
        {
            time: currentTime + getRandomNumber(timeBetweenNotesRange[0], timeBetweenNotesRange[1]) * 1000,
            note: getNextNote(prevNote, curMode),
        }])
    }

    function playNote(note:string){
        PianoSampler.triggerAttackRelease(note, '1n')
    }

    function handleNoteQueue(time: number) {
        if (noteQueue.length != 0) {
            if (noteQueue[0].time <= time) {
                addNoteToQueue(time, noteQueue[0].note);
                playNote(noteQueue[0].note);
                noteQueue.shift()
            }
        }
    }

    //loop to keep track of time
    const [frameTime, setFrameTime] = React.useState();
    React.useEffect(() => {
        let frameId
        const frame = (time) => {
            setFrameTime(time);
            frameId = requestAnimationFrame(frame);
            handleNoteQueue(time);
        }
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, [noteQueue]);

    return (
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
                        onClick={async () => { await Tone.start() }}
                    >
                        Start Tone
                    </Fab>

                    <Fab
                        sx={{
                        }}
                        color="primary"
                        // onClick={() => addNoteToQueue(frameTime)}
                    >
                        Add note to queue
                    </Fab>
                </Box>
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
                        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                            <Select
                                value={curMode.name}
                                onChange={(event) => setMode(MODES[event.target.value.toString()])}
                            >
                                {Object.entries(MODES).map(([k, v]) =>
                                    <MenuItem value={k} key={k}>{k}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <Slider
                            sx={{width:300}}
                            value={timeBetweenNotesRange}
                            onChange={(event:Event, newValue: number | number[]) => {
                                setTimeBetweenNotesRange(newValue as number[]);
                            }}
                            valueLabelDisplay='on'
                            min={0.01}
                            max={3}
                            step={0.01}
                        >

                        </Slider>
                        <Fab
                            onClick={() =>{setPlay(!play)}}
                            sx={{
                            }}
                            color="primary"
                        >
                            {play ? <PauseIcon /> : <PlayArrowIcon />}
                        </Fab>
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
}

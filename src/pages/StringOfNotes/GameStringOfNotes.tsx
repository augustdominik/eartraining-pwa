import { Box, Button, Divider, Fab, Fade, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import React from "react";
import { GameSON, Phrase } from "./TypesStringOfNotes";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { pedalPad } from "../../utils/Synths";
import PianoSampler from '../../utils/PianoSampler';

export default function GameStringOfNotes({ game }: { game: GameSON }) {

    const [playRoot, setPlayRoot] = React.useState(false);
    const [curPhraseIndex, setCurPhraseIndex] = React.useState(0);

    function playPhrase(phrase: Phrase) {
        phrase.forEach((note, i) => {
            PianoSampler.triggerAttackRelease(note, '1n', `+${i * 0.2}`, 0.95);
        });
    }

    function nextPhrase(i:number) {
        if(i === curPhraseIndex){
            setCurPhraseIndex(curPhraseIndex + 1);
        }
    }

    function toggleRootPedal() {
        if (playRoot) {
            setPlayRoot(false);
            pedalPad.triggerRelease();
        } else {
            setPlayRoot(true);
            pedalPad.triggerAttack('c2', '1n', 0.2);
        }
    }

    function renderPhraseLine() {
        return (
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {game.Phrases.map((phrase, i) =>
                    <TimelineItem key={i}>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <Fab
                                color={i <= curPhraseIndex ? 'secondary' : 'default'}
                                disabled={!(i <= curPhraseIndex)}
                                sx={{
                                    width: 50,
                                    height: 50,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: (i <= curPhraseIndex) ? 1 : 0.75
                                }}
                                onClick={() => {playPhrase(phrase), nextPhrase(i)}}
                            >
                                {i + 1}
                            </Fab>
                            <TimelineConnector sx={{ height: 70 }} />
                        </TimelineSeparator>
                    </TimelineItem>
                )}
            </Timeline>
        )
    }

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
                        onClick={() => toggleRootPedal()}
                        sx={{
                        }}
                        color="primary"
                    >
                        {playRoot ? <PauseIcon /> : <PlayArrowIcon />}
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
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                alignSelf: 'center',
                                marginTop: 4
                            }}
                        >
                            String of Notes
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
                            {renderPhraseLine()}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
}

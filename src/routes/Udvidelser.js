import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import * as Tone from 'tone';
import { Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import * as ChordGenerator from '../utils/ChordGenerator';
import '../styles/Udvidelser.css';

// PIANO SAMPLER
const sampler = new Tone.Sampler({
    urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
    },

    release: 10,

    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();

function Udvidelser() {

    //dominant and tonic
    const [chords, setChords] = React.useState(ChordGenerator.getDominantAndTonic);
    const [extensions, setExtensions] = React.useState([]);

    const getNewChords = () => {
        setChords(ChordGenerator.getDominantAndTonic());
    }

    const getExtensions = (_extensions) => {
        setExtensions(ChordGenerator.getExtensions(chords[0],_extensions));
        console.log(extensions)
    }

    const playDominantChord = () => {
        sampler.triggerAttackRelease(chords[0], '2n');
        getExtensions(['b9']);
    };

    const playTonicChord = () => {
        sampler.triggerAttackRelease(chords[1], '2n');
    };

    const handleChange = (event, num) => {
        
    }

    return (
        <div className="udvidelser">
            <h2>Udvidelser på dominanten!!</h2>
            <div className='checkboxes'>
                <div className='checkBoxGroup'>
                 <FormControlLabel control={<Checkbox />} label="b9 - le"/>
                 <FormControlLabel control={<Checkbox />} label="9 - la"/>
                 <FormControlLabel control={<Checkbox />} label="#9 - li"/>
                </div>
                 <FormControlLabel control={<Checkbox />} label="#11 - di"/>
                <div className='checkBoxGroup'>
                 <FormControlLabel control={<Checkbox />} label="b13 - me"/>
                 <FormControlLabel control={<Checkbox />} label="13 - mi"/>
                </div>
            </div>
            <div className='chordButtons'>
                <Button variant='contained' onPointerDown={playDominantChord} endIcon={<VolumeUpIcon/>}>Dominant</Button>
                <Button variant='contained' onPointerDown={playTonicChord} endIcon={<VolumeUpIcon/>}>Tonika</Button>
            </div>
            <Button variant='contained' onPointerDown={getNewChords}>Ny Akkord</Button>
        </div>
    );
}

export default Udvidelser;

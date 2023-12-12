import * as Tone from 'tone';


const reverb = new Tone.Reverb(10);

export const pedalPad = new Tone.Synth({
    volume:0.2,
    //@ts-ignore
    oscillator:'sine',
    envelope:{
        attack:3,
        decay:1,
        sustain:1,
        release: 4
    },
}).chain(reverb).toDestination();

export const pluckSynth = new Tone.Synth({
    //@ts-ignore
    oscillator:'triangle8',
    envelope:{
        attack:0.1,
        decay:1,
        sustain:1,
        release:1
    }
}).toDestination();

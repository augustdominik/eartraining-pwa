import { Note } from 'tonal';
import { cloneDeep } from 'lodash';

export const dominantChords = {
    seventh: {
        voicings:[['C2', 'Bb2', 'E3']],
        symbol:'7'
    },
    ninth: {
        voicings:[['C2', 'Bb2', 'E3', 'D3']],
        symbol:'9'
    },
    flatNinth: {
        voicings:[['C2', 'Bb2', 'E3', 'Db3']],
        symbol:'b9'
    },
    sharpNinth: {
        voicings:[['C2', 'Bb2', 'E3', 'D#4']],
        symbol:'#9'
    },
    sharpEleventh: {
        voicings:[['C2', 'Bb2', 'E3', 'F#3']],
        symbol:'#11'
    },
    thirteenth: {
        voicings:[['C2', 'Bb2', 'E3', 'A3']],
        symbol:'13'
    },
    flatThirteenth: {
        voicings:[['C2', 'Bb2', 'E3', 'Ab3']],
        symbol:'b13'
    },
    thirteenthFlatNinth: {
        voicings:[['C2', 'Bb2', 'Db3', 'E3', 'A3']],
        symbol:'13b9'
    },
    flatThirteenthFlatNinth: {
        voicings:[['C2', 'Bb2', 'Db3', 'E3', 'Ab3']],
        symbol:'b13b9'
    },
    flatThirteenthSharpNinth: {
        voicings:[['C2', 'Bb2', 'D#4', 'E3', 'Ab3']],
        symbol:'b13#9'
    },
}


//Transposes chord by semitones up
function transposeChord(chord, semitones){
    const transposedChord = chord
        .map(note => Note.midi(note))
        .map(midiNote => midiNote + semitones)
        .map(transpoedMidiNote => Note.fromMidi(transpoedMidiNote));
    return transposedChord;
}

//Chooses a random dominant chord from dictionary
//transposes to random key as well.
export function getRandomDominant(){

    const keys = Object.keys(dominantChords);
    var chord = cloneDeep(dominantChords[keys[Math.floor(keys.length * Math.random())]]);
    const transposeBySemitones = 6 + Math.floor(Math.random() * 12); //Added the sixth because the original voicings are way too low
    //const transposedChord = chord.voicings.forEach(voicing => transposeChord(voicing,transposeBySemitones));
    chord.voicings = chord.voicings.map((voicing) => transposeChord(voicing, transposeBySemitones));
    return chord;
}

export function getDominantAndTonic(){
    //First chord is dominant, second is tonic
    const baseChords = 
        ((Math.random() < 0.5 ) 
            ? [['C2', 'Bb2', 'E3'], ['F2', 'A2', 'C3', 'F3']]
            : [['C2', 'Bb3', 'E3'], ['F2', 'F3', 'A3', 'C3']]
        );
    const semitones = Math.floor(Math.random() * 12);
    const transposedChords = baseChords.map((chord) => transposeChord(chord, semitones))
    
    return transposedChords;
}

export function getDominantShell(){
    const baseChord = ((Math.random() < 0.5 ) ? ['C2', 'Bb2', 'E3'] : ['C2', 'Bb3', 'E3'] );
    const semitones = Math.floor(Math.random() * 12);
    const transposedChord = baseChord
        .map(note => Note.midi(note))
        .map(midiNote => midiNote + semitones)
        .map(transpoedMidiNote => Note.fromMidi(transpoedMidiNote));
    return transposedChord;
}


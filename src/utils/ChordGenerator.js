import { Note } from 'tonal';
import { cloneDeep, wrap } from 'lodash';

export const dominantChords = {
    seventh: {
        voicings: [['C2', 'Bb2', 'E3']],
        symbol: '7'
    },
    seventhSusFour: {
        voicings: [['C2', 'Bb2', 'F3', 'G3']],
        symbol: '7(sus4)'
    },
    ninth: {
        voicings: [['C2', 'Bb2', 'E3', 'D3']],
        symbol: '9'
    },
    flatNinth: {
        voicings: [['C2', 'Bb2', 'E3', 'Db3']],
        symbol: 'b9'
    },
    sharpNinth: {
        voicings: [['C2', 'Bb2', 'E3', 'D#4']],
        symbol: '#9'
    },
    sharpEleventh: {
        voicings: [['C2', 'Bb2', 'E3', 'F#3']],
        symbol: '#11'
    },
    sharpEleventhSharpNine: {
        voicings: [['C2','E2', 'Bb2', 'Eb3', 'F#3']],
        symbol: '#11#9'
    },
    sharpEleventhFlatNine: {
        voicings: [['C2','Bb2', 'Db3', 'E3', 'F#3']],
        symbol: '#11b9'
    },
    thirteenth: {
        voicings: [['C2', 'Bb2', 'E3', 'A3']],
        symbol: '13'
    },
    thirteenthSharpEleven: {
        voicings: [['C2', 'Bb2', 'E3', 'F#3', 'A3']],
        symbol: '13#11'
    },
    thirteenthSharpElevenNinth: {
        voicings: [['C2', 'Bb2', 'D3','E3', 'F#3', 'A3']],
        symbol: '13 #11 9'
    },
    thirteenthFlatNinth: {
        voicings: [['C2', 'Bb2', 'Db3', 'E3', 'A3']],
        symbol: '13b9'
    },
    thirteenthSharpNinth: {
        voicings: [['C2', 'Bb2', 'E3', 'A3', 'Eb4']],
        symbol: '13#9'
    },
    flatThirteenth: {
        voicings: [['C2', 'Bb2', 'E3', 'Ab3']],
        symbol: 'b13'
    },
    flatThirteenthFlatNinth: {
        voicings: [['C2', 'Bb2', 'Db3', 'E3', 'Ab3']],
        symbol: 'b13b9'
    },
    flatThirteenthSharpNinth: {
        voicings: [['C2', 'Bb2', 'D#4', 'E3', 'Ab3']],
        symbol: 'b13#9'
    },
    thirteenthSusFour: {
        voicings: [['C2', 'G2', 'Bb2', 'D3', 'F3', 'A3']],
        symbol: '13(sus4)'
    },
    thirteenthFlatNinthSusFour: {
        voicings: [['C2', 'G2', 'Bb2', 'Db3', 'F3', 'A3']],
        symbol: '13b9(sus4)'
    },
}


//Transposes chord by semitones up
function transposeChord(chord, semitones) {
    const transposedChord = chord
        .map(note => Note.midi(note))
        .map(midiNote => midiNote + semitones)
        .map(transpoedMidiNote => Note.fromMidi(transpoedMidiNote));
    return transposedChord;
}

//Chooses a random dominant chord from dictionary
//transposes to random key as well.
export function getRandomDominant() {

    const keys = Object.keys(dominantChords);
    var chord = cloneDeep(dominantChords[keys[Math.floor(keys.length * Math.random())]]);
    const transposeBySemitones = 6 + Math.floor(Math.random() * 12); //Added the sixth because the original voicings are way too low
    //const transposedChord = chord.voicings.forEach(voicing => transposeChord(voicing,transposeBySemitones));
    chord.voicings = chord.voicings.map((voicing) => transposeChord(voicing, transposeBySemitones));
    return chord;
}

function getDominantFromSymbol(chordSymbol){

    const keys = Object.keys(dominantChords);

    for(let i = 0; i < keys.length; i++){
        if(dominantChords[keys[i]].symbol === chordSymbol){
            return cloneDeep(dominantChords[keys[i]]);
        }
    }

    //if none matches, return the first chord from the chordDictionary
    console.log('no matching chords');
    return cloneDeep(dominantChords[keys[0]]);
}

export function getDominantTransposed(chordSymbol) {

    var chord = getDominantFromSymbol(chordSymbol);

    const transposeBySemitones = 6 + Math.floor(Math.random() * 12); //Added the sixth because the original voicings are way too low
    //const transposedChord = chord.voicings.forEach(voicing => transposeChord(voicing,transposeBySemitones));
    chord.voicings = chord.voicings.map((voicing) => transposeChord(voicing, transposeBySemitones));
    return chord;
}

export function getInnerHearingChord(){

}



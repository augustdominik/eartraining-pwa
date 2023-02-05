import { Note } from 'tonal';

function transposeChord(chord, semitones){
    const transposedChord = chord
        .map(note => Note.midi(note))
        .map(midiNote => midiNote + semitones)
        .map(transpoedMidiNote => Note.fromMidi(transpoedMidiNote));
    return transposedChord;
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

export function getExtensions(chord, extensions){

    const rootNote = chord[0];
    var extensions = [];

    extensions.forEach(extension => {

        if(extension === 'b9'){
            extensions.push(Note.fromMidi((Note.midi(rootNote) + 13)));
        }else if(extension === '9'){

        }else if(extension === '#9'){

        }else if(extension === '#11'){

        }else if(extension === '13'){

        }else if(extension === 'b13'){

        }

    });

    return extensions;
}


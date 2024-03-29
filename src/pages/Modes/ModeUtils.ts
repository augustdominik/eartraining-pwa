import { Note } from "@tonaljs/tonal";
import { getRandomNumber } from "../../utils/CommonUtils";
import { ionianProbabilities } from "./ModeProbabilities/ionian";
import { Mode, SolfegeNote, Solfege } from "./ModeTypes";
import { dorianProbabilites } from "./ModeProbabilities/dorian";
import { harmonicMinorSharpFour } from "./ModeProbabilities/harmonicMinorSharpFour";

export const MODES: { [key: string]: Mode } = {
    Ionian: {
        name: 'Ionian',
        probabilities: ionianProbabilities
    },
    Dorian: {
        name: 'Dorian',
        probabilities: dorianProbabilites
    }, 
    HarmonicMinorSharpFour: {
        name: 'HarmonicMinorSharpFour',
        probabilities: harmonicMinorSharpFour
    }
}

export function solfegeNoteToAbsoluteNote(solfegeNote: SolfegeNote, root: string): string {
    const absoluteNote = Note.pitchClass(Note.fromMidi(Note.midi(root) + solfegeNote.solfege - 1)) + solfegeNote.octave.toString();
    console.log(absoluteNote);
    return absoluteNote; 
}

//TODO: perhaps find a mathimatical function for calculating
//probabilities
export function getOctave(prevSolfegeNote: SolfegeNote): number {
    const roll = getRandomNumber(0.0, 1.0);

    if(roll < 0.2){
        return prevSolfegeNote.octave <= 3 ? prevSolfegeNote.octave + 1 : prevSolfegeNote.octave - 1;
    }else if( roll < 0.4 ) {
        return prevSolfegeNote.octave >= 6 ? prevSolfegeNote.octave - 1 : prevSolfegeNote.octave + 1;
    }
    return prevSolfegeNote.octave;
}

export function getNextNote(prevSolfegeNote: SolfegeNote, mode: Mode): SolfegeNote {
    const roll = getRandomNumber(0.0, 1.0);

    console.log(prevSolfegeNote);
    const entries = Object.entries(mode.probabilities[prevSolfegeNote.solfege]);


    let acc = 0;
    for (let i = 0; i < entries.length; i++) {
        acc += entries[i][1];
        if (roll <= acc) {
            return { solfege: parseInt(entries[i][0]), octave: getOctave(prevSolfegeNote) };
        }
    }
}

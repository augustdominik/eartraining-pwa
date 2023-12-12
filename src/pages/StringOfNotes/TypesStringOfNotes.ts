import { Midi, Note } from '@tonaljs/tonal';
import { getRandomInt } from '../../utils/CommonUtils'

//SON stands for String of Notes
export type Phrase = Array<string>;

export type GameSON = {
    RootNote:string,
    Phrases:Array<Phrase>
}

function GenerateRandomPhrase(phraseLength:number):Phrase{
    
    const phrase:Phrase = [];

    while (phrase.length < phraseLength + 1) {

        const note = Midi.midiToNoteName(getRandomInt(52, 72));

        if (phrase.some((noteInChord) => noteInChord.slice(0, note.length - 1) === note.slice(0, note.length - 1))) {
        } else {
            phrase.push(note);
        }
    }

    return phrase;

}

export function GenerateGameSON(numPhrases:number,phraseLength:number):GameSON{

    const phrases = [];
    for(var i = 0; i < numPhrases; i++){
        phrases.push(GenerateRandomPhrase(phraseLength));
    }

    const game:GameSON = {
        RootNote:'C0',
        Phrases: phrases
    }

    return game;
}

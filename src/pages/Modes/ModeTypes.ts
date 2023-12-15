export type SolfegeNote = {
    solfege: Solfege
    octave: number
}

export type ScheduledNote = {
    time: number
    note: SolfegeNote
}

export enum Solfege {
    Do = 1,
    Ra,
    Re,
    Me,
    Mi,
    Fa,
    Fi,
    So,
    Le,
    La,
    Te,
    Ti
}

export type NextNoteProbabilities = { [key in Solfege]?: number };

export type ModeProbabilities = { [key in Solfege]?: NextNoteProbabilities };

export type Mode = {
    name: string,
    probabilities: ModeProbabilities;
}

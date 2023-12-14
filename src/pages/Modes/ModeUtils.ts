import { getRandomNumber } from "../../utils/CommonUtils";

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

//TODO: du mangler do 
export const MODES: { [key: string]: Mode } = {
    Ionian: {
        name: 'Ionian',
        probabilities: {
            [Solfege.Do]: {
                [Solfege.Re]: 1 / 6,
                [Solfege.Mi]: 1 / 6,
                [Solfege.Fa]: 1 / 6,
                [Solfege.So]: 1 / 6,
                [Solfege.La]: 1 / 6,
                [Solfege.Ti]: 1 / 6,
            },
            [Solfege.Re]: {
                [Solfege.Do]: 1 / 6,
                [Solfege.Mi]: 1 / 6,
                [Solfege.Fa]: 1 / 6,
                [Solfege.So]: 1 / 6,
                [Solfege.La]: 1 / 6,
                [Solfege.Ti]: 1 / 6,
            },
            [Solfege.Mi]: {
                [Solfege.Do]: 1 / 6,
                [Solfege.Re]: 1 / 6,
                [Solfege.Fa]: 1 / 6,
                [Solfege.So]: 1 / 6,
                [Solfege.La]: 1 / 6,
                [Solfege.Ti]: 1 / 6,
            },
            [Solfege.Fa]: {
                [Solfege.Do]: 1 / 6,
                [Solfege.Re]: 1 / 6,
                [Solfege.Mi]: 1 / 6,
                [Solfege.So]: 1 / 6,
                [Solfege.La]: 1 / 6,
                [Solfege.Ti]: 1 / 6,
            },
            [Solfege.So]: {
                [Solfege.Do]: 1 / 6,
                [Solfege.Re]: 1 / 6,
                [Solfege.Mi]: 1 / 6,
                [Solfege.Fa]: 1 / 6,
                [Solfege.La]: 1 / 6,
                [Solfege.Ti]: 1 / 6,
            },
            [Solfege.La]: {
                [Solfege.Do]: 1 / 6,
                [Solfege.Re]: 1 / 6,
                [Solfege.Mi]: 1 / 6,
                [Solfege.Fa]: 1 / 6,
                [Solfege.So]: 1 / 6,
                [Solfege.Ti]: 1 / 6,
            },
            [Solfege.Ti]: {
                [Solfege.Do]: 1 / 6,
                [Solfege.Re]: 1 / 6,
                [Solfege.Mi]: 1 / 6,
                [Solfege.Fa]: 1 / 6,
                [Solfege.So]: 1 / 6,
                [Solfege.La]: 1 / 6,
            },
        }
    },
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export function getNextNote(previousNote: Solfege, mode: Mode): Solfege {
    const roll = getRandomNumber(0.0, 1.0);

    const entries = Object.entries(mode.probabilities[previousNote]) as Entries<object>;

    let acc = 0;
    for (let i = 0; i < entries.length; i++) {
        acc += entries[i][1];
        if (roll <= acc) {
            return Solfege[parseInt(entries[i][0])];
        }
    }

}

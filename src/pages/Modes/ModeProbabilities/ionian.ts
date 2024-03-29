import { ModeProbabilities, Solfege } from "../ModeTypes"

export const ionianProbabilities: ModeProbabilities =
{
    [Solfege.Do]: {
        [Solfege.Do]: 0,
        [Solfege.Re]: 1 / 6,
        [Solfege.Mi]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Ti]: 1 / 6,
    },
    [Solfege.Re]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 0,
        [Solfege.Mi]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Ti]: 1 / 6,
    },
    [Solfege.Mi]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Mi]: 0,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Ti]: 1 / 6,
    },
    [Solfege.Fa]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Mi]: 1 / 6,
        [Solfege.Fa]: 0,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Ti]: 1 / 6,
    },
    [Solfege.So]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Mi]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 0,
        [Solfege.La]: 1 / 6,
        [Solfege.Ti]: 1 / 6,
    },
    [Solfege.La]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Mi]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 0,
        [Solfege.Ti]: 1 / 6,
    },
    [Solfege.Ti]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Mi]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Ti]: 0,
    }
}

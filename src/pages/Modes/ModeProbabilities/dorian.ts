import { ModeProbabilities, Solfege } from "../ModeTypes"

export const dorianProbabilites: ModeProbabilities =
{
    [Solfege.Do]: {
        // [Solfege.Do]: 0,
        // [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 1 / 2,
        // [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 2,
        // [Solfege.La]: 1 / 6,
        // [Solfege.Te]: 1 / 3,
    },
    [Solfege.Re]: {
        [Solfege.Do]: 4 / 12,
        [Solfege.Re]: 0,
        [Solfege.Me]: 4 / 12,
        [Solfege.Fa]: 1 / 12,
        [Solfege.So]: 1 / 12,
        [Solfege.La]: 1 / 12,
        [Solfege.Te]: 1 / 12,
    },
    [Solfege.Me]: {
        // [Solfege.Do]: 1 / 12,
        [Solfege.Re]: 3 / 12,
        // [Solfege.Me]: 0,
        [Solfege.Fa]: 3 / 12,
        // [Solfege.So]: 1 / 12,
        [Solfege.La]: 6 / 12,
        // [Solfege.Te]: 1 / 12,
    },
    [Solfege.Fa]: {
        // [Solfege.Do]: 1 / 6,
        // [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 8 / 12, 
        // [Solfege.Fa]: 0,
        [Solfege.So]: 2 / 12,
        // [Solfege.La]: 1 / 6,
        [Solfege.Te]: 2 / 12,
    },
    [Solfege.So]: {
        // [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 3 / 12,
        [Solfege.Fa]: 4 / 12,
        [Solfege.La]: 4 / 12,
        [Solfege.Te]: 1 / 12,
    },
    [Solfege.La]: {
        // [Solfege.Do]: 1 / 6,
        // [Solfege.Re]: 1 / 5,
        [Solfege.Fa]: 4 / 12,
        [Solfege.Me]: 4 / 12,
        [Solfege.So]: 1 / 12,
        [Solfege.Te]: 3 / 12,
    },
    [Solfege.Te]: {
        [Solfege.Do]: 1 / 12,
        [Solfege.Re]: 1 / 12,
        [Solfege.Me]: 1 / 12,
        [Solfege.Fa]: 4 / 12,
        [Solfege.So]: 1 / 12,
        [Solfege.La]: 4 / 12,
        [Solfege.Te]: 0,
    }
}

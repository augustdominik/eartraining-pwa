import { ModeProbabilities, Solfege } from "../ModeTypes"

export const dorianProbabilites: ModeProbabilities =
{
    [Solfege.Do]: {
        [Solfege.Do]: 0,
        [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Te]: 1 / 6,
    },
    [Solfege.Re]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 0,
        [Solfege.Me]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Te]: 1 / 6,
    },
    [Solfege.Me]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 0,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Te]: 1 / 6,
    },
    [Solfege.Fa]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 1 / 6,
        [Solfege.Fa]: 0,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Te]: 1 / 6,
    },
    [Solfege.So]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 0,
        [Solfege.La]: 1 / 6,
        [Solfege.Te]: 1 / 6,
    },
    [Solfege.La]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 0,
        [Solfege.Te]: 1 / 6,
    },
    [Solfege.Te]: {
        [Solfege.Do]: 1 / 6,
        [Solfege.Re]: 1 / 6,
        [Solfege.Me]: 1 / 6,
        [Solfege.Fa]: 1 / 6,
        [Solfege.So]: 1 / 6,
        [Solfege.La]: 1 / 6,
        [Solfege.Te]: 0,
    }
}

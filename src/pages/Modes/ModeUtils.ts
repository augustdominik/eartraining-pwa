export type Mode = {
    name: string,
}

export const MODES: { [key: string]: Mode } = {
    Ionian: {
        name: 'Ionian'
    },
    Dorian: {
        name: 'Dorian'
    }
}

export function getNextNote(previousNote: string, mode:Mode): string {
    console.log(previousNote, mode);
    return 'a4';
}

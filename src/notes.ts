export interface Note {
    id: number;
    title: string;
    text: string;
}

export const NOTES: Note[] = [
    {
        id: 1,
        title: 'Test Note 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'Test Note 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];
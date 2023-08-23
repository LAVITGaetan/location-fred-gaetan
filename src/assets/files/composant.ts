export interface Composant {
    id: number,
    name: string
    text: string,

}

export const composants: Composant[] = [
    {
        id: 1,
        name: 'titre-principal',
        text: 'Profitez du bivouac,',
    },
    {
        id: 2,
        name: 'titre-secondaire',
        text: 'À vous le confort.',
    },
] 
export interface Composant {
    id: number,
    name: string
    text: string,

}

export const composants: Composant[] = [
    {
        id: 1,
        name: 'titre-principal',
        text: 'Nouveau titre,',
    },
    {
        id: 2,
        name: 'titre-secondaire',
        text: 'À nous le confort.',
    },
    {
        id: 3,
        name: 'top-title',
        text: 'Offre évasion à partir de 25€ par jour',
    },
    {
        id: 4,
        name: 'top-action',
        text: 'Voir l\'offre',
    },
    {
        id: 5,
        name: 'top-href',
        text: 'https://www.dtentes.re/',
    },
    {
        id: 6,
        name: 'sous-titre',
        text: 'Optez pour une approche durable en choisissant la location, et participez ainsi à la protection de notre environnement précieux.',
    },
] 
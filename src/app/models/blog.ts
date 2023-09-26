export interface Blog {
    id: number,
    titre: string,
    nameRoute: string,
    description: string,
    publier_a_la_une: boolean,
    publier: boolean,
    image_small: string,
    image_large: string,
    temps_de_lecture: string,
    date: string,
    contenu: string,
    hashtags: [
        id1: string,
        id2: string,
        id3: string
    ];
}
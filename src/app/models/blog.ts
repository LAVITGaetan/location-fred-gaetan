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
    hashtags: string[];
    author: string;
    conclusion: string;
}
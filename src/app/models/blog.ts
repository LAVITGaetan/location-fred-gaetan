export interface Blog {
    id: number,
    title: string,
    nameRoute: string,
    description: string,
    publier_a_la_une: boolean,
    isPublished: boolean,
    image_small: string,
    image_large: string,
    read_time: string,
    date: string,
    content: string,
    hashtags: string[];
    author: string;
    conclusion: string;
}
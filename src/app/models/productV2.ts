export interface Product {
    id_category: string,
    id_owner: string,
    name: string,
    nameRoute: string,
    description: string,
    thumbnail: string,
    images: string[],
    prices: {
        hour: number
        day: number,
        week_end: number,
        week: number,
        month: number,
    },
    promo: {
        active: boolean,
        debut: string,
        fin: string,
        tarif: string,
    },
    weight: number,
    caution: number,
    video: {
        title: string,
        src: string
    },
}
export interface Product {
    id: number,
    id_category: number,
    name: string,
    nameRoute: string,
    description_short: string,
    description_long: string,
    thumbnail: string,
    images: string[],
    price: {
      day: number,
      week_end: number,
      week: number,
      month: number,
      complement: {
        titre: string,
        montant: number
      }
    }
    weight: number,
    avisweb: string,
    caution: number,
    video: {
      title: string,
      src: string
    },
  }
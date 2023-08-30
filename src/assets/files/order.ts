export interface Orders {
      id: number
      name: string,
      nameRoute: string,
      price: [
          day: number,
          week_end: number,
          week: number,
          month: number,
        ]
      promo: number,
      quantity: number,
      thumbnail: string,
      weight: number,
}
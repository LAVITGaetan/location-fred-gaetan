export interface Product {
  id: number,
  id_category: number,
  name: string,
  nameRoute: string,
  description_short: string,
  description_long: string,
  thumbnail: string,
  images: [
    src1: string,
    src2: string,
    src3: string,
    src4: string,
    src5: string
  ],
  price: [
    day: number,
    week_end: number,
    week: number,
    month: number,
    complement: [
      titre: string,
      montant: number
    ]
  ]
  weight: number,
  avisweb: string,
  caution: number,
  video: [
    title: string,
    src: string
  ],

}

export interface Stock {
  id: number,
  id_product: number,
  id_societe: number,
  id_relai: number,
  codebar: string,
  promo: string,
}

export interface Disponibility {
  id: number,
  id_stock: number,
  depart: string,
  arrive: string,
}

export interface Category {
  id: number,
  name: string,
  thumbnail: string,
  icon: string
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'bivouac',
    thumbnail: 'thumb.png',
    icon: 'bivouac-icon.svg'
  },
  {
    id: 2,
    name: 'plage',
    thumbnail: 'thumb.png',
    icon: 'surf-icon.svg'
  },
]

export const disponibilities: Disponibility[] = [
  {
    id: 1,
    id_stock: 1,
    depart: '25/08/2023',
    arrive: '30/08/2023',
  },
  {
    id: 2,
    id_stock: 1,
    depart: '15/09/2023',
    arrive: '',
  },
  {
    id: 3,
    id_stock: 2,
    depart: '25/08/2023',
    arrive: '02/09/2023',
  },
  {
    id: 4,
    id_stock: 2,
    depart: '20/09/2023',
    arrive: '',
  },
  {
    id: 5,
    id_stock: 3,
    depart: '',
    arrive: '',
  },
]

export const products: Product[] = [
  {
    id: 1,
    id_category: 1,
    name: 'Tente de toit: L=210 l=125 H=95',
    nameRoute: 'Tente-de-toit-de-voiture-125',
    description_short: 'Tente de L:210 l:125 pour 2 places - La tente de toit Fibre de Verre et alu est montée en quelques minutes,Norme Iso 9001',
    description_long: '<p><h3><b>Description</b></h3></p><p>La tente de toit à coque dure offre une nouvelle façon de voir le camping et les vacances d\'aventure en 4x4. Avec un espace intérieur plus grand, elle offre un espace de couchage pour deux adultes et un enfant. La tente à toit rigide PLAYDO a deux portes et deux fenêtres, ce qui crée une excellente ventilation transversale permettant à l\'air de circuler librement dans toute la tente. Ouvrez et fermez en quelques secondes avec le système de support hydraulique unique. Toutes les tentes de toit s\'adaptent au toit de la plupart des véhicules et peuvent être retirées et stockées lorsqu\'elles ne sont pas nécessaires et sont couvertes par une garantie de 1 an sur le tissu, la coque et le mécanisme.</p><p><b>Caractéristiques</b></p><ul><li>1. Élastiques pour le pliage interne du tissu</li><li>2. Structure stable, imperméable et coupe-vent</li><li>3. Échelle en alliage réglable et sac porte-échelle</li><li>4. Recommandé pour 2 adultes</li></ul>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
    images: [
      './assets/images/product/tente-de-toit-fibre-de-verre-hermitage-29-06-2023.webp',
      './assets/images/product/tente-de-toit-fibre-de-verre-01-webp.webp',
      './assets/images/product/tente-de-toit-fibre-de-verre-02-webp.webp',
      './assets/images/product/tente-de-toit-fibre-de-verre-03-webp.webp',
      '',
    ],
    price: [
      70,
      140,
      280,
      300, 
      [
        'prise en charge',
        0,
      ]

    ],
    weight: 50,
    avisweb: 'top',
    caution: 2200,
    video: [
      'video_test',
      'ZFj4WUZiBBc'
    ],
  },
  {
    id: 2,
    id_category: 1,
    name: 'Tente de toit: L=210 l=145 H=95',
    nameRoute: 'Tente-de-toit-de-voiture-145',
    description_short: 'Tente de L:210 l:145 pour 3 places - La tente de toit Fibre de Verre et alu est montée en quelques minutes,Norme Iso 9001',
    description_long: '<p><h3><b>Description</b></h3></p><p>La tente de toit à coque dure offre une nouvelle façon de voir le camping et les vacances d\'aventure en 4x4. Avec un espace intérieur plus grand, elle offre un espace de couchage pour deux adultes et un enfant. La tente à toit rigide PLAYDO a deux portes et deux fenêtres, ce qui crée une excellente ventilation transversale permettant à l\'air de circuler librement dans toute la tente. Ouvrez et fermez en quelques secondes avec le système de support hydraulique unique. Toutes les tentes de toit s\'adaptent au toit de la plupart des véhicules et peuvent être retirées et stockées lorsqu\'elles ne sont pas nécessaires et sont couvertes par une garantie de 1 an sur le tissu, la coque et le mécanisme.</p><p><b>Caractéristiques</b></p><ul><li>1. Élastiques pour le pliage interne du tissu</li><li>2. Structure stable, imperméable et coupe-vent</li><li>3. Échelle en alliage réglable et sac porte-échelle</li><li>4. Recommandé pour 2 adultes</li></ul>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
    images: [
      './assets/images/product/tente-de-toit-fibre-de-verre-hermitage-29-06-2023.webp',
      './assets/images/product/tente-de-toit-fibre-de-verre-01-webp.webp',
      './assets/images/product/tente-de-toit-fibre-de-verre-02-webp.webp',
      './assets/images/product/tente-de-toit-fibre-de-verre-03-webp.webp',
      '',
    ],
    price: [
      40,
      200,
      500,
      1000,
      [
        'prise en charge',
        0,
      ]
    ],
    weight: 30,
    avisweb: 'bof',
    caution: 2450,
    video: [
      'video_test',
      'ZFj4WUZiBBc'
    ],
  },
  {
    id: 3,
    id_category: 1,
    name: 'Tente de toit: L=310 l=140 H=110',
    nameRoute: 'Tente-de-toit-de-bateau-140',
    description_short: 'Tente de L:310 l:140 pour 4 places - La tente de toit Fibre de Verre et alu est montée en quelques minutes,Norme Iso 9001',
    description_long: '<p><h3><b>Description</b></h3></p><p>La tente de toit à coque dure offre une nouvelle façon de voir le camping et les vacances d\'aventure en 4x4. Avec un espace intérieur plus grand, elle offre un espace de couchage pour deux adultes et un enfant. La tente à toit rigide PLAYDO a deux portes et deux fenêtres, ce qui crée une excellente ventilation transversale permettant à l\'air de circuler librement dans toute la tente. Ouvrez et fermez en quelques secondes avec le système de support hydraulique unique. Toutes les tentes de toit s\'adaptent au toit de la plupart des véhicules et peuvent être retirées et stockées lorsqu\'elles ne sont pas nécessaires et sont couvertes par une garantie de 1 an sur le tissu, la coque et le mécanisme.</p><p><b>Caractéristiques</b></p><ul><li>1. Élastiques pour le pliage interne du tissu</li><li>2. Structure stable, imperméable et coupe-vent</li><li>3. Échelle en alliage réglable et sac porte-échelle</li><li>4. Recommandé pour 2 adultes</li></ul>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
    images: [
      './assets/images/product/-toit-soft-A.webp',
      './assets/images/product/-toit-soft-B.webp',
      './assets/images/product/-toit-soft-C.webp',
      './assets/images/product/-toit-soft-D.webp',
      './assets/images/product/-toit-soft-E.webp',
    ],
    price: [
      20,
      200,
      500,
      1000,
      [
        'prise en charge',
        0,
      ]
    ],
    weight: 10,
    avisweb: 'super',
    caution: 1800,
    video: [
      'video_test',
      'ZFj4WUZiBBc'
    ],
  },
  {
    id: 4,
    id_category: 2,
    name: 'Paddle avec gonfleur',
    nameRoute: 'Paddle-avec-gonfleur',
    description_short: 'super paddle',
    description_long: '<paddledeschtml>',
    thumbnail: './assets/images/product/decatlon/dentes.paddle.webp',
    images: [
      './assets/images/product/decatlon/dentes.paddle.webp',
      '',
      '',
      '',
      ''
    ],
    price: [
      90,
      200,
      500,
      1000,
      [
        'prise en charge',
        0,
      ]
    ],
    weight: 15,
    avisweb: 'un paddle',
    caution: 1800,
    video: [
      'video_surf',
      'OMx3W-0-5dM'
    ],
  },
];

export const stocks: Stock[] = [
  {
    id: 1,
    id_product: 1,
    id_societe: 2,
    id_relai: 1,
    codebar: 'CB001',
    promo: 'PROMO10',
  },
  {
    id: 2,
    id_product: 1,
    id_societe: 2,
    id_relai: 1,
    codebar: 'CB002',
    promo: 'PROMO20',
  },
  {
    id: 3,
    id_product: 2,
    id_societe: 2,
    id_relai: 2,
    codebar: 'CB003',
    promo: 'PROMO30',
  },
  {
    id: 4,
    id_product: 3,
    id_societe: 2,
    id_relai: 2,
    codebar: 'PB888',
    promo: 'PROMO_paddle',
  }
];
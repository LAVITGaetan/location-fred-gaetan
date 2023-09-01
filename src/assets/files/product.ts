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
    description_long: '<p>La tente de toit à coque dure offre une nouvelle façon de voir le camping et les vacances d\'aventure en 4xAvec un espace intérieur plus grand, elle offre un espace de couchage pour deux adultes et un enfant. La tente à toit rigide PLAYDO a deux portes et deux fenêtres, ce qui crée une excellente ventilation transversale permettant à l\'air de circuler librement dans toute la tente. Ouvrez et fermez en quelques secondes avec le système de support hydraulique unique. Toutes les tentes de toit s\'adaptent au toit de la plupart des véhicules et peuvent être retirées et stockées lorsqu\'elles ne sont pas nécessaires et sont couvertes par une garantie de 1 an sur le tissu, la coque et le mécanisme.</p><h3 class="product-detail-subtitle">Caractéristiques</h3><ul class="product-detail-list"><li>Élastiques pour le pliage interne du tissu</li><li>Structure stable, imperméable et coupe-vent</li><li>Échelle en alliage réglable et sac porte-échelle</li><li>Recommandé pour 2 adultes</li></ul>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-hermitage-29-06-2023.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-02.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-03.webp',
    ],
    price: {
      day: 10,
      week_end: 30,
      week: 50,
      month: 100,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 50,
    avisweb: 'top',
    caution: 2200,
    video: {
      title: 'video_test',
      src: 'ZFj4WUZiBBc'
  },
  },
  {
    id: 2,
    id_category: 1,
    name: 'Tente de toit: L=210 l=145 H=95',
    nameRoute: 'Tente-de-toit-de-voiture-145',
    description_short: 'Tente de L:210 l:145 pour 3 places - La tente de toit Fibre de Verre et alu est montée en quelques minutes,Norme Iso 9001',
    description_long: '<p>La tente de toit à coque dure offre une nouvelle façon de voir le camping et les vacances d\'aventure en 4xAvec un espace intérieur plus grand, elle offre un espace de couchage pour deux adultes et un enfant. La tente à toit rigide PLAYDO a deux portes et deux fenêtres, ce qui crée une excellente ventilation transversale permettant à l\'air de circuler librement dans toute la tente. Ouvrez et fermez en quelques secondes avec le système de support hydraulique unique. Toutes les tentes de toit s\'adaptent au toit de la plupart des véhicules et peuvent être retirées et stockées lorsqu\'elles ne sont pas nécessaires et sont couvertes par une garantie de 1 an sur le tissu, la coque et le mécanisme.</p><h3 class="product-detail-subtitle">Caractéristiques</h3><ul class="product-detail-list"><li>Élastiques pour le pliage interne du tissu</li><li>Structure stable, imperméable et coupe-vent</li><li>Échelle en alliage réglable et sac porte-échelle</li><li>Recommandé pour 2 adultes</li></ul>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-02.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-03.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-04.webp',
    ],
    price: {
      day: 10,
      week_end: 30,
      week: 50,
      month: 100,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 30,
    avisweb: 'bof',
    caution: 2450,
    video: {
      title: 'video_test',
      src :'ZFj4WUZiBBc'
    },
  },
  {
    id: 3,
    id_category: 1,
    name: 'Tente de toit: L=310 l=140 H=110',
    nameRoute: 'Tente-de-toit-de-bateau-140',
    description_short: 'Paddle Itiwit avec gonfleur électrique.Très stable et facile, pour des gabarits supérieurs à 80 kg. Idéal pour l Hermitage ou Etang Salé',
    description_long: 'Paddle Itiwit avec gonfleur électrique.Très stable et facile, pour des gabarits supérieurs à 80 kg. Idéal pour l Hermitage ou Etang Salé',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-01.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-02.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-03.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-tente-de-toit-fibre-de-verre-04.webp',
    ],
    price: {
      day: 10,
      week_end: 30,
      week: 50,
      month: 100,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 10,
    avisweb: 'super',
    caution: 1800,
    video: {
      title:'video_test',
      src: 'ZFj4WUZiBBc'
    },
  },
  {
    id: 4,
    id_category: 2,
    name: 'Paddle avec gonfleur',
    nameRoute: 'Paddle-avec-gonfleur',
    description_short: 'super paddle',
    description_long: 'Description longue du paddle',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-paddle.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-paddle.webp',
    ],
    price: {
      day: 10,
      week_end: 30,
      week: 50,
      month: 100,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 15,
    avisweb: 'un paddle',
    caution: 1800,
    video: {
      title: 'Vous fournissons un gonfleur électrique !',
      src: 'OMx3W-0-5dM'
    },
  },
  {
    id: 5,
    id_category: 1,
    name: 'Tente Qaou V5 - 3 en 1',
    nameRoute: 'Tente-Qaou-V5-pack-3en1',
    description_short: 'Le toit de la tente se transforme en hamac ou en tarp vous pourrez donc moduler l’utilisation de votre Qaou en fonction de vos besoins',
    description_long: '<p><b>La Qaou V5 est la dernière version créer par Qaou. Elle bénéficie des 5 années de recherches et développement pour améliorer les performances de nos tentes</b>.<\p><p>Sous tente: Polyamide  et polyester PU 4000 mm<\p><p>Arceaux: Aluminium 8,5 mm<\p><p>1 Double toit modulable: Polyamide 70 D ripstop PU 2000 mm (1 seul double toit / Hamac est fourni dans ce pack)<\p><p>Ce pack vous offre les fonctions suivantes:<\p><p>Tente / Hamac / Abri<\p><p><i>Peut être complété par la suite avec un hamac supplémentaire et un kit de fixation pour avoir l’équivalent d’un pack Adventure. (Tente  / Hamac  / Abri / Tarp)<\i><\p><p>Tente 2 Personnes. Qaou est conçue pour s’adapter à différentes situations, partout où vous irez Qaou s’adaptera !<\p><p>Le toit de la tente se transforme en hamac ou en tarp vous pourrez donc moduler l\’utilisation de votre Qaou en fonction de vos besoins<\p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-v5-Qaou-tente-3-en-1-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-A.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-B.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-C.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-D.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-E.webp'
    ],
    price: {
      day: 22,
      week_end: 44,
      week: 66,
      month: 100,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 2.4,
    avisweb: 'tente quaou de qualité',
    caution: 179,
    video: {
      title: 'Adventure V5 - 3 en 1',
      src: 'MaX89pkMqm0'
    },
  },
  {
    id: 6,
    id_category: 1,
    name: 'Adventure V5 - 6 en 1',
    nameRoute: 'Tente-Qaou-Adventure-V5-pack-6-en-1',
    description_short: 'Le toit de la tente se transforme en hamac ou en tarp vous pourrez donc moduler l’utilisation de votre Qaou en fonction de vos besoins',
    description_long: '<p><b>La Qaou V5 est la dernière version créer par Qaou. Elle bénéficie des 5 années de recherches et développement pour améliorer les performances de nos tentes</b>.<\p><p>Sous tente: Polyamide  et polyester PU 4000 mm<\p><p>Arceaux: Aluminium 8,5 mm<\p><p>1 Double toit modulable: Polyamide 70 D ripstop PU 2000 mm (1 seul double toit / Hamac est fourni dans ce pack)<\p><p>Ce pack vous offre les fonctions suivantes:<\p><p>Tente / Hamac / Abri<\p><p><i>Peut être complété par la suite avec un hamac supplémentaire et un kit de fixation pour avoir l’équivalent d’un pack Adventure. (Tente  / Hamac  / Abri / Tarp)<\i><\p><p>Tente 2 Personnes. Qaou est conçue pour s’adapter à différentes situations, partout où vous irez Qaou s’adaptera !<\p><p>Le toit de la tente se transforme en hamac ou en tarp vous pourrez donc moduler l\’utilisation de votre Qaou en fonction de vos besoins<\p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-tente-v5-Qaou-tente-3-en-1-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-A.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-B.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-C.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-D.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-v5-3-en1-E.webp'
    ],
    price: {
      day: 25,
      week_end: 50,
      week: 75,
      month: 125,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 3.3,
    avisweb: 'tente quaou de qualité',
    caution: 239,
    video: {
      title: 'Adventure V5 - 6 en 1',
      src :'MaX89pkMqm0'
    },
  },
  {
    id: 7,
    id_category: 1,
    name: 'Bâton de marche ergonomique',
    nameRoute: 'Paire-de-bâtons-de-marche-ergonomiques',
    description_short: 'Bâtons de marche Haut de gamme.Prix constaté Ile de la Réunion sur même qualité : 70 euros..',
    description_long: '<b>Bâtons de marche Qaou ergonomiques, réglage télescopique très utile pour aider lors d’une marche mais également pour augmenter les possibilités de la tente Qaou.</b> <p>Poids : 300 gr un bâton</p><p>Fournit avec / Une housse de rangement, 2 pointes métal de rechanges, 2 rondelles trekking, 2 rondelles touring, 2 type d’embouts de protections en caoutchouc lors de passages sur asphalte et sur chemin sec.</p><p>Système de verrouillage par clip en aluminium (+ molette de force de serrage sur chaque points de serrage)</p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Baton-de-marche-plie-600x600-webp.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Baton-de-marche-plie-600x600-webp.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-baton-de-marche-ccessoire.webp',
      './assets/images/product/dtentes-ile-de-la-reunion-Baton-de-marche.jpeg',
    ],
    price: {
      day: 5,
      week_end: 10,
      week: 15,
      month: 20,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.3,
    avisweb: 'tente quaou de qualité',
    caution: 59,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 8,
    id_category: 1,
    name: 'Hamac / double toit vert',
    nameRoute: 'Qaou-Hamac-double-toi-vert',
    description_short: 'Fonctions : Toit pour la sous tente + Auvent à la tente + Grand tarp avec un autre hamac Qaou (Mousqueton: non fournis) - toile en Polyamide 70D',
    description_long: '<p<i>Le hamac multifonction Qaou est une toile en Polyamide verte qui peut être suspendue entre deux points d’ancrage.</i><\p><p>-Livré avec les boucles pour former le hamac</p><p>-Livré avec son sac de rangement.</p><p>FONCTIONS /</p><p>-Toit pour la sous tente QAOU</p><p>-Auvent à la tente</p><p>-Grand tarp avec un autre hamac Qaou</p><p><i>Les mousquetons et les sangles nécessaires pour suspendre le hamac ne sont pas fournis dans ce produit.</i></p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Qaou-hamacV4-1-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-hamacV4-1-2400x2400.webp',
    ],
    price: {
      day: 10,
      week_end: 20,
      week: 30,
      month: 40,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.6,
    avisweb: '',
    caution: 49,
    video: {
      title: 'Hamac Qaou Double toit',
      src: 'sIVkaVMPMKk'
    },
  },
  {
    id: 9,
    id_category: 1,
    name: 'Kit fixation hamac 3m',
    nameRoute: 'Qaou-Kit-fixation-hamac-3m',
    description_short: 'Les sangles de fixation et les mousquetons permettent d installer le hamac Qaou sur deux points fixes, 2 sangles de 3m - 150 Kg / sangle',
    description_long: '<p>-2 sangles de 3m de résistance de 150 Kg par sangle.</p><p>-Chaque sangle dispose de 9 boucles d’attache.</p><p>-2 mousquetons</p><p>-Livré dans son sac de rangement.</p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Qaou-Sangle-3m-4-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-Sangle-3m-4-600x600.webp',
    ],
    price: {
      day: 2,
      week_end: 4,
      week: 6,
      month: 8,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.42,
    avisweb: '',
    caution: 22,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 10,
    id_category: 1,
    name: 'Matelas Randonnée multifonctionel',
    nameRoute: 'Qaou-Matelas-Randonnée',
    description_short: 'Matelas gonflable ultra compact qui se gonfle grâce à son sac de rangement!.Il s’adapte aussi bien au hamac qu’à la tente : 1 pers',
    description_long: '<h1>Le sleeping pad Qaou est un matelas gonflable orange ultra compact qui se gonfle grâce à son sac de rangement.</h1><p>Épaisseur / 5 cm</p><p>Longueur / 210 cm</p><p>Largeur / 60 cm</p><p>Poids / 550 gr sans son sac de rangement / 650 gr avec son sac de rangement</p><p>Waterproof – R Value 1,3</p><p>Conçu pour une personne il s’adapte aussi bien au hamac qu’à la tente Qaou.</p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Qaou-Sleeping-pad2-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-Sleeping-pad2-2400x2400.webp',
    ],
    price: {
      day: 8,
      week_end: 16,
      week: 24,
      month: 32,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.65,
    avisweb: '',
    caution: 61,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 11,
    id_category: 1,
    name: 'Couteau Suisse Huntsman Wood',
    nameRoute: 'Couteau-Suisse-Huntsman-Wood-victorinox',
    description_short: 'Couteau de poche de taille moyenne avec côtes en noyer : Collection spéciale Huntsman : 13 fonctions dont une paire de ciseaux',
    description_long: '<h1>Collection spéciale du célèbre couteau suisse Huntsman en bois de noyer avec marquage Qaou et Victorinox</h1><p>Aussi fonctionnel qu’élégant, le couteau suisse Huntsman Wood dissimule pas moins de 13 outils essentiels sous des côtes très fines en bois de noyer résistant et noble. </p><p> C’est ce même bois aux veinures naturelles qui donne à chacun des couteaux son caractère unique et artisanal et un toucher incomparable. </p><p> Mais n’allez pas croire pour autant qu’il s’agit d’un couteau délicat à manier avec précaution.</p><p>  Ce compagnon noble et léger est pensé pour le quotidien et pour chaque aventure susceptible de se présenter, que vous l’ayez dans la poche ou dans votre boîte à outils.',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Qaou-victorinox-1-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-victorinox-1-2400x2400.webp',
    ],
    price: {
      day: 2,
      week_end: 4,
      week: 6,
      month: 8,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.5,
    avisweb: '',
    caution: 50,
    video: {
      title: 'Multples utilisations du Huntsman wood',
      src:'EmY9WEl4DDw'
    },
  },
  {
    id: 12,
    id_category: 1,
    name: 'Aiguiseur/Affuteur Sharpal 6en1',
    nameRoute: 'Aiguiseur/Affuteur-Sharpal-101N-6-en-1',
    description_short: 'Aiguiseur de couteaux de poche 6 en 1 et outil de survie, avec allume-feu, sifflet et tige d affûtage en diamant, répare, restaure et affûte rapidement.',
    description_long: '<p>Cet outil permet d’aiguiser et d’affuter vos couteaux, scies, ou hameçons sur le terrain.</p><p> Léger (45g) et compact (9*4*1,5 cm) il tient dans une poche et permet de rattraper une lame qui a subi un choc facilement.</p><p>L’option sifflet peut s’avérer utile dans certaines situations, un plus qui est appréciable.</p><p> Au même titre que la pierre à feu, cet outil peut vous sauver de certaines situations, lorsqu’on a oublié son briquet pour le réchaud, par exemple.<p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Qaou-aiguiseur-sharp-0-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Qaou-aiguiseur-sharp-0-2400x2400.webp',
    ],
    price: {
      day: 2,
      week_end: 4,
      week: 6,
      month: 8,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.5,
    avisweb: '',
    caution: 13.96,
    video: {
      title:'Aiguiseur multifonctions',
      src:'5YMamVDTOUs'
    },
  },
  {
    id: 13,
    id_category: 1,
    name: 'Tour de cou multifonctionnel',
    nameRoute: 'Tour-de-cou-multifonction-original-Buff-Qaou',
    description_short: 'Confortable, extensible et doté d’une protection solaire, vous aurez une grande modularité d’utilisation: du pratique et de l’esthétique!',
    description_long: '<p>Tour de cou multifonction Original Buff X Qaou conçu à partir de bouteilles plastiques recyclées.</p><p>Le nouveau multifonctionnel classique: Plus flexible, fibre recyclée, protection solaire et sans coutures.</p><p>Technologie Ultrastretch : Ajustement dans 4 directions pour une meilleure tenue et un confort optimal.</p><p>Profitez de la multifonctionnalité : choisissez comment le porter !</p> <p>Confortable, extensible et doté d’une protection solaire, avec notre tour de cou vous aurez une grande modularité d’utilisation: du pratique et de l’esthétique!  Ce produit multifonction est conçu pour une utilisation en toute saison et au cours de toutes vos aventures: trek, randonnée, cyclisme, moto…</p><p>Taille unique. Conçu pour adultes.</p><p>95% polyestère recyclé, 5% élasthanne</p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-buffxqaou2-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Buffxqaou2-2400x2400.webp',    ],
    price: {
      day: 2,
      week_end: 4,
      week: 6,
      month: 8,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.5,
    avisweb: '',
    caution: 16.96,
    video: {
      title: 'Tour de cou multifonctions',
      src: '3hKn6_adBMw'
    },
  },
  {
    id: 14,
    id_category: 1,
    name: 'Trousse de Secours Qaou',
    nameRoute: 'Trousse-de-Secours-Qaou',
    description_short: '38 articles:Trousse de secours pour les pratiques Outdoor tel que la randonnée ou le bivouac. Fabriqué en France',
    description_long: '<p>Trousse de secours composée par l’équipe Qaou spécialement imaginée pour les pratiques Outdoor tel que la randonnée ou le bivouac,</p><p>elle est composée de :</p><p>-5 compresses stériles,</p><p>-3 compresses de Chlorhexidine (désinfection plaies légères)</p><p>-2 compresses Arnica ( choc /bleus)</p><p>-15 pansements</p><p>-1 bande</p><p>-1 paire de ciseaux</p><p>-2 épingles à nourrice</p><p>-1 couverture de survie</p><p>-1 pince à écharde</p><p>-3 comprimés de micropure</p><p>-1 pince à tique avec loupe</p><p>-1 bougie chauffe plat</p><p>-1 gel anti brûlure.</p><p>-1 kit de couture.</p><p>Le tout dans une trousse made in France dépliante pratique et compacte.</p>',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-troussedesecours-300x300.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-troussedesecours-600x600.webp',
    ],
    price: {
      day: 5,
      week_end: 10,
      week: 15,
      month: 20,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0.2,
    avisweb: '',
    caution: 35,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 15,
    id_category: 1,
    name: 'Porte-Bebe',
    nameRoute: 'Porte-Bebe',
    description_short: 'Porte Bébé Deuter. Pour vos ballades et randos. Poids maximum 18 kg - Pare-soleil, siège ajustable et un dos respirant',
    description_long: 'à completer',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-porte-bebe.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-porte-bebe.webp',
    ],
    price: {
      day: 15,
      week_end: 30,
      week: 45,
      month: 75,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0,
    avisweb: '',
    caution: 100,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 16,
    id_category: 1,
    name: 'Pompe électrique-16psiA',
    nameRoute: 'Pompe-électrique-16psiA',
    description_short: 'Livré complet avec 5 embouts, 2 tailles de joint, câble allume-cigare :SUP gonflable, kayaks, bateaux, matelas, etc',
    description_long: 'Livré avec deux joints de taille différents pour les SUP gonflable, il ne faut pas hésiter à en retirer un et à alterner pour trouver celui qui s\'adapte parfaitement !',
    thumbnail: './assets/images/product/flysurf/dtentes.pompe-electrique-16PSI-A.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-pompe-electrique-16PSI-A.webp',
    ],
    price: {
      day: 6,
      week_end: 12,
      week: 18,
      month: 24,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0,
    avisweb: '',
    caution: 100,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 17,
    id_category: 1,
    name: 'Pompe électrique-16psiB',
    nameRoute: 'Pompe-électrique-16psiB',
    description_short: 'Livré complet avec 5 embouts, 2 tailles de joint, câble allume-cigare :SUP gonflable, kayaks, bateaux, matelas, etc',
    description_long: 'Livré complet avec 5 embouts, 2 tailles de joint, câble allume-cigare :SUP gonflable, kayaks, bateaux, matelas, etc',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-pompe-electrique-16PSI-B.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-pompe-electrique-16PSI-B.webp',
    ],
    price: {
      day: 6,
      week_end: 12,
      week: 18,
      month: 24,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 0,
    avisweb: '',
    caution: 100,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 19,
    id_category: 1,
    name: 'Tonnelle Apenaz',
    nameRoute: 'Tonnelle-Apenaz-10-personnes-etanches',
    description_short: 'Tonnelle Etanche 10 personnes',
    description_long: 'Tonnelle Etanche 10 personnes',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-dtentes-tonelle-apenaz-10-personnes.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-dtentes-tonelle-apenaz-10-personnes.webp',
    ],
    price: {
      day: 8,
      week_end: 17,
      week: 40,
      month: 80,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 8,
    avisweb: '',
    caution: 175,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 20,
    id_category: 1,
    name: 'EcoFlow 300 watt',
    nameRoute: 'EcoFlow-RIVER-2-Pro',
    description_short: 'ECOFLOW 300Watt idéale permet d’alimenter vos appareils habituels où que vous soyez ! Pratique et fiable, elle trouvera facilement une place n’importe où grâce à sa petite taille.',
    description_long: 'ECOFLOW 300Watt idéale permet d’alimenter vos appareils habituels où que vous soyez ! Pratique et fiable, elle trouvera facilement une place n’importe où grâce à sa petite taille.',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-Ecoflow-delta.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-Ecoflow-delta.webp',
    ],
    price: {
      day: 10,
      week_end: 20,
      week: 50,
      month: 150,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 55,
    avisweb: '',
    caution: 800,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 21,
    id_category: 1,
    name: 'Porte Vélo',
    nameRoute: 'Porte-vélo',
    description_short: 'Porte vélo - Nous demander pour les dimensions',
    description_long: 'Porte vélo - Nous demander pour les dimensions',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-porte-velos-hayon-300-2-3-velos.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-porte-velos-hayon-300-2-3-velos.webp',
    ],
    price: {
      day: 10,
      week_end: 15,
      week: 30,
      month: 45,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 15,
    avisweb: '',
    caution: 60,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 22,
    id_category: 1,
    name: 'Sac à dos homme 55 - 10L',
    nameRoute: 'Sac-a-dos-homme-55+10L',
    description_short: 'Conçu pour les randonnées de plusieurs jours, il offre d\'excellentes performances et un confort optimal aux passionnés de voyages.',
    description_long: 'Conçu pour les randonnées de plusieurs jours, il offre d\'excellentes performances et un confort optimal aux passionnés de voyages.',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-sac-ados-homme-55+10.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-sac-ados-homme-55+10.webp',
    ],
    price: {
      day: 6,
      week_end: 12,
      week: 30,
      month: 50,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 3.3,
    avisweb: '',
    caution: 90,
    video: {
      title: '',
      src: ''
    },
  },
  {
    id: 23,
    id_category: 1,
    name: 'Sac à dos femme 55 - 10L',
    nameRoute: 'Sac-a-dos-femme-55+10L',
    description_short: 'Conçu pour les randonnées de plusieurs jours, il offre d\'excellentes performances et un confort optimal aux passionnés de voyages.',
    description_long: 'Conçu pour les randonnées de plusieurs jours, il offre d\'excellentes performances et un confort optimal aux passionnés de voyages.',
    thumbnail: './assets/images/product/dtentes-ile-de-la-reunion-sac-ados-femme-55+10.webp',
    images: [
      './assets/images/product/dtentes-ile-de-la-reunion-sac-ados-femme-55+10.webp',
    ],
    price: {
      day: 6,
      week_end: 12,
      week: 30,
      month: 50,
      complement: {
        titre: "Prise en charge",
        montant: 10
      }
    },
    weight: 3.3,
    avisweb: '',
    caution: 90,
    video: {
      title: '',
      src: ''
    },
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
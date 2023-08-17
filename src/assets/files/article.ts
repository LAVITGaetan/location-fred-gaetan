export interface Article {
    id: number,
    titre: string,
    nameRoute: string,
    description: string,
    publier_a_la_une: boolean,
    publier: boolean,
    image_200x200: string,
    image_large: string,
    temps_de_lecture: string;
    hashtags: [
        id1: string,
        id2: string,
        id3: string
    ];
}

export const articles: Article[] = [
    {
        id: 1,
        titre: "Bivouac au cœur de la nature réunionnaise",
        nameRoute: 'Article-bivouac-nature-camping',
        description: "Découvrez les meilleurs spots de bivouac à La Réunion pour une expérience de camping inoubliable.",
        publier_a_la_une: false,
        publier: true,
        image_200x200: "string",
        image_large: "hiking-image-800-533.jpg",
        temps_de_lecture: "5 min",
        hashtags: ["bivouac", "nature", "camping"]
    },
    {
        id: 2,
        titre: "Les vagues spectaculaires de La Réunion pour les passionnés de surf",
        nameRoute: 'Article-surf-plages-océan',
        description: "Découvrez les plages et les conditions idéales pour le surf à La Réunion, un paradis pour les surfeurs.",
        publier_a_la_une: false,
        publier: true,
        image_200x200: "string",
        image_large: "surf-thumbnail-800-423.jpg",
        temps_de_lecture: "6 min",
        hashtags: ["surf", "plages", "océan"]
    },
    {
        id: 3,
        titre: "Randonnées inoubliables à La Réunion : sentiers et paysages à couper le souffle",
        nameRoute: 'Article-randonnée-sentiers-paysages',
        description: "Explorez les sentiers de randonnée les plus magnifiques de La Réunion et profitez de vues panoramiques exceptionnelles.",
        publier_a_la_une: true,
        publier: true,
        image_200x200: "lien_image_article_3.jpg",
        image_large: "reunion-mountains-volcano-640-480.jpg",
        temps_de_lecture: "7 min",
        hashtags: ["randonnée", "sentiers", "paysages"]
    },
    {
        id: 4,
        titre: "Plongée sous-marine à La Réunion : Explorez les fonds marins d'exception",
        nameRoute: 'Article-plongée-fonds_marins-biodiversité',
        description: "Découvrez les sites de plongée les plus impressionnants de La Réunion et rencontrez une biodiversité marine incroyable.",
        publier_a_la_une: true,
        publier: true,
        image_200x200: "lien_image_article_4.jpg",
        image_large: "hiking-image-800-533.jpg",
        temps_de_lecture: "6 min",
        hashtags: ["plongée", "fonds_marins", "biodiversité"]
    },
    {
        id: 5,
        titre: "Saveurs créoles : Gastronomie et cuisine traditionnelle de La Réunion",
        nameRoute: 'Article-gastronomie-cuisine-saveurs_creoles',
        description: "Explorez les délices culinaires de La Réunion, des plats épicés aux desserts exotiques, pour une expérience gustative unique.",
        publier_a_la_une: false,
        publier: true,
        image_200x200: "lien_image_article_5.jpg",
        image_large: "hiking-image-800-533.jpg",
        temps_de_lecture: "7 min",
        hashtags: ["gastronomie", "cuisine", ""]
    },
    {
        id: 6,
        titre: "Escalade et alpinisme à La Réunion : Défiez les sommets volcaniques",
        nameRoute: 'Article-escalade-alpinisme-volcans',
        description: "Découvrez les sites d'escalade uniques de l'île, des parois rocheuses aux volcans éteints, pour les amateurs de sensations fortes.",
        publier_a_la_une: false,
        publier: true,
        image_200x200: "lien_image_article_6.jpg",
        image_large: "hiking-image-800-533.jpg",
        temps_de_lecture: "8 min",
        hashtags: ["escalade", "alpinisme", "volcans"]
    },

]
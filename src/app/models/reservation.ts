export interface Reservation {
    article_id: string,
    owner : {
        type:string, // Société ou Individuel => permet de récupérer les données de l'owner liées a l'article depuis `companies` ou `users`
        id:string
    }
    user_id: string,
    startDate: string,
    endDate: string,
}
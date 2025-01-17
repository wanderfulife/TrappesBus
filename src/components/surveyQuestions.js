export const questions = [
  {
    id: "origine",
    text: "De quelle commune venez-vous ?",
    options: [
      { id: 1, text: "Trappes", next: "origine_quartier" },
      { id: 2, text: "Autre", next: "origine_autre" }
    ]
  },
  {
    id: "origine_quartier",
    text: "Précisez le quartier",
    options: [
      { id: 1, text: "La Plaine de Neauphle", next: "ligne_train" },
      { id: 2, text: "Le Village - Aérostat - Sand Pergaud Verlaine", next: "ligne_train" },
      { id: 3, text: "Jaurès Gare - Jean Macé", next: "ligne_train" },
      { id: 4, text: "Le Moulin de la Galette", next: "ligne_train" },
      { id: 5, text: "Les Merisiers - Farges Thorez - Cité Nouvelle", next: "ligne_train" },
      { id: 6, text: "La Boissière", next: "ligne_train" }
    ]
  },
  {
    id: "origine_autre",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "ligne_train"
  },
  {
    id: "ligne_train",
    text: "Quelle ligne allez-vous prendre ?",
    options: [
      { id: 1, text: "Ligne N", next: "destination" },
      { id: 2, text: "Ligne U", next: "destination" }
    ]
  },
  {
    id: "destination",
    text: "Quelle sera votre commune d'arrivée ?",
    usesCommuneSelector: true,
    next: "motif_deplacement"
  },
  {
    id: "motif_deplacement",
    text: "Ce lieu est-il ?",
    options: [
      { id: 1, text: "Domicile <> travail", next: "mode_transport" },
      { id: 2, text: "Autre déplacement professionnel", next: "mode_transport" },
      { id: 3, text: "Domicile <> étude", next: "mode_transport" },
      { id: 4, text: "Domicile <> achat, loisirs, visite de la famille/amis", next: "mode_transport" },
      { id: 5, text: "Domicile <> rdv médical ou administratif", next: "mode_transport" },
      { id: 6, text: "Autre", next: "motif_deplacement_autre" }
    ]
  },
  {
    id: "motif_deplacement_autre",
    text: "Précisez",
    freeText: true,
    next: "mode_transport"
  },
  {
    id: "mode_transport",
    text: "Par quel mode de transport êtes-vous arrivés à la Gare/allez-vous quitter la Gare?",
    options: [
      { id: 1, text: "Marche à pied", next: "frequence" },
      { id: 2, text: "Bus/car", next: "frequence" },
      { id: 3, text: "Voiture conducteur", next: "stationnement_voiture" },
      { id: 4, text: "Voiture passager", next: "frequence" },
      { id: 5, text: "Vélo stationné en gare", next: "stationnement_velo" },
      { id: 6, text: "Vélo embarqué dans le train", next: "frequence" },
      { id: 7, text: "Deux-roues motorisés", next: "frequence" },
      { id: 8, text: "Autre (trottinettes...)", next: "frequence" }
    ]
  },
  {
    id: "stationnement_voiture",
    text: "Si vous êtes venus en voiture, où êtes-vous stationnés ?",
    options: [
      { id: 1, text: "Parking de la gare Nord", next: "frequence" },
      { id: 2, text: "Parking de la gare Sud", next: "frequence" },
      { id: 3, text: "Sur voirie au nord de la gare", next: "frequence" },
      { id: 4, text: "Sur voirie au sud de la gare", next: "frequence" }
    ]
  },
  {
    id: "stationnement_velo",
    text: "Si vous êtes venus à vélo, où l'avez-vous stationné ?",
    options: [
      { id: 1, text: "Sur un arceau vélo proche de la gare", next: "frequence" },
      { id: 2, text: "Dans le parking sécurisé de la gare", next: "frequence" },
      { id: 3, text: "Sur du mobilier urbain à proximité de la gare", next: "frequence" },
      { id: 4, text: "Autre", next: "stationnement_velo_autre" }
    ]
  },
  {
    id: "stationnement_velo_autre",
    text: "Précisez le lieu de stationnement",
    freeText: true,
    next: "frequence"
  },
  {
    id: "frequence",
    text: "A quelle fréquence faites-vous le même trajet qu'aujourd'hui ?",
    options: [
      { id: 1, text: "Tous les jours de la semaine hors week-end", next: "age" },
      { id: 2, text: "2 à 3 fois par semaine", next: "age" },
      { id: 3, text: "1 fois par semaine", next: "age" },
      { id: 4, text: "Moins d'une fois par semaine", next: "age" },
      { id: 5, text: "Moins d'une fois par mois", next: "age" }
    ]
  },
  {
    id: "age",
    text: "Dans quelle tranche d'âge vous situez-vous ?",
    options: [
      { id: 1, text: "moins de 18 ans", next: "fin" },
      { id: 2, text: "18-24 ans", next: "fin" },
      { id: 3, text: "25-34 ans", next: "fin" },
      { id: 4, text: "35-44 ans", next: "fin" },
      { id: 5, text: "45-54 ans", next: "fin" },
      { id: 6, text: "55-64 ans", next: "fin" },
      { id: 7, text: "65 ans et plus", next: "fin" }
    ]
  }
];

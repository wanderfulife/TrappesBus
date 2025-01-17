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
      { id: 1, text: "La Plaine de Neauphle", next: "ligne_bus" },
      { id: 2, text: "Le Village - Aérostat - Sand Pergaud Verlaine", next: "ligne_bus" },
      { id: 3, text: "Jaurès Gare - Jean Macé", next: "ligne_bus" },
      { id: 4, text: "Le Moulin de la Galette", next: "ligne_bus" },
      { id: 5, text: "Les Merisiers - Farges Thorez - Cité Nouvelle", next: "ligne_bus" },
      { id: 6, text: "La Boissière", next: "ligne_bus" }
    ]
  },
  {
    id: "origine_autre",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "ligne_bus"
  },
  {
    id: "ligne_bus",
    text: "Quelle ligne allez-vous prendre ?",
    options: [
      { id: 3, text: "5104 (anciennement 414)", next: "correspondance" },
      { id: 1, text: "5105 (anciennement 415)", next: "correspondance" },
      { id: 2, text: "5106 (anciennement 418)", next: "correspondance" },
      { id: 3, text: "5107 (anciennement 417)", next: "correspondance" },
      { id: 3, text: "5130 (anciennement 430)", next: "correspondance" },
      { id: 3, text: "5132 (anciennement 402)", next: "correspondance" }
    ]
  },
  {
    id: "correspondance",
    text: "Avez-vous pris ou allez-vous prendre une correspondance ?",
    options: [
      { id: 1, text: "Oui", next: "type_correspondance" },
      { id: 2, text: "Non", next: "mode_transport" }
    ]
  },
  {
    id: "type_correspondance",
    text: "Si oui laquelle ?",
    options: [
      { id: 1, text: "Train", next: "correspondance_detail" },
      { id: 2, text: "Bus", next: "correspondance_detail" }
    ]
  },
  {
    id: "correspondance_detail",
    text: "Précisez la ligne",
    freeText: true,
    next: "motif_deplacement"
  },
  {
    id: "mode_transport",
    text: "Par quel mode de transport êtes-vous arrivés à la Gare/allez-vous quitter la Gare?",
    options: [
      { id: 1, text: "Marche à pied", next: "motif_deplacement" },
      { id: 2, text: "Bus/car", next: "motif_deplacement" },
      { id: 3, text: "Voiture conducteur", next: "stationnement_voiture" },
      { id: 4, text: "Voiture passager", next: "motif_deplacement" },
      { id: 5, text: "Vélo stationné en gare", next: "stationnement_velo" },
      { id: 6, text: "Vélo embarqué dans le train", next: "motif_deplacement" },
      { id: 7, text: "Deux-roues motorisés", next: "motif_deplacement" },
      { id: 8, text: "Autre (trottinettes...)", next: "transport_detail" }
    ]
  },
  {
    id: "transport_detail",
    text: "Précisez le mode de transport",
    freeText: true,
    next: "motif_deplacement"
  },
  {
    id: "stationnement_voiture",
    text: "Si vous êtes venus en voiture, où êtes-vous stationnés ?",
    options: [
      { id: 1, text: "Parking de la gare Nord", next: "motif_deplacement" },
      { id: 2, text: "Parking de la gare Sud", next: "motif_deplacement" },
      { id: 3, text: "Sur voirie au nord de la gare", next: "motif_deplacement" },
      { id: 4, text: "Sur voirie au sud de la gare", next: "motif_deplacement" }
    ]
  },
  {
    id: "stationnement_velo",
    text: "Si vous êtes venus à vélo, où l'avez-vous stationné ?",
    options: [
      { id: 1, text: "Sur un arceau vélo proche de la gare", next: "motif_deplacement" },
      { id: 2, text: "Dans le parking sécurisé de la gare", next: "motif_deplacement" },
      { id: 3, text: "Sur du mobilier urbain à proximité de la gare", next: "motif_deplacement" },
      { id: 4, text: "Autre", next: "stationnement_velo_autre" }
    ]
  },
  {
    id: "stationnement_velo_autre",
    text: "Précisez le lieu de stationnement",
    freeText: true,
    next: "motif_deplacement"
  },
  {
    id: "motif_deplacement",
    text: "motif du deplacement, Ce lieu est-il ..?",
    options: [
      { id: 1, text: "Domicile <> travail", next: "frequence" },
      { id: 2, text: "Autre déplacement professionnel", next: "frequence" },
      { id: 3, text: "Domicile <> étude", next: "frequence" },
      { id: 4, text: "Domicile <> achat, loisirs, visite de la famille/amis", next: "frequence" },
      { id: 5, text: "Domicile <> rdv médical ou administratif", next: "frequence" },
      { id: 6, text: "Autre", next: "motif_deplacement_autre" }
    ]
  },
  {
    id: "motif_deplacement_autre",
    text: "Précisez",
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

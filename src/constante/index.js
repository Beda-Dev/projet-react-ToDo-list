export let  taches = [
    {
        
    }


]
export let equipe = [
    {
        Nom : "Dingui",
        Prenom : "Beda Junior",
        Post :"stagiaire assistant developpeur d'application"
    },
    {
        Nom : "kouassi",
        Prenom : "Jean-Louis",
        Post : "responsable logistique"
    },
    {
        Nom : "Assi",
        Prenom : "Mark Alex",
        Post : "Agent de Securité"
    },
    {
        Nom : "Kouadio",
        Prenom : "Marie-Louise",
        Post : "commerciale"
    }

   
]

//reçois la tache et l'importe dans la tableau taches
export const mis_a_jour = (nouvelleTache) =>{
    taches = [...taches , nouvelleTache]
}

//fonction pour supprimer une tache du tableau
export const suppression_tache = (index_tache_a_supprimer) =>{
    const downgradeTache = taches.filter((_,i) => i !==index_tache_a_supprimer)
    taches = downgradeTache
}


//reçois les infos de la personne et l'importe dans la tableau equipe
export const mis_a_jour_personne = (nouvellePersonne) =>{
    equipe = [...equipe , nouvellePersonne]
    console.log(equipe)
    
}

//fonction pour supprimr une personne du tableau
export const suppression_membre = (index_membre_a_supprimer) =>{
    const downgradeEquipes = equipe.filter((_,i) => i !==index_membre_a_supprimer)
    
    equipe = downgradeEquipes
    console.log(`membre a l'id ${index_membre_a_supprimer} supprimer`)
}


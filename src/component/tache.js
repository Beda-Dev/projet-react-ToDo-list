import React, { useState } from 'react';
import {taches , mis_a_jour , equipe , suppression_tache} from '../constante/index.js';

function Creation() {
  // stock les tâches dans un useState
  const [nouvelle, setNouvelle] = useState(
    {
      tache : '',
      description : '',
      attribution : '',
    }
  );
  //un UseState qui met a jour la liste des taches
  const [liste , setListe] = useState(taches)

  //FONCTION QUI PERMET D'AJOUTER UNE NOUVELLE TACHE
  const ajout = (ajoutTache) => {
    ajoutTache.preventDefault();                                    //Change le comportement par defaut lors du click , il empèche le rechargement de la page
    if (nouvelle.tache.trim()) {
      const newTache = {tache : nouvelle.tache,
        description : nouvelle.description,
        attribution : nouvelle.attribution,}
        mis_a_jour(newTache)                                        //ajout des données dans la fonction de mise a jour du tableau importer depuis index.js du dossier constante
        const update = [...taches]                   
        setListe(update)                                                // mise a jour de la liste des taches avec les nouvelles valeurs
        setNouvelle({ tache: "", description: "", attribution: ""});    // reinitialisation des champs
        

  
  }
    

  }
  //FONCTION POUR METTRE A JOUR LES VALEURS SAISIES DANS LES CHAMPS A CHAQUE CHANGEMENT
  const handleChange = (champ) => {
    const { name, value } = champ.target;
    setNouvelle(prevState => ({...prevState,[name]: value})
  );
    
  };

  //FONCTION POUR SUPPRIMER UNE TACHES DE LA LISTE 
  const Suppression = (index) =>{
      const x = window.confirm("Voulez-vous vraiment supprimer cette tâche ?",)
      if(x === true){

          const downgradeTaches = liste.filter((_, i) => i !== index) // retourne un tableau avec l'element supprimer
          setListe(downgradeTaches)                                   // mise a jour dans dans la liste avec le useState
          suppression_tache(index)                                    //appelle de la fonction suppression_tache pour supprimer egalement la taches dans la liste impoter
    }




  }



 


  return (
    <div className="grid place-items-center">
      <fieldset className="gap-3">
        <h2 className='text-xl'>Création de tâche</h2>
        <form 
          onSubmit={ ajout} className="space-y-4 w-full max-w-md mx-auto bg-white p-6 shadow-lg rounded-md">
          <label htmlFor="titre">Titre</label>
          <br />
          <input
            className='px-20 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base '
            type="text"
            name="tache"
            value={nouvelle.tache}
            onChange={handleChange}
            placeholder="ex: installer un système sur telle machine"
            required
          />
          <br />
          <label htmlFor="description">Description de la tâche (Facultatif)</label>
          <br />
          <textarea
          className='w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base '
            name="description"
            value={nouvelle.description}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="attribution">Attribuer à :</label>
          <br />
          
            
          <select
              className='bg-blue-50'
              name="attribution"
              value={nouvelle.attribution}
              onChange={handleChange}
              required
            > 
              <option value={''}>--Sélectionner une personne--</option>
              {equipe.map((membre , index) => (
                <option value={`${membre.Nom} ${membre.Prenom}`} key={index}>
                  {membre.Nom}  {membre.Prenom}
                </option>
              ))}
          </select>

            
         
          
         
          
        
          
          <br />
          <button 
            type="submit" 
            className='mt-3 py-3 px-10 rounded-lg text-sm font-medium
                text-white bg-teal-600 duration-100 hover:bg-white hover:border hover:text-black hover:px-11'
            >Créer</button>
        </form>
      </fieldset>


      <fieldset className='formulistetache'>
        <div className='grid'>

          {
          //parkour du tableau des taches avec la methode map pour afficher ses informations dans une div

          taches.map((tache , index) => (

            <div key={index} className='flex m-2.5 p-5 border rounded-lg justify-between w-full shadow-lg duration-100 hover:p-6'>
  

              <h1 className='text-blue border '>--TACHE {index +1}: {tache.tache}--</h1>

              <h2><div className='flex-initial border '>--DESCRIPTION : {tache.description}--</div></h2>
              
              <h2 className='border'> --ATTRIBUTION : {tache.attribution}--</h2>

              <h3 className='border'>--completé :  <input type='checkbox' /> --</h3>

              <button  key={index} className='justify-end px-5 rounded-lg text-sm font-medium
                text-white bg-red-600 duration-100 hover:bg-white hover:text-black' 
                onClick={() => Suppression(index) }
                >Supprimer la tache
              </button>
              

              
            </div>
          ))
          }

        </div>

      </fieldset>
    </div>
    
    
  );
}

export default Creation;

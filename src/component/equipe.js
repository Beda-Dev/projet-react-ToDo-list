import { useState } from "react";
import { equipe, mis_a_jour_personne  } from "../constante/index.js";
import Table from "./TableMembre.js";




function Equipe(){

            // stock les nouveaux membres de l'equipe dans un useState
    const [membre, setMembre] = useState(
        {
          Nom : '',
          Prenom : '',
          Post : ''
        }
      );

          //liste des membre de l'equipe dans un useState
      let [listemembre , setListemembre] = useState(equipe)
    
       //FONCTION D'AJOUT DE MEMBRE
      const ajout = (ajoutMembre) => {
        ajoutMembre.preventDefault();                                                   //empeche le rechargement de la page au click sur le button d'ajout qui a pour typr "submit"
        if (membre.Nom.trim() && membre.Prenom.trim() && membre.Post.trim()) {          //si  ces variable ont du contenu alors la variable nouveau membre reçoit le valeur saisie 
          const nouveauMembre = {Nom : membre.Nom,
            Prenom : membre.Prenom,
            Post : membre.Post}
            mis_a_jour_personne(nouveauMembre)                                        //mise a jour de la liste des membre dans le tableau importer
            const updateList = [...equipe]
            setListemembre(updateList)                                                //mise a jour egalement de la liste des membres avec le useState
            setMembre({ Nom: "", Prenom: "", Post: ""});                              // reinitialisation des champs
            
            
      }
        
    
      }
      
      //FONCTION POUR METTRE A JOUR LES VALEURS SAISIES DANS LES CHAMPS A CHAQUE CHANGEMENT
      const handleChange = (champ) => {
        const { name, value } = champ.target;
        setMembre(prevState => ({...prevState,[name]: value}));
        
      };

   
  
    

    return(
        
        <div className="grid place-items-center">
            < fieldset className="gap-3">
                <h2 className='text-xl'>Ajouter un membre</h2>
                <form
                onSubmit={ajout} 
                className="space-y-4 w-full max-w-md mx-auto bg-white p-6 shadow-lg rounded-md">
                <label 
                    htmlFor="Nom"
                    >Nom</label>
                <br />
                <input
                    name="Nom"
                    onChange={handleChange}
                    value={membre.Nom}

                    className='px-20 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base '
                />
                <br />
                <label htmlFor="Prenom">Prenom</label>
                <br />
                <input
                    name="Prenom"
                    value={membre.Prenom}
                    onChange={handleChange}
                    className='px-20 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base '
                />
                <br />
                <label htmlFor="post">post occupé</label>
                <input 
                    name="Post"
                    value={membre.Post}
                    onChange={handleChange}
                    className="px-20 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                <br />
                <button 
                    type="submit"
                    className='mt-3 py-3 px-10 rounded-lg text-sm font-medium
                        text-white bg-teal-600 duration-100 hover:bg-white hover:border hover:text-black hover:px-11'
                    >ajouter</button>
                </form>
            </fieldset>
            <fieldset className='formulistetache'>
              <Table  />

            </fieldset>



      
              
            
        </div>
    )
}

export default Equipe
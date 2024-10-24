import React,{ useState , useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { equipe , suppression_membre } from "../constante/index.js";
import { Button } from "@mui/material";





function Table(){
    const [rows , setRows] = useState([])
    

    const colonne = [
        {field:'id' , headerName :'ID' , width : 90},
        {field:'nom' , headerName :'Nom' , width : 130},
        {field:'prenom' , headerName :'Prenom' , width:190},
        {field:'post' , headerName :'Post' , width:200},
        {
            field: 'action',
            headerName : 'Actions',
            width: 150,
            renderCell :(Params) =>(
                <Button 
                variant="contained"
                color="secondary"
                onClick={()=>{Suppression(Params.row.id-1)}}
                >
    
                    
        
                Supprimer</Button>
            )
        }
    ]
    
    let tailleTableau = 0
    
    const ajoutligne = () =>{
        
        let ligne = []
        equipe.map((valeur , indexX) =>{
           let tampon = {id : indexX + 1 , nom : valeur.Nom , prenom : valeur.Prenom , post : valeur.Post}
            ligne = [...ligne,tampon]
            tailleTableau = tailleTableau+1
            
            
        }) 
        
        return ligne
    }

    useEffect(() => {
        setRows(ajoutligne());
    }, []);

    
    const pagination1 = {page : 0 , pageSize:5}
    
    //FONCTION POUR SUPPRIMER UNE TACHES DE LA LISTE 
    const Suppression = (indeX) =>{
        
        const x = window.confirm("Voulez-vous vraiment rétirer cette personne de l'equipe ?",)
        if(x === true){                        
            suppression_membre(indeX)
            setRows(rows.filter((_, index)=> index !== indeX))
            console.log(equipe)//appelle de la fonction suppression_tache pour supprimer egalement la taches dans la liste impoter
           
            
                                                
        }
    
    
    
    
    }
    
    

        return(
            <Paper sx={{ height: '100%', width: '100%' }}>
                <DataGrid 
                    rows = {ajoutligne()}
                    columns={colonne}
                    initialState={{pagination : pagination1 } }
                    pageSizeOptions={[1,tailleTableau]}
                    checkboxSelection
                    sx={{border:0}}
                    className="rounded-mg bg-gray"
                  
                />
                
            </Paper>

        );
}

export default Table
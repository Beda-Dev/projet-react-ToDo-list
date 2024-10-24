import React,{ useState , useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { equipe , suppression_membre } from "../constante/index.js";
import { Button as Buttons } from "@mui/material";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';         
import 'primeicons/primeicons.css';      





function Table(){
    const [rows , setRows] = useState([]) // usestate qui met a jour les lignes
    const [Dialog , setDialog] = useState(false) // useState qui gère l'etat d'affichage du dialog
    let sauvegardeLigne = null
    
    

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
                <Buttons
                variant="contained"
                color="secondary"
                onClick={()=>{
                    sauvegardeLigne=Params.row.id-1
                    setDialog(true)
                    dialog()

                }}
                >
    
                    
        
                retirer cette personne</Buttons>
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
                     
            suppression_membre(indeX)
            setRows(rows.filter((_, index)=> index !== indeX))
            console.log(equipe)//appelle de la fonction suppression_tache pour supprimer egalement la taches dans la liste impoter
           
            
                                                
        }
    
    
    
    
    
    const dialog = () => {
        if(Dialog===true){
        confirmDialog({
            message: "Voulez-vous vraiment retirer cet élément ?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: () => Suppression(sauvegardeLigne), // Action d'acceptation
            reject: () => setDialog(false), 
        });
    }
    };
    
    
    

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
                <ConfirmDialog/>
                
                
            </Paper>

        );

    }
export default Table
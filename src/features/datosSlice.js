import { createSlice } from "@reduxjs/toolkit";
import usuariosApp from "../global/usuariosApp";
//import { DB } from "../../App"; //Importo la DB iniciada en APP.js
import baseDatos from "../db/dataBaseApp";
let DB = new baseDatos()
export const datosSlice = createSlice({

    name: 'datos',
    initialState:{
        
        datosUsuarios:DB.getAllUsers(),//usuariosApp,
        loggedUser: DB.getUserById(5),
        usuarioSeleccionado:null
    },

    reducers:{
        funcion1 : (state) => {console.log(state.datosUsuarios)},
        selectUser: (state,action) =>{ 
            
            let id = Number(action.payload) //Linea provisoria hasta construir la backend de la
            state.usuarioSeleccionado = DB.getUserById(id)
            
           // usuariosApp[id]
                                       // alert(state.usuarioSeleccionado)
                                //Me enfoco en la BD en
        },
        
        getProfilePic:(state,action) =>{
                //Devuelve un array
                let id = Number(action.payload)-1 //Linea provisoria hasta construir la backend de la
                return DB.getUserById(id).profilePic//suariosApp[id].profilePic
        }
    }
})

export const {funcion1, selectUser, getProfilePic} =  datosSlice.actions
export default datosSlice.reducer
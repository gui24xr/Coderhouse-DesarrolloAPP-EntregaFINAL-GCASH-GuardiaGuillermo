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
            
            let id = Number(action.payload) 
            state.usuarioSeleccionado = DB.getUserById(id)
            
           // usuariosApp[id]
                                       // alert(state.usuarioSeleccionado)
                                //Me enfoco en la BD en
        },
        
        getProfilePic:(state,action) =>{
                //Devuelve un array
                let id = Number(action.payload)-1 //Linea provisoria hasta construir la backend de la
                return DB.getUserById(id).profilePic//suariosApp[id].profilePic
        },

        addFavoriteToContact:(state,action) =>{
                /*Este action le pasa a la BD el id de user seleccionado para que la BD lo agregue a favoritos del contacto logueado.
                 Si el favporito ya se encuentra en la BD obviamente no lo agrega*/
                let idToAdd = Number(action.payload) 
                let idWhereAdd = Number(state.loggedUser.id)
                //Ejecuto el metodo de la DB y tomo su resultado, ya que si agrega da 1 y sino cero y lo uso para dar mensaje.
                DB.addFavorite(idToAdd, idWhereAdd) == 1 
                ? alert('El contacto ah sido agregado a favoritos. !')
                : alert('El contacto ya estaba agregado en tus favoritos !')
                //Actualizo datosUsuariosDB
                state.datosUsuarios = DB.getAllUsers()
        },
    }
})

export const {funcion1, selectUser, getProfilePic, addFavoriteToContact} =  datosSlice.actions
export default datosSlice.reducer
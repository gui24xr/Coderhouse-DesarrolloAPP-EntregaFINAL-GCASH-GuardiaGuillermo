//Base de datos

import usuariosApp from "../global/usuariosApp"
import cvuData from "../global/cvuData"
import mediosDePago from "../global/mediosdepago"
import axios from "axios"

const firebaseConfig = {
  apiKey: "somekey",
  authDomain: "somekey",
  databaseURL: 'https://gcash-404503-default-rtdb.firebaseio.com/',
  endpoints:['/usuariosApp.json','/usuariosApp/1/firstName.json'],
  projectId: "somekey",
  storageBucket: "somekey",
  messagingSenderId: "somekey",
  appId: "appIdKey"
};

class baseDatos{

    constructor(){

      

        this.usuarios =usuariosApp
        this.paymentElements = mediosDePago
        this.cvuData = cvuData
    }


getAllUsers = () =>{ 
    //Hago getUserByID de toda la lista de usuarios y la devuelvo en un array para proveer de info a la APP
   const arrayInfoUser = []
   this.usuarios.forEach( item => {
        arrayInfoUser.push(this.getUserById(item.id))
   })

   return arrayInfoUser
}


getUserById = (requireID) =>{
    //Devuelve un objeto con toda la data, incluso data d cvu, saloo, etc

    //Busco el objeto que tiene el ID requerido en mi BD que es un array de objetos.
    //No hago validaciones x ahora xq estoy seguro de que esta.
   //Busco los datos de usuario
    const userDataPosition = this.usuarios.findIndex(element => element.id == requireID)
    const userData = this.usuarios[userDataPosition]
    //Busco los datos del cvu correspondiente a ese usuario.
    const userCvuDataPosition = this.cvuData.findIndex(element => element.cvuNumber == userData.cvu)
    const userCvuData = this.cvuData[userCvuDataPosition]
    
    //Busco los metodos de pago y armo la informacion de uno de ellos
    const elementosDePagoInfo = []
    userData.paymentMethods.forEach(item => {
         //Busco el item en la lista de medios de pago.
        const paymentElementPosition = this.paymentElements.findIndex(element => element.idPayMethod == item)
        elementosDePagoInfo.push(this.paymentElements[paymentElementPosition])
    })

    //Busco los favoritos  y hago lo mismo que con los elementos de pago.
    const elementosFavoritos = [] //De los favoritos devuelvo id, profilePic y username
 
    userData.favorites.forEach(item =>{
        //Aca solo voy a proveer
        const favoritePosition =  this.usuarios.findIndex(element => element.id == item)
        const friendData = this.usuarios[favoritePosition]

       const infoFavorite = {
            favoriteID: friendData.id, 
            favoriteProfilePic: friendData.profilePic, 
            favoriteUsername : friendData.userName,
            favoriteCompleteName : friendData.firstName + ' ' + friendData.lastName
        }

        elementosFavoritos.push(infoFavorite)
        
    })


    const infoUser = {

        id: userData.id,
        userName: userData.userName,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,  //ojo aca
        profilePic: userData.profilePic,
        cvuInfo: {
            cvuNumber: userCvuData.cvuNumber,
            balance: userCvuData.balance,
            operations: [], //A completar
        },
        paymentElements:elementosDePagoInfo,
        favorites: elementosFavoritos,
        operations: userData.operations, //Futura implementacion
        location: userData.location


    }
    
    return infoUser



    //console.log(userData,'\n')
    //console.log(userCvuData,'\n')
    //console.log(jsonArray,'\n')
    //alert(jsonArray)
    //console.log(this.cvuData)
}

addFavorite = (idUserToAdd, idUserWhereAdd) =>{

    //Me posiciono en el registro donde agregare el favorito
    const userWhereAdd = this.usuarios.findIndex(item => item.id == idUserWhereAdd)
    /*Pregunto si en la lista de favoritos existe el favorito a agregar.
    SI esta, no lo agrego para no repetir y retorno 0, y si esta, no agrego y devuelvo cero */
    
    if (this.usuarios[userWhereAdd].favorites.findIndex(item => item == idUserToAdd) < 0){
    this.usuarios[userWhereAdd].favorites.push(idUserToAdd)
    //alert('Este contacto se agrego')
    return 1
    }
    else {
    //alert("el contacto ya esta")
    return 0
    }
    

}


}



export default baseDatos
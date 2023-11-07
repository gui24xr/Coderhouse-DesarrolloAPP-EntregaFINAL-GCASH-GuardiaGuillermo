import { StyleSheet } from "react-native";
import { styleTextoTipo3, styleTextoTipo4, styleTextoTipo5, styleTextoTipo1 } from "../../constants/constants"
export default styles = StyleSheet.create({


    commentContainer:{

        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        paddingTop: 30,
        paddingBottom: 60,
    },

    userName:{

        ...styleTextoTipo5,
       
    },

    profilePic:{
        
    width: 90, // Ancho deseado de la foto de perfil
    height: 90, // Alto deseado de la foto de perfil
    borderRadius: 75, // La mitad del ancho o alto para hacerlo circular
    backgroundColor: 'white', // Color de fondo
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
   
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    }
})
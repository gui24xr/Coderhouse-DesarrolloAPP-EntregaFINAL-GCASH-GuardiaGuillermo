import { StyleSheet } from "react-native"
import { styleTextoTipo3, styleTextoTipo4, styleTextoTipo5, styleTextoTipo1 } from "../../constants/constants"
const ESPACIO=10

export default styles = StyleSheet.create({

    leyenda:{
   
        ...styleTextoTipo3, //Agregue un objeto
        
       
        
        
    },
    
    textoTitles:{
        ...styleTextoTipo1, 
       
        alignSelf: 'center',
        paddingTop: 10,
       
    },

    profileContainerButtons:{

        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

    cvuContainer:{

        flexDirection: 'column',
    },

    cvuContainerButtons:{

        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    textoSubTitles:{
        ...styleTextoTipo3, 
          fontSize: 20,
          marginBottom: ESPACIO*2,
       
        
       
    },
    textoUserName:{
        ...styleTextoTipo5, 
        alignSelf:'center',
      
      
        
    },

    textoDatos:{
        ...styleTextoTipo5, 
        
      
      
        
    },

    dataContainer:{
      
        justifyContent: 'center',
        verticalAlign: 'bottom',
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: 'blue',
        
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 60,
        marginBottom: 50,
      
    },

    
  profilePic: {
    width: 180, // Ancho deseado de la foto de perfil
    height: 180, // Alto deseado de la foto de perfil
    marginVertical: 30,
    borderRadius: 150, // La mitad del ancho o alto para hacerlo circular
    backgroundColor: "white", // Color de fondo
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    borderColor:'black',
    borderWidth: 1.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  favoritesContainer:{
    flexDirection: 'row',
    flex:1,
    alignContent:'center',
  },
  favoriteContainerText:{
    ...styleTextoTipo4,
    alignSelf: 'center',
    marginLeft: ESPACIO,
  },
  favoriteProfilePic:{
    width: 30, // Ancho deseado de la foto de perfil
    height: 30, // Alto deseado de la foto de perfil
    marginVertical: 10,
    borderRadius: 150, // La mitad del ancho o alto para hacerlo circular
    backgroundColor: "white", // Color de fondo
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    borderColor:'black',
    borderWidth: 1.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  paymentMethodContainer:{
    flexDirection: 'row',
    marginVertical: ESPACIO,
    
  },
  paymentMethodContainerTextTitle:{
    ...styleTextoTipo3,
    flexDirection: 'column',
    paddingLeft: ESPACIO * 2,
  },
  paymentMethodContainerText:{
    ...styleTextoTipo5,
    fontSize: 14,
    flexDirection: 'column',
    paddingLeft: ESPACIO * 2,
  },

})
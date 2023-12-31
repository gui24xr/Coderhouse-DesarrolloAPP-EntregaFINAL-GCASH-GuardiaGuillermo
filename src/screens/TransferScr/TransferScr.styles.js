import { StyleSheet } from "react-native"
import { colors, styleTextoTipo3, styleTextoTipo4, styleTextoTipo5, styleTextoTipo1 } from "../../constants/constants"
const ESPACIO=10

export default styles = StyleSheet.create({

    leyenda:{
   
        ...styleTextoTipo3, //Agregue un objeto
  
       
        
        
    },
    
    textoTitles:{
        ...styleTextoTipo1, 
       
        alignSelf: 'center',
     fontSize: 50,
       
    },

    profileContainerButtons:{

        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    inputContainer:{
      flexDirection: 'row',
     
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
          fontSize: 16,
          marginBottom: ESPACIO*0.5,
       
        
       
    },
    userToTransferContainer:{
      flexDirection: 'row',
      flex:1,
      marginVertical: ESPACIO * 3,
      justifyContent: 'space-around'
    },
    userToTransferContainerData:{
      justifyContent: 'center'
    },
    textoUserName:{
        ...styleTextoTipo5, 
        
      
      
        
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

   
 
  userToTransferPic:{

    width: 60, // Ancho deseado de la foto de perfil
    height: 60, // Alto deseado de la foto de perfil
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
  textInput:{
    width: '80%',
    ...styleTextoTipo1,
  
    alignSelf:'center',
    borderBottomWidth: 1,
    borderColor: colors.generalColor,
    paddingLeft: ESPACIO*1,
      
        
  },

  button: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf:'center',
    width: '60%',
    marginVertical: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

})
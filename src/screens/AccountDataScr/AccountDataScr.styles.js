import { StyleSheet } from "react-native"
import { styleTextoTipo3, styleTextoTipo4, styleTextoTipo5, styleTextoTipo1 } from "../../constants/constants"


export default styles = StyleSheet.create({

    leyenda:{
   
        ...styleTextoTipo3, //Agregue un objeto
        
       
        
        
    },
    
    textoTitles:{
        ...styleTextoTipo1, 
       
        alignSelf: 'center',
        paddingTop: 50,
       
    },

    textoDatos:{
        ...styleTextoTipo5, 
        
        alignSelf: 'center',
        paddingBottom: 10,
        
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
      
    }
})
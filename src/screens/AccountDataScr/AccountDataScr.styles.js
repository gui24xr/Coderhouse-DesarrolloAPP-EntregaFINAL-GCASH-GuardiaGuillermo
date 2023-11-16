import { StyleSheet } from "react-native"
import { styleTextoTipo3, styleTextoTipo4, styleTextoTipo5, styleTextoTipo1 } from "../../constants/constants"


export default styles = StyleSheet.create({

    leyenda:{
   
        ...styleTextoTipo3, //Agregue un objeto
        
       
        
        
    },
    
    textoTitles:{
        ...styleTextoTipo1, 
       
        alignSelf: 'center',
        
       
    },

    textoDatos:{
        ...styleTextoTipo5, 
        
        alignSelf: 'center',
        
        
    },

    dataContainer:{
      
        justifyContent: 'center',
        verticalAlign: 'bottom',
        
        
        
      
      
    }
})
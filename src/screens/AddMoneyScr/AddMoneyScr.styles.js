import { StyleSheet } from "react-native";
import { styleTextoTipo1, colors, styleTextoTipo3 } from "../../constants/constants";
const ESPACIO = 10

export default styles = StyleSheet.create({
    textInput:{
        width: '80%',
        ...styleTextoTipo1,
      
        alignSelf:'center',
        borderBottomWidth: 1,
        borderColor: colors.generalColor,
        paddingLeft: ESPACIO*1,
                      
      },
      textoSubTitles:{
        ...styleTextoTipo3, 
          fontSize: 16,
          marginBottom: ESPACIO*0.5,
       
        
       
    },
    textoTitles:{
        ...styleTextoTipo1, 
       
        alignSelf: 'center',
     fontSize: 50,
       
    },
})
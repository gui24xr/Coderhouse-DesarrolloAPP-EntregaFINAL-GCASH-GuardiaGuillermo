
import { StyleSheet, Dimensions } from "react-native"
import { styleTextoTipo1, styleTextoTipo3} from '../../constants/constants'
const ESPACIO =10

export default styles = StyleSheet.create({
    mapViewContainer: {
      
      width: Dimensions.get('window').width ,
      height: Dimensions.get('window').height*0.4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoSubTitles:{
      ...styleTextoTipo3, 
        fontSize: 16,
        marginBottom: ESPACIO*0.5,
           
     
  },
    mapStyle: {
      alignSelf: 'center',

      marginVertical: Dimensions.get('window').height*0.03,
      borderWidth: 15,
      borderColor: 'black',
      borderStyle: 'solid',
      //Sombra
   
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get('window').height ,
      width: Dimensions.get('window').width ,
     
    },
  });
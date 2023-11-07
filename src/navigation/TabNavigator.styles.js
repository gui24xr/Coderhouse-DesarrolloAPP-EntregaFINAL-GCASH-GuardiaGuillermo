import { StyleSheet } from "react-native"

import { colors } from '../constants/constants';


const styles = StyleSheet.create({
    tabBarStyle:{

      backgroundColor: colors.tabNavigator,
      shadowColors: 'black',
      elevation: 5,
      position: 'absolute',
      height:70,
      borderTopLeftRadius: 10,
      borderTopEndRadius: 10,
    },

    buttonTabContainer: {
        flexDirection: 'column', // Para alinear ícono y texto horizontalmente
        
        

        
      },
      iconTab: {
        fontSize: 20,
        //color: colors.textTab,
        alignSelf: 'center',
        paddingVertical: 10,
      },
      buttonTabText: {
        fontSize: 12,
        color: colors.textTab,
        alignSelf: 'center',
      },

    
  })
  
  export default styles
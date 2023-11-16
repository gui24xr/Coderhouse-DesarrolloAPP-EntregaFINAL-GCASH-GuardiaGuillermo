import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/constants";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      QrButton: {
        height: Dimensions.get("window").height *0.3,
        width: Dimensions.get("window").width*0.6,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.favoritesButtonFontColor,
        justifyContent: 'space-evenly',
      
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 20,
        },
        shadowOpacity: 2.75,
        shadowRadius: 6.84,
        elevation: 5,
        padding: 10,
        margin: 10,
      },
})
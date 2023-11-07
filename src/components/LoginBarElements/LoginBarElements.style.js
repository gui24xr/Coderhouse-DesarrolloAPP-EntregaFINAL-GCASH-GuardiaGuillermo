import { StyleSheet } from "react-native";
import { colors } from "../../constants/constants";
const HEIGHTBAR = 12

const styles = StyleSheet.create({
  viewLoginBarElements: {
    width:'100%',
    flexDirection: "row",
    alignContent:'flex-end',
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    /*
    borderColor: "white",
    borderWidth: 2,*/
  
  },

  pressableProfileName: {
    
    backgroundColor: colors.headBarColor,

    flexDirection: "row",
    alignItems: "center",
    marginVertical: HEIGHTBAR,
  },
  txtProfileName: {
    fontSize: 16,
    color: "white",
    paddingLeft: 10,
  },

  iconLoginBar:{
    fontSize: 40,
    justifyContent: 'flex-end',
    backgroundColor: colors.headBarColor,
    paddingHorizontal: 5,
    alignSelf: 'center'
  },


  pressableHelp: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.headBarColor,
    justifyContent: "center",
  },
  txtAyuda: {
    fontSize: 12,
    color: "white",
  },
  profilePic: {
    width: 50, // Ancho deseado de la foto de perfil
    height: 50, // Alto deseado de la foto de perfil
    borderRadius: 75, // La mitad del ancho o alto para hacerlo circular
    backgroundColor: "white", // Color de fondo
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: 10,
  },
});

export default styles 
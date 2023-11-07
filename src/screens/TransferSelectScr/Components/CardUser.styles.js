import { StyleSheet } from "react-native";

import {
  colors,
  styleTextoTipo3,
  styleTextoTipo4,
  styleTextoTipo5,
  styleTextoTipo1,
} from "../../../constants/constants";

export default styles = StyleSheet.create({
  cardUserContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1.5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: colors.homeCardButtonBorderColor,
    backgroundColor: "white",
    marginVertical: 1,
    marginHorizontal: 10,
  },

  nameText: {
    ...styleTextoTipo3,
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
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    letterSpacing: 10,
  },
  botones: {
    margin: 10,
  },
});

import { StyleSheet } from "react-native";
import { colors, styleTextoTipo3, styleTextoTipo4, styleTextoTipo5, styleTextoTipo1 } from '../../constants/constants'

export default styles = StyleSheet.create({
  fondoCard: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    margin: 10,
  },

  titleContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "space-between",
    color: "white",
  },

  amountsContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginVertical: 10,
  },

  cardNumber: {
    marginTop: 40,
    alignSelf: "flex-end",
  },

  textBank: {
    ...styleTextoTipo1,
    fontSize: 14,
    color: "white",
  },
  textTipoCuenta: {
    color: "white",
  },
  textInfoCard: {
    color: "white",
    ...styleTextoTipo4,
  },
});

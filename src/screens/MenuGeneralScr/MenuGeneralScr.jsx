import styles from "./MenuGeneralScr.styles";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

const configStyleMenu = {
  scrollViewDirection: 'vertical',
  SPACING: 10,
  marginLeft: 10,
  divisionBorderWidth: 0.7,
  divisionBorderColor: "#c0c0c0",
  fontSize: 12,
  iconColor: "blue",
  iconSize: 24,
};
const menuItems = [
  {
    title: "Inicio",
    icono: (
      <AntDesign
        name="home"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },
  {
    title: "Actividad",

    icono: (
      <FontAwesome5
        name="tasks"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },

  {
    title: "Notificaciones",

    icono: (
      <Ionicons
        name="notifications-outline"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: true,
    action: () => alert("hola"),
  },

  {
    title: "Pagar",

    icono: (
      <MaterialIcons
        name="payments"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },
  {
    title: "Cobrar",
  
    icono: (
      <MaterialCommunityIcons
        name="bank-transfer"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },
  {
    title: "Tu dinero",
 
    icono: (
      <FontAwesome
        name="money"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },
  {
    title: "Reservas",
 
    icono: (
      <MaterialCommunityIcons
        name="piggy-bank-outline"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },
  {
    title: "Tarjetas",
   
    icono: (
      <Entypo
        name="credit-card"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: true,
    action: () => alert("hola"),
  },
  {
    title: "Suscripciones",
   
    icono: (
      <AntDesign
        name="carryout"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },

  {
    title: "Ayuda",

    icono: (
      <Entypo
        name="help"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: true,
    action: () => alert("hola"),
  },
  {
    title: "Acerca de GCASH",
    image: require("../../../assets/icon.png"),
    icono: (
      <Fontisto
        name="wallet"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: false,
    action: () => alert("hola"),
  },

  {
    title: "Salir",
    image: require("../../../assets/icon.png"),
    icono: (
      <Entypo
        name="log-out"
        size={configStyleMenu.iconSize}
        color={configStyleMenu.iconColor}
      />
    ),
    bottomDivision: true,
    action: () => alert("hola"),
  },
];

const MenuGeneralScr = () => {
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        style={{ marginVertical: configStyleMenu.SPACING * 2 }}
        showsHorizontalScrollIndicator={false}
      >
        {menuItems.map((menuItems) => (
          <TouchableOpacity
            key={"menuitem_" + menuItems.title}
            onPress={menuItems.action}
            style={
              menuItems.bottomDivision
                ? {
                    marginRight: 0,
                    padding: configStyleMenu.SPACING,
                    alignItems: "center",
                    flexDirection: "row",
                    borderBottomWidth: configStyleMenu.divisionBorderWidth,
                    borderBottomColor: configStyleMenu.divisionBorderColor,
                  }
                : {
                    marginRight: 0,
                    padding: configStyleMenu.SPACING,
                    alignItems: "center",
                    flexDirection: "row",
                  }
            }
          >
            <View
              style={{
                width: configStyleMenu.SPACING * 3,
                height: configStyleMenu.SPACING * 3,
                marginLeft: configStyleMenu.marginLeft,
              }}
            >
              {menuItems.icono}
            </View>
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: configStyleMenu.fontSize,
                marginLeft: configStyleMenu.marginLeft,
              }}
            >
              {menuItems.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};





export default MenuGeneralScr;

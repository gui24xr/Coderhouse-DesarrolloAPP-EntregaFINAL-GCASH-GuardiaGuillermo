import styles from './HomeScr.styles'
import { Pressable, Text, View, Button, ScrollView } from "react-native";
import { colors } from "../../constants/constants";
import React from "react";
import { Card, ValuesViewer,ComunityViewer } from "../../components";
import { styleTextoTipo1, styleTextoTipo2 } from "../../constants/constants";
import HomeCardMenu from "./Components/HomeCardMenu";
import FavoritesMenu from "./Components/FavoritesMenu";
import { useSelector } from 'react-redux';




const HomeScr = ({ navigation }) => {

  const saldoEnCVU = useSelector(state => state.datos.loggedUser.cvuInfo.balance)


  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styleTextoTipo1}>Disponible</Text>
        <ValuesViewer
          action={() => alert("Ir a...")}
          value={"$" + saldoEnCVU}
          textStyle={{...styleTextoTipo1}}
        />
        <Pressable onPress={() => navigation.navigate("AccountDataScr")}>
          <Text
            style={{
              ...styleTextoTipo2,
              alignSelf: "center",
              marginBottom: 30,
            }}
          >
            ver mis datos de cuenta...
          </Text>
        </Pressable>

        <HomeCardMenu navigation={navigation} />
      </Card>

      

      <Card>
        <Text style={styleTextoTipo2}>Comunidad</Text>
        <ComunityViewer/>
        </Card>
 
    </ScrollView>
  );
};

export default HomeScr;

/*
<Card>
        <Text style={styleTextoTipo2}>Favoritos</Text>
        <FavoritesMenu navigation={navigation} />
      </Card>

*/

import styles from './HomeScr.styles'
import { Pressable, Text, View, Button, ScrollView } from "react-native";
import { colors } from "../../constants/constants";
import React from "react";
import { Card, ValuesViewer,ComunityViewer } from "../../components";
import { styleTextoTipo1, styleTextoTipo2 } from "../../constants/constants";
import HomeCardMenu from "./Components/HomeCardMenu";
import FavoritesMenu from "./Components/FavoritesMenu";




//creacionDePerfilesAleatorios()

let valor = 25000;
const dataFlat= [1,2,34,5,6,7,8,8,9,9,90,0,9,0,0,0,,25,56]




const HomeScr = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styleTextoTipo1}>Disponible</Text>
        <ValuesViewer
          action={() => alert("Ir a...")}
          value={"$" + valor.toString()}
          textStyle={styleTextoTipo1}
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
        <Text style={styleTextoTipo2}>Favoritos</Text>
        <FavoritesMenu navigation={navigation} />
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
  const styleMenuG ={

    SPACING: 3,

    get valorSpacing () {return this.SPACING} ,

    styleScrollView :{marginVertical: 
                      configStyleMenu.SPACING * 2
                      
                    },
    
    
    
    styleTexto : { textTransform: "uppercase",
                    fontSize: 20,
                    marginLeft: configStyleMenu.marginLeft,},
    
                    iconsStyle:{Color: "blue",size: 24},
    
    iconContainer: {
                  width:  this.SPACING * 3,
                  height: configStyleMenu.SPACING * 3,
                  marginLeft: configStyleMenu.marginLeft,
                  background: 'blue',
    }

    }

*/

import styles from "./TransferSelectScr.styles"
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, SectionTitle } from "../../components";
import CardUser from "./Components/CardUser";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../constants/constants";

const TransferSelectScr = ({ navigation }) => {

  const usersData = useSelector((state) => state.datos.datosUsuarios);


  const [valueOnSearch, setValueOnSearch] = useState('') //Dato buscado
  const [dataOnSearch,setDataOnSearch] = useState(usersData) //Datos Mostrados segun Dat Buscado

  
  let filteredData=[]
  useEffect(()=>{

    //Busca por nombre y/o apellido
    filteredData = usersData.filter(item => item.firstName.includes(valueOnSearch) ||
                                            item.firstName.includes(valueOnSearch.toLowerCase()) ||
                                            item.lastName.includes(valueOnSearch)||
                                            item.lastName.includes(valueOnSearch.toLowerCase()))
      setDataOnSearch(filteredData)

  },[valueOnSearch])

  return (
    <View>
      
      <SectionTitle
        sectionName='Transferencias'
        icon={<MaterialCommunityIcons name="bank-transfer" size={36} color={colors.favoritesButtonFontColor} />}
        description={'Selecciona la persona a la que deseas trasferir dinero a su cuenta en GCASH.'}
      />

      <Card>
        <TextInput style={styles.textInput} 
                    placeholder="Buscar contactos"
                    value={valueOnSearch}
                    onChangeText={(text)=> setValueOnSearch(text)}
                    />
      </Card>

      <ScrollView>
        <FlatList
          style={styles.listContainer}
          data={dataOnSearch}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardUser
              firstName={item.firstName}
              lastName={item.lastName}
              profilePic={item.profilePic}
              cvu={item.cvu}
              userID={item.id}
              navigation={navigation}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default TransferSelectScr;

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
import { Card } from "../../components";
import CardUser from "./Components/CardUser";

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
      <Text style={styles.titleScreen}>TRANSFERENCIAS</Text>
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

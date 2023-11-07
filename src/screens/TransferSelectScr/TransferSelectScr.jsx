import styles from "../TransferSelectScr/TransferSelectScr.styles";
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components";
import CardUser from "./Components/CardUser";

const TransferSelectScr = ({ navigation }) => {

  const usersData = useSelector((state) => state.datos.datosUsuarios);

  const [valueOnSearch, setValueOnSearch] = useState('') //Dato buscado
  const [dataOnSearch,setDataOnSearch] = useState(usersData) //Datos Mostrados segun Dat Buscado

  
  let filteredData=[]
  useEffect(()=>{


    filteredData = usersData.filter(item => item.firstName.includes(valueOnSearch) ||
                                            item.firstName.includes(valueOnSearch.toLowerCase()) ||
                                            item.lastName.includes(valueOnSearch)||
                                            item.lastName.includes(valueOnSearch.toLowerCase())
    
                                            
                                            )
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
//<Button title='sig' onPress={()=>navigation.navigate('TransferScr')}/>
//<Button title='A transfer' onPress={()=>navigation.navigate('TransferScr')}/>

/*      <ListUsersViewer data={usersData} navigation={navigation}/>

      <ScrollView>
          
      <FlatList style={styles.listContainer} data={usersData} 
      
      renderItem={({ item })=>
                            <CardUser firstName= {item.firstName} 
                                      lastName={item.lastName}
                                      profilePic={item.profilePic}
                                      cvu={item.cvu}
                                      userID={item.id}
                                      

                                      />}
                            />

    </ScrollView>*/

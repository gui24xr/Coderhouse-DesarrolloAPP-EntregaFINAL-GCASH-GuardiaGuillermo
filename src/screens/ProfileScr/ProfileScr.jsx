import styles from './Profile.styles'
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable } from 'react-native'
import React from 'react'
import { ButtonIcons, Card } from '../../components'
import { colors } from '../../constants/constants'
import { MaterialCommunityIcons, Entypo, FontAwesome} from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { getFavoritesData, selectUser } from '../../features/datosSlice'
import * as Clipboard from 'expo-clipboard';


/* En esta pantalla mostramos los datos de perfil de un usuario seleccionado-. 
Si el usuario seleccionado es igual al usuario logueado entonces renderizamos para poder modificar perfil*/

const ProfileScr = ({navigation}) => {

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.datos.usuarioSeleccionado);

  //Necesito renderizar las fotos de perfil de los favoritos, hago un  array con ellos
  const copyToClipboard = async (textToCopy) => {
    await Clipboard.setStringAsync(textToCopy);
    alert('Texto copiado al portapapeles')
  };


  return (
    <ScrollView>
    
      <Card>

           <Text style={styles.textoTitles}>{userData.firstName} {userData.lastName}</Text>
           <Text style={styles.textoUserName}>{userData.userName}</Text>
          
                <Image src={userData.profilePic} style={styles.profilePic} />
                <View style={styles.profileContainerButtons}>
                    <ButtonIcons
                          component={
                            <MaterialCommunityIcons
                              name="heart-outline"
                              size={36}
                              color={colors.favoritesButtonFontColor}
                            />
                              }
                      componentTitle={"Agregar a favoritos"}
                      functionComponent={() => alert("Agregado a favoritos")}
                      buttonColor={colors.favoritesButtonColor}
                      buttonBorderColor={"white"}
                      buttonType="circle"
                    />

                        <ButtonIcons
                      component={
                        <MaterialCommunityIcons
                          name="bank-transfer"
                          size={36}
                          color={colors.favoritesButtonFontColor}
                        />
                      }
                      componentTitle={"Tranferir"}
                      functionComponent={() => alert("Agregado a favoritos")}
                      buttonColor={colors.favoritesButtonColor}
                      buttonBorderColor={"white"}
                      buttonType="circle"
                            />
                </View>
            
        </Card>

        <Card>
          <Text style={styles.textoSubTitles}>CVU</Text>
          <Text style={styles.textoDatos}>{userData.cvuInfo.cvuNumber}</Text>

          <View style={styles.cvuContainerButtons}>

          <ButtonIcons 
                component={<MaterialCommunityIcons name="content-copy" size={18} color={colors.favoritesButtonFontColor} />}
                componentTitle={''}
                functionComponent={()=>copyToClipboard(userData.cvuInfo.cvuNumber)}
                buttonColor={colors.favoritesButtonColor}
                buttonBorderColor={'white'}
                buttonType='circle'
              />
              <ButtonIcons 
              component={<Entypo name="share" size={18} color={colors.favoritesButtonFontColor} />}
              componentTitle={''}
              functionComponent={()=>alert('Aun no implementado')}
              buttonColor={colors.favoritesButtonColor}
              buttonBorderColor={'white'}
              buttonType='circle'
            />
            </View>
        </Card>

        <Card>
            <Text style={styles.textoSubTitles}>MEDIOS DE PAGO</Text>


          {userData.paymentElements.length < 1 ? <Text>USUARIO SIN MEDIOS DE PAGO</Text> :


            <FlatList data={userData.paymentElements}
                      renderItem={({item}) => 
                      <View style={styles.paymentMethodContainer} >

                        <FontAwesome name="credit-card" size={24} color="black" />
                        <View > 
                        {item.typeMethod == 'debit' &&  <Text style={styles.paymentMethodContainerTextTitle}>TARJETA DE DEBITO </Text> }
                         {item.typeMethod == 'credit' &&  <Text style={styles.paymentMethodContainerTextTitle}>TARJETA DE CREDITO</Text>}
                         <Text style={styles.paymentMethodContainerText}>{item.brand} BANCO {item.bank}</Text>
                         </View>


                      </View>
                    
                    }
            
            />

                    }
          </Card>

          <Card>
          <Text style={styles.textoSubTitles}>FAVORITOS</Text>

    
          {userData.favorites < 1 ? <Text>USUARIO NO TIENE FAVORITOS</Text> :


            <FlatList data={userData.favorites}
                     
                      renderItem={({item}) => 
                            <Pressable style={styles.favoritesContainer} onPress={()=>{ 
                              dispatch(selectUser(item.favoriteID))
                              navigation.navigate('ProfileScr')}}>
                              <Image src={item.favoriteProfilePic} style={styles.favoriteProfilePic} />
                              <Text style={styles.favoriteContainerText}>{item.favoriteCompleteName}</Text>
                            </Pressable>}
            
            />
                  }

          </Card>
            
            
      


  
  



    </ScrollView>
  )
}

export default ProfileScr


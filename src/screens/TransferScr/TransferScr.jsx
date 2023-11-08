import styles from './TransferScr.styles'
import {  Text, View, ScrollView, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { ButtonIcons, Card } from '../../components'
import { colors } from '../../constants/constants'
import { MaterialCommunityIcons, Entypo, FontAwesome} from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useState } from 'react'


const TransferScr = () => {

    //Transfiere el usuario logueado al usuario seleccionado.
    const loggedUserData = useSelector((state) => state.datos.loggedUser)
    const userToTransferData = useSelector((state) => state.datos.usuarioSeleccionado)

    //Lo inicio por default en cvu
    const [selectedPayMethod, setSelectedPayMethod] = useState('')

  return (
    <ScrollView>
        <Text style={styles.textoTitles}>TRANSFERIR</Text>  
    
        <Card>
        <Text style={styles.textoSubTitles}>DESTINATARIO</Text>
            <View style={styles.favoritesContainer} >
                  
                <Image src={userToTransferData.profilePic} style={styles.favoriteProfilePic} />
                <View>
                    <Text style={styles.nameText}>{userToTransferData.firstName} {userToTransferData.lastName}</Text>
                    <Text style={styles.favoriteContainerText}>CVU {userToTransferData.cvuInfo.cvuNumber} </Text>
                </View>
            </View>
        </Card>

        <Card>
            <Text style={styles.textoSubTitles}>SELECCIONAR MEDIO DE PAGO</Text>

            <Pressable style={styles.paymentMethodContainer} onPress={()=> setSelectedPayMethod('cvu')} >

                        <FontAwesome name="credit-card" size={24} color={'black'} />
                        <View > 
                        <Text style={styles.paymentMethodContainerTextTitle}>DINERO EN CUENTA GCASH</Text> 
                         <Text style={styles.paymentMethodContainerText}>CVU {loggedUserData.cvuInfo.cvuNumber}</Text>
                         <Text style={styles.paymentMethodContainerText}>Disponible ${loggedUserData.cvuInfo.balance}.00</Text>
                         </View>
            </Pressable>

            
            
            <FlatList data={loggedUserData.paymentElements}
            horizontal
            renderItem={({item}) => 
            <Pressable style={styles.paymentMethodContainer} onPress={()=> {setSelectedPayMethod(item.idPayMethod); console.log(selectedPayMethod)}} > 

              <FontAwesome name="credit-card" size={24} color="black" />
              <View > 
              {item.typeMethod == 'debit' && <View>
                                                <Text style={styles.paymentMethodContainerTextTitle}>TARJETA DE DEBITO </Text>
                                                <Text style={styles.paymentMethodContainerText}>Disponible en un pago ${item.cashBalance} </Text>
                                            </View> }
               
             {item.typeMethod == 'credit' &&  <View>
                                                <Text style={styles.paymentMethodContainerTextTitle}>TARJETA DE CREDITO </Text>
                                                <Text style={styles.paymentMethodContainerText}>Disponible en un pago ${item.cashBalance} </Text>
                                                <Text style={styles.paymentMethodContainerText}>Disponible en cuotas ${item.installmentBalance} </Text>
                                            </View> }

            </View>
            </Pressable>
          
          }
  
  />

        

        
            </Card>
    </ScrollView>
  )
}

export default TransferScr

/*    <Pressable style={styles.favoritesContainer} >
        <Image src={item.favoriteProfilePic} style={styles.favoriteProfilePic} />
        <Text style={styles.favoriteContainerText}>{item.favoriteCompleteName}</Text>
      </Pressable>*/
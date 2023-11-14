import styles from './TransferScr.styles'
import {  Text, View, ScrollView, Pressable, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonIcons, Card, SliderSelector, PaymentCard } from '../../components'
import { colors } from '../../constants/constants'
import { MaterialCommunityIcons, Entypo, FontAwesome} from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { esValorMonetario } from '../../global/funciones'





const TransferScr = () => {

    const valoresPermitidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",","]
    //Transfiere el usuario logueado al usuario seleccionado.
    const loggedUserData = useSelector((state) => state.datos.loggedUser)
    const userToTransferData = useSelector((state) => state.datos.usuarioSeleccionado)

    //Lo inicio por default en cvu del usuario logueado
    const [selectedPayMethod, setSelectedPayMethod] = useState(loggedUserData.cvuInfo.cvuNumber)
    const [valueToTransfer,setValueToTransfer]=useState(0)
    const [inputValue, setInputvalue] = useState('')

    //Con los datos de las tarjetas del usuario formo el array  de payment elementsque le voy a pasar al slider
    //Al del cbu tengo qu formar un objeto para adaptarlo
    const dataForSlider = []
  //Agrego los datos del cvu de GCash y tamien les agrego un ID para que tengan en el slider
    dataForSlider.push({keyID:loggedUserData.cvuInfo.cvuNumber,
                        component: <PaymentCard paymentData={{
                                                  bank:'GCASH', 
                                                  typeMethod:'gcash',
                                                  number:loggedUserData.cvuInfo.cvuNumber, 
                                                  balance:loggedUserData.cvuInfo.balance}
                                                }
      />})
    
    
    loggedUserData.paymentElements.forEach( item => {

        let nuevoObjeto = { keyID: item.idPayMethod,
                            component: <PaymentCard paymentData={{
                              bank:item.bank,
                                typeMethod:item.typeMethod,
                                number: item.number,
                                cashBalance: item.cashBalance,
                                installmentBalance: item.installmentBalance
                            }}/> }

       dataForSlider.push(nuevoObjeto)
      })
      
    //console.log(dataForSlider)

  return (
    <ScrollView>
       
    
        <Card>

          <Text style={styles.textoSubTitles}>TRANSFERIR</Text>  

          <View style={styles.inputContainer}>
            <Text style={styles.textoTitles}>$</Text>  
            <TextInput style={styles.textInput} 
                placeholder="Importe"
                value={valueToTransfer}
                keyboardType="numeric"
                //En esta funcion solo aceptare '0123456789.'
                onChangeText={(text)=> { valoresPermitidos.includes(text) ?? setValueToTransfer(text)}}
              />
          </View>
          <View style={styles.userToTransferContainer} >
                  
            <Image src={userToTransferData.profilePic} style={styles.userToTransferPic} />
            <View style={styles.userToTransferContainerData}>
            <Text style={styles.textoSubTitles}>DESTINATARIO</Text>
               <Text style={styles.textoUserName}>{userToTransferData.firstName} {userToTransferData.lastName}</Text>
               <Text style={styles.textoUserName}>CVU {userToTransferData.cvuInfo.cvuNumber} </Text>
            </View>
          </View>
    
            <Text style={styles.textoSubTitles}>MEDIO DE PAGO E IMPORTE</Text>
            <SliderSelector data={dataForSlider} onChangeFrame={setSelectedPayMethod}/>

           
            <TouchableOpacity style={styles.button} onPress={() => { esValorMonetario(valueToTransfer) ? alert("es monetario") : alert("no es moetario")}}>
            <Text style={styles.buttonText}>CONTNUAR</Text>
          </TouchableOpacity>
            
         </Card>

        


          
           

    </ScrollView>
  )
}

export default TransferScr


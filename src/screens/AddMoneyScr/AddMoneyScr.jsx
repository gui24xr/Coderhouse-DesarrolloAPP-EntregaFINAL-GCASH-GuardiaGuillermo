
import styles from './AddMoneyScr.styles'
import {  Text, View, ScrollView, Pressable, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, SliderSelector, PaymentCard, SectionTitle } from '../../components'
import { colors } from '../../constants/constants'
import { MaterialCommunityIcons, Entypo, FontAwesome} from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { esValorMonetario } from '../../global/funciones'


const MoneyInput= ({stateVar, setStateVar,disponible})=>{

    const valoresPermitidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",","]
    //El numero mostrado esta compuesto de 3 partes
    //Cada vez que cambia el texto 
    let guardado ;
    const [valorMostrado, setValorMostrado] = useState('0')
    const escucharTeclado = (text) =>{
        
        //Seteo la variable de afuera
        //(text)=> {setStateVar}
        guardado = text
        console.log(guardado)
        setValorMostrado( text.toString() , 'h')

    }

    return(
        <>
        <Card>
        <View>
            <Text>INGRESAR IMPORTE</Text>
            <TextInput
                placeholder='AAAA'
                value={valorMostrado}
                keyboardType="numeric"
                onChangeText={escucharTeclado}
            />
            <Text>$ {disponible} Disponible</Text>
        </View>
        </Card>
        </>
    )
}



const AddMoneyScr = () => {


    const valoresPermitidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",","]
    const [valueToAdd,setValueToAdd]=useState(0)

  return (
    <>
        <SectionTitle
        sectionName='Ingresar dinero'
        icon={<MaterialCommunityIcons name="bank-plus" size={36} color={colors.favoritesButtonFontColor} />}
        description={'Con Gcash puedes ingresar dinero a tu cuenta desde tus tarjetas de credito o debito, o enviar links para recibir cobros.'} 
    />

    <ScrollView>
        <Card>
            <Text style={styles.textoTitles}>$</Text>  
            <TextInput style={styles.textInput} 
                placeholder="Importe"
                value={valueToAdd}
                keyboardType="numeric"
                //En esta funcion solo aceptare '0123456789.'
                onChangeText={(text)=> { valoresPermitidos.includes(text) ?? setValueToAdd(text)}}
                />

            </Card>
        
            <Card>
            <MoneyInput disponible='1234'/>
            </Card>
    </ScrollView>



    </>
  )
}

export default AddMoneyScr


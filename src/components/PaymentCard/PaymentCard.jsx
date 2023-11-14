import styles from './PaymentCard.styles'
import {  Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { getDatoAleatoriaArray } from '../../global/funciones';

/*Renderiza un view con datos de un objeto de este esta forma.

{
    idPayMethod: 2,
    typeMethod: 'credit',
    bank: 'Westpac Banking Corporation',
    brand: 'American Express',
    number: '5714-9455-3912-2656',
    cashBalance: 33924865,
    installmentBalance: 58576236,
    issueDate: '01/10',
    expirationDate: '08/14'
  },
*/
const gradientData = [
     ['#3d3d3d', '#1a1a1a', '#000000'], 
     ['#2c3e50', '#34495e', '#2c3e50'], 
    ['#2c2c2c', '#1a1a1a', '#000000'], 
    ['#4d4d4d', '#333333', '#1a1a1a'],
     ['#1f1f1f', '#000000', '#1f1f1f'], 
    ['#336699', '#003366', '#336699'], 
    ['#663366', '#330033', '#663366'], 
    ['#990000', '#660000', '#990000'], 
    ['#cc6600', '#993300', '#cc6600'], 
    ['#800080', '#400040', '#800080'], 
     ['#004d00', '#002600', '#004d00'],
     ['#002080', '#001040', '#002080'], 
    ];

const PaymentCard = ({paymentData}) => {
  return (

    <LinearGradient colors={getDatoAleatoriaArray(gradientData)} style={styles.fondoCard}>
     
            
            <View style={styles.titleContainer}>
                <FontAwesome name="bank" size={42} color="white" />
            
                <View >
                    <Text style={styles.textBank}>{paymentData.bank}</Text>
                    {paymentData.typeMethod == 'debit' && <Text style={styles.textTipoCuenta} >TARJETA DE DEBITO</Text>}
                    {paymentData.typeMethod == 'credit' && <Text style={styles.textTipoCuenta}>TARJETA DE CREDITO</Text>}
                    {paymentData.typeMethod == 'gcash' && <Text style={styles.textTipoCuenta}>DINERO EN CUENTA</Text>}
                    
                </View>
            </View>
            
            <View style={styles.amountsContainer}>

                
        
                {paymentData.typeMethod == 'debit' && <View>
                                            
                                            <Text style={styles.textInfoCard}>Disponible en un pago ${paymentData.cashBalance} </Text>
                                            <Text style={styles.textInfoCard}> </Text>
                                        </View> }
            
                {paymentData.typeMethod == 'credit' &&  <View>
                                            
                                            <Text style={styles.textInfoCard}>Disponible en un pago ${paymentData.cashBalance} </Text>
                                            <Text style={styles.textInfoCard}>Disponible en cuotas ${paymentData.installmentBalance} </Text>
                                        </View> }

            {paymentData.typeMethod == 'gcash' && <View>
                                            
                                        <Text style={styles.textInfoCard}>Disponible ${paymentData.balance} </Text>
                                        <Text style={styles.textInfoCard}> </Text>
                                    </View> }

                {<Text style={{...styles.textInfoCard,...styles.cardNumber}}>Numero: {
                                                                        paymentData.typeMethod == 'gcash' ? paymentData.number :  '...' + paymentData.number.slice(-4)}</Text>}            

        </View>
        
        
        
        </LinearGradient>
  )
}

export default PaymentCard


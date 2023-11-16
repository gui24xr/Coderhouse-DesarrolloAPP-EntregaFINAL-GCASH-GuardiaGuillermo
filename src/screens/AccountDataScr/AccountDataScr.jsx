import styles from '../AccountDataScr/AccountDataScr.styles'
import {  Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { ButtonIcons, Card, SectionTitle } from '../../components'
import { colors } from '../../constants/constants'
import { MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import * as Clipboard from 'expo-clipboard';



const AccountDataScr = () => {

  const loggedUserData = useSelector((state) => state.datos.loggedUser);

  const copyToClipboard = async (textToCopy) => {
    await Clipboard.setStringAsync(textToCopy);
    alert('Texto copiado al portapapeles')
  };


  return (

    <>

    <SectionTitle
        sectionName='datos de tu cuenta...'
        icon={<MaterialCommunityIcons name="bank-transfer" size={36} color={colors.favoritesButtonFontColor} />}
        description={'Para ingresar y recibir dinero desde cuentas bancarias o digitales.'} 
      />
    <ScrollView>




      <Card>

    

      <View style={styles.dataContainer}>
        <Text style={styles.textoTitles}>Tu Alias</Text>
        <Text style={styles.textoDatos}>{loggedUserData.userName}.gcash</Text>

        <ButtonIcons 
              component={<MaterialCommunityIcons name="content-copy" size={20} color={colors.favoritesButtonFontColor} />}
              componentTitle={''}
              functionComponent={()=>copyToClipboard(loggedUserData.userName + '.cash')}
              buttonColor={colors.favoritesButtonColor}
              buttonBorderColor={colors.favoritesButtonBorderColor}
              buttonType='circle'
              />

     
        <Text style={styles.textoTitles}>CVU</Text>
        <Text style={styles.textoDatos}>{loggedUserData.cvuInfo.cvuNumber}</Text>

        <ButtonIcons 
              component={<MaterialCommunityIcons name="content-copy" size={20} color={colors.favoritesButtonFontColor} />}
              componentTitle={''}
              functionComponent={()=>copyToClipboard(loggedUserData.cvuInfo.cvuNumber)}
              buttonColor={colors.favoritesButtonColor}
              buttonBorderColor={colors.favoritesButtonBorderColor}
              buttonType='circle'
              />

      </View>

      <ButtonIcons 
      component={<Entypo name="share" size={20} color={colors.favoritesButtonFontColor} />}
      componentTitle={'  Compartir datos'}
      functionComponent={()=>alert('Aun np Implementado')}
      buttonColor={'#e0ffff'}
      buttonBorderColor={colors.favoritesButtonBorderColor}
      buttonType='rectangle'
      />
      
  

    
    
    </Card>

   
    </ScrollView>
    </>
  )
}

export default AccountDataScr

/*    <ButtonIcons 
              component={<Ionicons name="share-social-outline" size={30} color="red" />}
              componentTitle={'Compartir'}
              functionComponent={()=>alert('hasta')}
              buttonColor={colors.favoritesButtonColor}
              buttonBorderColor={'white'}
              buttonType='circle'




               <Image source={require('../../assets/icons/ahorros.png')} style={{width:180, height:120,resizeMode: 'contain'}}/>
    />*/


    //
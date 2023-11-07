import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { colors } from '../../../constants/constants';
import { ButtonsMenu, ButtonIcons } from '../../../components';


const FavoritesMenu = ({navigation}) => {

    const elementsMenuFavorites = [
        {
            id: "addMoney",
            element: <ButtonIcons 
                      component={<MaterialCommunityIcons name="bank-plus" size={colors.favoriteButtonSize} color={colors.favoritesButtonFontColor} />}
                      componentTitle={'Ingresar'}
                      functionComponent={()=>alert('hasta')}
                      buttonColor={colors.favoritesButtonColor}
                      buttonBorderColor={colors.favoritesButtonBorderColor}
                      buttonType='circle'
            />
            },]

  return (
       <>
    <ButtonsMenu
    menuDirection={'horizontal'}
    elementsList={elementsMenuFavorites}
   
   />
    </>
  )
}

export default FavoritesMenu

const styles = StyleSheet.create({})
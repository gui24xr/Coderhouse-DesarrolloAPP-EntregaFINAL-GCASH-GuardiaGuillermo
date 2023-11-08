import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { colors } from '../../../constants/constants';
import { ButtonsMenu, ButtonIcons } from '../../../components';


const HomeCardMenu = ({navigation}) => {


    const elementsMenuHomeCard = [
        {
          id: "addMoney",
          element: <ButtonIcons 
                    component={<MaterialCommunityIcons name="bank-plus" size={colors.homeCardButtonSize} color={colors.homeCardButtonFontColor} />}
                    componentTitle={'Ingresar'}
                    functionComponent={()=>alert('hasta')}
                    buttonColor={colors.homeCardButtonColor}
                    buttonBorderColor={colors.homeCardButtonBorderColor}
                    buttonType='circle'
          />
          },
          {
            id: "transferMoney",
            element: <ButtonIcons 
                      component={<MaterialCommunityIcons name="bank-transfer" size={colors.homeCardButtonSize} color={colors.homeCardButtonFontColor}  />}
                      componentTitle={'Transferir'}
                      functionComponent={()=>navigation.navigate('TransferSelectScr')}
                      buttonColor={colors.homeCardButtonColor}
                      buttonBorderColor={colors.homeCardButtonBorderColor}
                      buttonType='circle'
            />
            },
            {
              id: "extractMoney",
              element: <ButtonIcons 
                        component={<MaterialCommunityIcons name="bank-plus" size={colors.homeCardButtonSize} color={colors.homeCardButtonFontColor}  />}
                        componentTitle={'Extraer'}
                        functionComponent={()=>navigation.navigate('MapScr')}
                        buttonColor={colors.homeCardButtonColor}
                        buttonBorderColor={colors.homeCardButtonBorderColor}
                        buttonType='circle'
              />
              },
              {
                id: "saveMoney",
                element: <ButtonIcons 
                          component={<MaterialCommunityIcons name="piggy-bank-outline" size={colors.homeCardButtonSize} color={colors.homeCardButtonFontColor}  />}
                          componentTitle={'Ahorrar'}
                          functionComponent={()=>alert("Aun no implementado.")}
                          buttonColor={colors.homeCardButtonColor}
                          buttonBorderColor={colors.homeCardButtonBorderColor}
                          buttonType='circle'
                />
                },
                    
        
        ]
    

  return (

    
    <>
    <ButtonsMenu
    menuDirection={'horizontal'}
    elementsList={elementsMenuHomeCard}
   
   />
    </>
  )
}

export default HomeCardMenu

const styles = StyleSheet.create({})
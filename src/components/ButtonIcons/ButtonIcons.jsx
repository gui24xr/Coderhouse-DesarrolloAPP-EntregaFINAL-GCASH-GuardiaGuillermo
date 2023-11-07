import { StyleSheet } from 'react-native'
import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { LinkButton, Card, ValuesViewer, MenuList } from '../../components'


//Depende el tipo de componente va a renderizar





const ButtonIcons = ({component,componentTitle, functionComponent, buttonColor, buttonBorderColor,buttonType}) => {
  
  
  if (buttonType == 'circle'){
  
  return (
    <View>
    <Pressable 
        onPress={functionComponent}
        style={{backgroundColor: buttonColor, 
                borderRadius:150, 
                alignSelf:'center', 
                padding: 12, 
                borderWidth: 1.5,
                borderColor: buttonBorderColor}}>
      {component}
    </Pressable>
    <View >
    <Text style={{alignSelf:'center', fontSize: 12}}>{componentTitle}</Text>
    
    </View>
  </View>
  )}


  else if (buttonType == 'rectangle'){

    return (
      <>
        <Pressable 
            onPress={functionComponent}
            style={{
                    flexDirection: 'row',
                    
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: buttonColor, 
                    borderRadius:15, 
                    alignItems: 'center',
                    padding: 12, 
                    borderWidth: 1.5,
                    borderColor: buttonBorderColor}}>
          {component}
          <Text style={{alignSelf:'center', fontSize: 18, paddingHorizontal: 20, letterSpacing: 0.7, fontWeight:'500'}}>{componentTitle}</Text>
        </Pressable>
      
      
      
      
    </>
    )
    
  }

}

export default ButtonIcons

const styles = StyleSheet.create({})
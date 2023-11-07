import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { configStyleMenu, menuItems } from '../../screens/MenuGeneralScr/MenuGeneralScr'
import {
    AntDesign,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Ionicons,
    FontAwesome,
  } from "@expo/vector-icons";

const MenuList = ({menuDirection, menuConstructor}) => {

    //menuDirection me trae horizontal true o false.
    let direction = menuDirection == 'horizontal' ? true : false
    const [listDirection, setListDirection] = useState(direction)
  
    return (
    <View>
    <ScrollView
      horizontal={listDirection}
      pagingEnabled
      style={menuConstructor.styleScrollView}
      showsHorizontalScrollIndicator={false}
    >
      {menuConstructor.elements.map((menuItems) => (
        <TouchableOpacity
          key={"menuitem_" + menuItems.title}
          onPress={menuItems.action}
          style={menuConstructor.touchableOpacityStyle}>
            
           
                {menuItems.icono}
         
            <Text style={menuConstructor.textStyle}>
                
            </Text>
        
      </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
  )
}

export default MenuList

const styles = StyleSheet.create({})



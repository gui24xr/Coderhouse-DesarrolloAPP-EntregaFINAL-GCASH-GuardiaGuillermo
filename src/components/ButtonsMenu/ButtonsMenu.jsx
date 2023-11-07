import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

const ButtonsMenu = ({menuDirection, elementsList}) => {

    //menuDirection me trae horizontal true o false.
    let direction = menuDirection == 'horizontal' ? true : false
    const [listDirection, setListDirection] = useState(direction)

  return (
    <ScrollView
      horizontal={listDirection}
      pagingEnabled
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {elementsList.map((item) => (
        <TouchableOpacity 
        key={"menuitem_" + item.id}
        style={styles.element}
        >
         {item.element}
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default ButtonsMenu

const styles = StyleSheet.create({

    container:{
        paddingHorizontal: 8, 
        paddingVertical: 15
    },
    element:{
    paddingHorizontal: 9,
    }
})
import styles from './LinkButton.styles'
import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const LinkButton = () => {
  return (
    <View style={styles.container}>
    <Pressable style={styles.pressableContainer}>
        <AntDesign name="pluscircleo" size={30} color="black" />
    </Pressable>
    
      <Text>LinkButton</Text>
    </View>
  )
}

export default LinkButton


import React from 'react'
import { View } from 'react-native'
import styles from './Card.styles'

const Card = ({ children }) => {
  return <View style={[styles.container]}>{children}</View>
}

export default Card
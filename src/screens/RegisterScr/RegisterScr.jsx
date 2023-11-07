
import styles from './RegisterScr.styles'
import { Button,Text, View } from 'react-native'
import React from 'react'

const RegisterScr = ({navigation}) => {
  return (
    <View>
      <Text>Register</Text>
      <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Home')}
    />
    </View>
  )
}

export default RegisterScr


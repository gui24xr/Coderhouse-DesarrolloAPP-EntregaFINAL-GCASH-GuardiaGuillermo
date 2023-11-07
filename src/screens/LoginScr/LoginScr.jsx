import styles from './LoginScr.styles'
import { Text, View, Button } from 'react-native'
import React from 'react'
import { LoginBarElements } from '../../components'

const LoginScr = ({navigation}) => {
  return (
    <View style={styles.container}>

    
      <Text>LoginScr</Text>

      <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Register')}
    />

    </View>
  )
}

export default LoginScr


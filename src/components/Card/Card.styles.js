import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card1Color,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    margin: 10,
  },

  titleContainer:{
    backgroundColor: 'blue',
  }
})
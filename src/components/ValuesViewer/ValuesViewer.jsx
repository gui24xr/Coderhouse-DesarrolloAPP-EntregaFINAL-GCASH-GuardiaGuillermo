import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {  useState } from 'react';
import { styleTextoTipo1, styleTextoTipo2 } from '../../constants/constants';


const ValuesViewer = ({action,value,textStyle}) => {

    const [valueVisible,setValueVisible] = useState(true)


  return (

    <View style={styles.container}>
    
    <Pressable onPress={action} >
      {valueVisible 
        ?<Text style = {{...styleTextoTipo1,...styles.numberText}}>{value}</Text>
        :<Text style = {{...styleTextoTipo1,...styles.numberTextHidden}}> {'*'.repeat(Number(value.length))}</Text>
      }
    </Pressable>

      <Pressable onPress={()=>setValueVisible(prevState => prevState ? false : true)}>
      {valueVisible 
     ? <Ionicons name="eye-off" style ={ {...textStyle,...styles.eyeIcon}} />
      :<Ionicons name="eye" style = {textStyle} />
      }
      </Pressable>
      </View>

    
  )
}

export default ValuesViewer

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: '#c0c0c0',
        margin:20,
    },
    eyeIcon:{
        justifyContent: 'center'
    },
        numberText:{
            fontSize: 70,
            color: 'blue',
    },
    
        numberTextHidden:{
            fontSize: 70,
            color: '#c0c0c0',
    },
    

})
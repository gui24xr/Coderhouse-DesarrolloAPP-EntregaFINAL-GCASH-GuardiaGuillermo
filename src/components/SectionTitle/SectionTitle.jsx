import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Card } from '../index'
import { styleTextoTipo3, styleTextoTipo5 } from '../../constants/constants'



const SectionTitle = ({icon,sectionName,description}) => {
  return (
    <Card>
        <Pressable style={{ flexDirection: "row", alignItems:'center' }}>
          {icon}
          <Text style={{
              ...styleTextoTipo3,
              marginLeft: 10,
              marginVertical: 2,
              fontSize: 22,
              alignSelf: "center",
            }}
          >
            {" "} {sectionName.toUpperCase()} {" "}
          </Text>
        </Pressable>
        <Text style={{ ...styleTextoTipo5, fontSize: 16, marginVertical: 10 }}>
          {description}
        </Text>
      </Card>
  )
}

export default SectionTitle

const styles = StyleSheet.create({})






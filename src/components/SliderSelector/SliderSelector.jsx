import styles from './SliderSelector.styles'
import {  Pressable, Text, View, TouchableHighlight } from 'react-native'
import React, { useState, useEffect, prevState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';


const SliderSelector = ({data,onChangeFrame,selectedFrame}) => {

 
 const cantFrames = data.length

 const [actualFrame,setActualFrame] = useState(0)

 useEffect(()=>{
  //Al cambiar el frame llama a la funcion pasada en onchangeframe y la llama con el parmetro key.id
  onChangeFrame(data[actualFrame].keyID)
  //console.log('Actual frame: ',data[actualFrame].keyID)
  //console.log("Frame/Key: ", actualFrame,data[actualFrame].keyID)
 },[actualFrame])


//Esto es para el caso en que se quiera setear desde afuera del comoonente el frame a mostrar
 if (selectedFrame != undefined){
    useEffect(()=>{

    //console.log("cambio selecetedframe: ", selectedFrame)
    setActualFrame(Number(selectedFrame))
    //console.log("Frame/Key: ", actualFrame,data[actualFrame].keyID)

     },[selectedFrame])
}
  return (
    <>
   
    {data[actualFrame].component}
      <Pressable style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Pressable style={{alignSelf:'center',}}  onPressIn={()=> actualFrame > 0 && setActualFrame(actualFrame -1 )} >
           
        <Entypo name="arrow-long-left" size={24} color="black" />

            
        </Pressable>
 
      
        <Text style={{alignSelf:'center'}}>{actualFrame+1}/{cantFrames}</Text>
        <Pressable style={{alignSelf:'center',}}  onPressIn={()=> actualFrame < cantFrames-1 && setActualFrame(actualFrame + 1)}>
        <Entypo name="arrow-long-right" size={24} color="black" />

      </Pressable>
      </Pressable>

   
    </>
  )
}

export default SliderSelector


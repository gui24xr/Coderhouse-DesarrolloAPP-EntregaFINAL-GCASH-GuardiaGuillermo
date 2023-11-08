import styles from './MapScr.styles'
import {  Text, View, Dimensions, Button } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useEffect, useState } from 'react';


import * as Location from "expo-location";




const MapScr = () => {

    const ubic1 = {
        latitude: -34.9770882,
        longitude: -58.3749746,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }
    
      const ubic2 = {
        latitude: 41.3995345,
        longitude: 2.1909796,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }

   const [coordenadas, setCoordenadas] = useState('')
   const [regionInicial, setRegionInicial] = useState(ubic2)


  
    useEffect(()=>{

        const getUbicacion = async () => {
            //Verifico Permisos
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
              //setErrorMsg('Permission to access location was denied');
              return 0;
            }
          
            //Obtengo la ubicacion, esta funcion me la devuelve en forma de objeto con los datos.
            let location = await Location.getCurrentPositionAsync({});
          
            //Devuelvo un objeto coords.
            //console.log(location.coords)
            //console.log(location.coords.latitude)
            //console.log(location.coords.longitude)
            //Devuelve cero si hay error, si no devuelve las coord.
            //return location.coords;
            setCoordenadas(location.coords)
            console.log(location.coords)
            

          };
        
          //Lla mo a la funcion para obtener la ubicacion a mostrar en el mapa
          getUbicacion()
     

    },[])
  
    return (

       

        <View style={styles.container}>
        <Button title="rrrr" onPress={()=> setRegionInicial(ubic1)}/>
      <MapView
       
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={regionInicial}
        mapType="standard"
      ></MapView>
    </View>
  )
}

export default MapScr


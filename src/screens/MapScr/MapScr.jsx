import styles from "./MapScr.styles";
import { Text, View, Dimensions, Button, Pressable } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { Card, SliderSelector, ButtonIcons } from "../../components";
import PointCard from "./Components/PointCard";
import { colors } from "../../constants/constants";
import * as Location from "expo-location";
import markersData from "../../global/markersData";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import MarkersData from "../../global/markersData";
import axios from "axios";


const getUbicacion = async () => {
  //Verifico Permisos
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    //setErrorMsg('Permission to access location was denied');
    return 0;
  }
  //Obtengo la ubicacion, esta funcion me la devuelve en forma de objeto con los datos.
  let location = await Location.getCurrentPositionAsync({});
  //Devuelvo un objeto coords. //console.log(location.coords) //console.log(location.coords.latitude)
  //console.log(location.coords.longitude) //Devuelve cero si hay error, si no devuelve las coord

  //Ahora pongo en regionMostrada la ubicacion del usuario, creo un objeto con su ubicacion
  const userActualUbication = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };
  //setCoordenadas(location.coords)
  //setRegionMostrada(userActualUbication)
  console.log("location: ", location.coords.latitude);
  return location.coords.latitude;
};

//Datos para cargar el slider con los markerData
const dataForSlider = [];
markersData.forEach((item) => {
  let nuevoObjeto = {
    keyID: item.id,
    component: (
      <PointCard
        pointName={item.name}
        pointDirection={item.direction}
        pointContact={item.contact}
      />
    ),
  };

  dataForSlider.push(nuevoObjeto);
});

const MapScr = () => {
  //region INicial sera el domicilio del usuario de usuario
  const coordenadasUser = useSelector((state) => state.datos.loggedUser.location);
  //Esta la usare para calcula la distancia entre puntos con google matrix
  //const coordUserStringFormat =   "'" + coordenadasUser["latitude"].toString() + "," +  coordenadasUser["longitude"].toString() + "'";
  //let coordPointStringFormat =  "'" +  coordenadasUser.latitude.toString() + "," +  coordenadasUser.longitude.toString() +  "'";

  const ubicacionDomicilioUsuario = {
    latitude: coordenadasUser.latitude,
    longitude: coordenadasUser.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  //Para cambiar la region de mapa mostrado.
  const [regionMostrada, setRegionMostrada] = useState(ubicacionDomicilioUsuario);
 //Punto seleccionado por el slider
  const [selectedPoint, setSelectedPoint] = useState("domicilio");
   //Marker seleccionado para centrar el mapa.
  const [clickedPoint, setClickedPoint] = useState(0);
  //Estado de ubicacion activa.
  const [locationEnabled, setLocationEnabled] = useState(null)

  //En este use effect cambio el mapa de lugar, borrar x ahora el use efect de ubcation
  useEffect(() => {
    //console.log("Elegido ID: ", selectedPoint);

    // Escucho donde clickeo el usuario (Sea por tocar el boton domicilio o un marker o el slider) y depende lo que clickeo es donde centro el mapa
    if (selectedPoint == "domicilio") {
      //console.log("Se eligio domicilio");
      setRegionMostrada(ubicacionDomicilioUsuario);
    } else if ( selectedPoint == 'ubicacion'){

       console.log("Se eligio ubicacion")
          const checkLocationEnabled = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
      
            if (status === 'granted') {
              const enabled = await Location.hasServicesEnabledAsync();
              setLocationEnabled(enabled);
            } else {
              setLocationEnabled(false);
              //Si no la activo le sugiero activar
             getUbicacion()
            }
          };

        checkLocationEnabled()
        console.log(locationEnabled)

    }    
    //Si es un ID busco el ID en marker data para extraer las coordenadas.
    else {
      const positionIDBuscado = markersData.findIndex(
        (element) => element.id == selectedPoint
      );
      //Ya tengo la posicion y se que existe.
      setRegionMostrada({
        latitude: markersData[positionIDBuscado].latitude,
        longitude: markersData[positionIDBuscado].longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      });

    }

  }, [selectedPoint]);

  return (
    <>
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            ...styles.textoSubTitles,
            fontSize: 20,
            alignSelf: "center",
          }}
        >
          PUNTO DE EXTRACCION GCASH
        </Text>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={regionMostrada}
        mapType="standard"
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          key={"domicilio"}
          coordinate={{
            latitude: coordenadasUser.latitude,
            longitude: coordenadasUser.longitude,
          }}
          image={require("../../assets/icons/hogar.png")}
          style={{ width: 150, height: 150 }}
        />

        {markersData.map((punto) => (
          <Marker
            key={punto.id}
            coordinate={{
              latitude: punto.latitude,
              longitude: punto.longitude,
            }}
            onPress={() => {
              setClickedPoint(punto.id);
              //console.log("Clikeado: ", punto.id);
            }}
          />
        ))}
      </MapView>

      <View style={{ backgroundColor: "white" }}>
        <SliderSelector
          data={dataForSlider}
          onChangeFrame={setSelectedPoint}
          selectedFrame={clickedPoint}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 10,
        }}
      >
        <ButtonIcons
          component={
            <FontAwesome
              name="home"
              size={colors.favoriteButtonSize}
              color={colors.favoritesButtonFontColor}
            />
          }
          componentTitle={"Mi Domicilio"}
          functionComponent={() => setSelectedPoint("domicilio")}
          buttonColor={colors.favoritesButtonColor}
          buttonBorderColor={colors.favoritesButtonColor}
          buttonType="circle"
        />

        <ButtonIcons
          component={
            <Ionicons
              name="locate"
              size={colors.favoriteButtonSize}
              color={colors.favoritesButtonFontColor}
            />
          }
          componentTitle={"Mi Ubicacion"}
          functionComponent={() => setSelectedPoint("ubicacion")}
          buttonColor={colors.favoritesButtonColor}
          buttonBorderColor={colors.favoritesButtonColor}
          buttonType="circle"
        />
      </View>
    </>
  );
};


export default MapScr;




















/*
 useEffect(()=>{

        //En el primer renderizado yo quiero centrar el mapa en la ubicacion del usuario.
        //SI el usuario no me da la ubicacion uso el domicilio de su perfil ( lo traigo del store)
        const getUbicacion = async () => {
            //Verifico Permisos
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {//setErrorMsg('Permission to access location was denied');
              return 0;
            }
            //Obtengo la ubicacion, esta funcion me la devuelve en forma de objeto con los datos.
            let location = await Location.getCurrentPositionAsync({});
             //Devuelvo un objeto coords. //console.log(location.coords) //console.log(location.coords.latitude)
            //console.log(location.coords.longitude) //Devuelve cero si hay error, si no devuelve las coord
            
            //Ahora pongo en regionMostrada la ubicacion del usuario, creo un objeto con su ubicacion
            const userActualUbication = {
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }
            //setCoordenadas(location.coords)
            setRegionMostrada(userActualUbication)
            console.log('location: ', location.coords)
            

          };
        
          //Lla mo a la funcion para obtener la ubicacion a mostrar en el mapa
          getUbicacion()
     

    },[])

*/

/*

 { ubicacionHabilitada 
      && <MarkersData key={'ubicacionActual'}
                     coordinate={{latitude: actualUbicationData.latitude, 
                                  longitude:actualUbicationData.longitude}}
                                  image={require('../../assets/icons/alfiler.png')} 
      />}

      */

/*

        //Esta funcion va a cambiar el centro y tambien calcular la distancia
  const cambiarCentro = () => {
    setRegionMostrada({
      latitude: markersData[contador].latitude,
      longitude: markersData[contador].longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });

    contador = contador + 1;
    console.log("Contador paso a: ", contador);
    console.log("Region: ", regionMostrada);
  };  */



  /*
  
    const coordenada1 = "37.7749,-122.4194"; // Formato: latitud,longitud
    const coordenada2 = "34.0522,-118.2437";
    const coordenada3 = "27.7749,-122.4194";
    const coordenada4 = "-34.9770,-58.3741";
    const coordenada5 = "-34.9770882,-58.3749746"; // Coordenada de Buenos Aires, Argentina
    const coordenada6 = "-34.6037,-58.3816"; // Coordenada de otro punto (ejemplo: Plaza de Mayo)
    const coordenada7 = "-24.7829,-65.4124";
    const coordenada8 = "-34.9770882,-58.3749746";

    calcularDistancia(coordenada8, coordenada8, APIKEYMATRIX);
    */


    /*
const APIKEYMATRIX = "AIzaSyAmKfvuZFK2D0AYjq5RnZyjvZyKWvvp5hI";

//Con esta parte calculo la distancia
async function calcularDistancia(coordenada1, coordenada2, apiKey) {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${coordenada1}&destinations=${coordenada2}&key=${apiKey}`;
  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      // Extraer la distancia del primer elemento de la respuesta
      console.log("AAA: ", response.data.rows[0]);
      const distancia = response.data.rows[0].elements[0].distance.text;
      console.log(`La distancia entre las coordenadas es: ${distancia}`);
    } else {
      console.error(`Error al calcular la distancia: ${response.data.status}`);
    }
  } catch (error) {
    console.error("Error de red:", error.message);
  }
}*/
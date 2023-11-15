import styles from "./MapScr.styles";
import { Text, View, Pressable } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { Card, SliderSelector } from "../../components";
import PointCard from "./Components/PointCard";
import { colors } from "../../constants/constants";
import * as Location from "expo-location";
import markersData from "../../global/markersData";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { calcularDistancia } from "../../global/funciones";



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
  //region Inicial mostrada en el mapa sera el domicilio del usuario de usuario. La Exporto del store.
  const coordenadasUser = useSelector((state) => state.datos.loggedUser.location);

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
  //Estado card visible
  const [cardVisible,setCardVisible] = useState(true)
  //Ubicacion actual del usuario en caso de estar encendida en el dispositivo.
  const [distanceLocatePoint,setDistanceLocatePoint] = useState(0)
  //Distancia entre domicilio y punto.
  const [distanceAdressToPoint, setDistanceAdressToPoint] = useState(0)

  
   /*Este Effect se va a encargar de centrar el mapa en el punto elegido en el slider y de cambiar el frame del slider si el usuario clickea un marker en el mapa
    Cada vez que cambie selected point
   */
  useEffect(() => {
        // Escucho donde clickeo el usuario (Sea por tocar el boton domicilio o un marker o el slider) y depende lo que clickeo es donde centro el mapa
    if (selectedPoint == "domicilio") setRegionMostrada(ubicacionDomicilioUsuario);
    else { //Si se clickeo un ID busco el ID en marker data para extraer las coordenadas.
      const positionIDBuscado = markersData.findIndex((element) => element.id == selectedPoint);
      //Ya tengo la posicion y se que existe, seteo la region mostrada.
      setRegionMostrada({
        latitude: markersData[positionIDBuscado].latitude,
        longitude: markersData[positionIDBuscado].longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      });
    }

  }, [selectedPoint]);

   //Este useffect se encarga de informar al componente si la ubicacion dl movil esta activada o no.
   useEffect(()=>{
  
    const checkLocateState = async () =>{
      
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status === 'granted') {
        //Si la ubicacion esta activda la seteo y la guardo en el hook correspondiente.
        const estadoUbicacion = await Location.hasServicesEnabledAsync();
        setLocationEnabled(estadoUbicacion);//True o false depende este activa o no
     } 
      else setLocationEnabled(false)// Si la ubicacion no esta activada pongo a flase el hook locationEnabled.
    }

    checkLocateState()
},)


  /** Este effect va a gestionar el tema de la calculo de distancia entre puntos mostrados en cada renderizado al cambiar el punto mostrado.
   * 1- SI no esta activada, de todos modos va a calcular la distancia Point-Domicilio user para mostrar en el state correspondiente,.
   * 2- Si esta activada va a obtener la ubicacion y calcular la distancia Point Domiclio y setearla en el state correspondiente.
   */
  useEffect(()=>{

    const renderizarDistancias = async () => {
              //obtengo las coordenadas del domicilio del user, del punto seleccionado y le doy forma de parametrospara utilizar en la funcion que devuelve la distancia, luego calculo.
        const coordActualPoint = {lat: regionMostrada.latitude, lng: regionMostrada.longitude}
        const addressUser = { lat: coordenadasUser.latitude, lng: coordenadasUser.longitude }; //console.log('Domicilio User: ', locationUser)
        //Calculo la distancia , la tengo expresada en metros,si es menor que 1000m envio leyenda en metros, si no en KMS
        const distanceAdressToPoint = (await calcularDistancia(addressUser, coordActualPoint)).distanciaValue;
        distanceAdressToPoint < 1001 
          ? setDistanceAdressToPoint('A ' + distanceAdressToPoint+ 'ms de tu domicilio.')
          : setDistanceAdressToPoint('A ' + distanceAdressToPoint/1000 + 'Kms de tu domicilio.')
          
        /* Ahora checkeo si la ubicacion del dispostivo esta activada y de acuerdo a eso calculo o no la distancia ubicacion-point */
        if ( locationEnabled){
        //Obtengo la ubicacion actual del usuario.
        locationActual = await Location.getCurrentPositionAsync({}) //console.log('Location: ', locationActual)
        //obtengo las coordenadas del la ubicacion del user, del punto seleccionado y le doy forma de parametrospara utilizar en la funcion que devuelve la distancia, luego calculo
        const coordenadasLocateUser = { lat: locationActual.coords.latitude, lng: locationActual.coords.longitude }; //console.log('LOcate User: ', coordenadasLocateUser)
        const coordActualPoint = {lat: regionMostrada.latitude, lng: regionMostrada.longitude} // console.log("RegionMostrada: ", regionMostrada)
        //Calculo la distancia , la tengo expresada en metros,si es menor que 1000m envio leyenda en metros, si no en KMS
        const distanciaLocateToPoint = (await calcularDistancia(coordenadasLocateUser, coordActualPoint)).distanciaValue;
        distanciaLocateToPoint < 1001 
         ? setDistanceLocatePoint('A ' + distanciaLocateToPoint+ 'ms de tu ubicacion.')
         : setDistanceLocatePoint('A ' + distanciaLocateToPoint/1000 + 'Kms de tu ubicacion.')
       
        }
      }
      //Llamo a la funcion.
      renderizarDistancias()
    }, [selectedPoint])

    
  
  






  return (
    <>
     
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={regionMostrada}
        mapType="standard"
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
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
            image={require("../../assets/icons/pago.png")}
            onPress={() => {
              setClickedPoint(punto.id);
              //console.log("Clikeado: ", punto.id);
            }}
          />
        ))}

    
      </MapView>

    { cardVisible && 
    <Card>
      <View style={{ paddingVertical: 10, backgroundColor: 'white' }}>
        <Text   style={{...styles.textoSubTitles, fontSize: 18, alignSelf: "center", }}>
          PUNTOS DE EXTRACCION GCASH
        </Text> 
      </View>
      <View style={{ backgroundColor: "white" }}>
        <SliderSelector
          data={dataForSlider}
          onChangeFrame={setSelectedPoint}
          selectedFrame={clickedPoint}
        />
      </View>
      <View style={{backgroundColor:'white', paddingVertical: 15, paddingLeft: 20}}>
        <View style={{flexDirection: 'row'}}>
        <FontAwesome
        name="home"
        size={colors.favoriteButtonSize}
        color={colors.favoritesButtonFontColor}
        />
        <Text style={{...styles.textoSubTitles, fontSize: 15, alignSelf: "center", marginLeft:10 }}>{distanceAdressToPoint}</Text>
      </View>
    <View style={{flexDirection: 'row'}}>
      <AntDesign
      name="pushpin"
      size={colors.favoriteButtonSize}
      color={colors.favoritesButtonFontColor}
      />
      {
       locationEnabled 
       ?<Text style={{...styles.textoSubTitles, fontSize: 15, alignSelf: "center", marginLeft:10 }}>{distanceLocatePoint}</Text>
       :
        <Text style={{...styles.textoSubTitles, fontSize: 15, alignSelf: "center", marginLeft:10, color:'gray' }}>Activa tu ubicacion para conocer la distancia</Text>
        
      }
      </View>
    </View>
    <Pressable style={{alignItems:'flex-end', }} onPress={()=>setCardVisible(false)}>
      <Text style={{fontWeight:'500'}}>Ocultar</Text>
    </Pressable>
   
  </Card>}

   {cardVisible == false && 
    <View style={{backgroundColor:'white', alignItems:'center'}}>
      <Ionicons name="ios-menu" size={24} color="black" onPress={()=>setCardVisible(true)} />
    </View>}


    </>
  );
};


export default MapScr;


















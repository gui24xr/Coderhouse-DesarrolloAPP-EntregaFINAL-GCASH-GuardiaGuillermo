import styles from "./CommunityViewer.styles";
import { Text, View, Image } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { generarValorAleatorio } from "../../global/funciones";




const CommentItem = (props) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.userName}>{props.userName}</Text>
      <Image style={styles.profilePic}src={props.profilePic}/>
      <Text>Hola, yo soy {props.firstname} {props.lastname} de {props.country} y te recomiendo mucho utilizar GCash !!! </Text>
    </View>
    
   
  )
}



const CommunityViewer = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    
    const cantidadRegistrosPedidos = generarValorAleatorio(4,12) //Entre 4 y 12 opiniones vamos a renderizar.
    const urlApiDatos = "https://random-data-api.com/api/v2/users?size=" + cantidadRegistrosPedidos + "&is_xml=true";

    // Función asíncrona para cargar datos
    const fetchData = async () => {
      try {
        
        const response = await fetch(urlApiDatos);
        const result = await response.json();
        setData(result); // Actualiza el estado con los datos cargados
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false); // Establece el estado de carga a falso
      }
    };

    fetchData(); // Llama a la función de carga de datos
  }, []); // El segundo argumento [] asegura que se ejecute solo una vez (equivalente a componentDidMount en una clase)

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => 
                    <CommentItem profilePic={item.avatar} userName={item.username} firstname={item.first_name}
                                lastname={item.last_name} country= {item.address.country}
                    />}
      />
    </View>
  );
};

export default CommunityViewer;


import axios from "axios";

//Genera un valor aleatorio entre min y max
const generarValorAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);


//Escoge uy retorna un valor aleatorio de un array pasado por parametro
  const getDatoAleatoriaArray = (unArray) => {
    //Esta la usare para pasar array con datos predeterminados y que me devuelva aleatoriamente uno de los valores contenidos, ejemplo el de categoria de imagenes.
    //Se supone es un array no vacio.
    if (unArray.length > 0)
      return unArray[generarValorAleatorio(0, unArray.length - 1)];
    else return unArray[0];
  };
  
  //Retorna trueo false segun un valor es monetario o no
  const esValorMonetario = (valor) => {
     const regex = /^\d+(\.\d{1,2})?$/;
     return regex.test(valor);
  }



//Esta funcion calcula la distancia entre coordenadas utilizando Distance Matrix de google
const APIKEYMATRIX = "AIzaSyAmKfvuZFK2D0AYjq5RnZyjvZyKWvvp5hI";


async function calcularDistancia(coordenadasOrigen, coordenadasDestino) {
  const apiKey = 'TU_CLAVE_DE_API'; // Reemplaza con tu propia clave de API de Google Distance Matrix

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        origins: `${coordenadasOrigen.lat},${coordenadasOrigen.lng}`,
        destinations: `${coordenadasDestino.lat},${coordenadasDestino.lng}`,
        key: APIKEYMATRIX
      },
    });

    //const coordenadasOrigen = { lat: 37.7749, lng: -122.4194 }; // Coordenadas de San Francisco, CA
    //const coordenadasDestino = { lat: 34.0522, lng: -118.2437 }; // Coordenadas de Los Angeles, CA
    const distanciaText = response.data.rows[0].elements[0].distance.text;
    const distanciaValue = response.data.rows[0].elements[0].distance.value;

    return { distanciaText, distanciaValue };
  } catch (error) {
    console.error('Error al calcular la distancia:', error.message);
    throw error;
  }
}


  export {generarValorAleatorio, getDatoAleatoriaArray, esValorMonetario, calcularDistancia}
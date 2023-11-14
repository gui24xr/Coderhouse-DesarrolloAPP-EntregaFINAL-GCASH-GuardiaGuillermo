const generarValorAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

  const getDatoAleatoriaArray = (unArray) => {
    //Esta la usare para pasar array con datos predeterminados y que me devuelva aleatoriamente uno de los valores contenidos, ejemplo el de categoria de imagenes.
    //Se supone es un array no vacio.
    if (unArray.length > 0)
      return unArray[generarValorAleatorio(0, unArray.length - 1)];
    else return unArray[0];
  };
  
  const esValorMonetario = (valor) => {
     const regex = /^\d+(\.\d{1,2})?$/;
     return regex.test(valor);
  }


  export {generarValorAleatorio, getDatoAleatoriaArray, esValorMonetario}
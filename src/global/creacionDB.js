

function generarFechaAleatoria() {

  //genera una fecha aleatoria entre 2010 y 23 con el formato mes y anio mes/anio
  const mes = generarValorAleatorio(1,12)
  const anio = generarValorAleatorio(2010,2023) // Número aleatorio entre 2000 y 2030 para el año

  // Formatear la fecha en el formato 'mes/año'
  const mesStr = mes<10  ? '0'+ mes.toString() : mes.toString()
  const anioStr = anio.toString().slice(2,4)


  return mesStr + '/' + anioStr
}

function generarFechaAleatoriaAntesDe(fechaReferencia) {
  //genera una fecha aleatoria anterior entre uno y 10 años con el formato mes y anio mes/anio
  let [mesReferencia, anioReferencia] = fechaReferencia.split('/').map(Number);

  const restarAnios = generarValorAleatorio(1,10)
  
  let restarMeses = generarValorAleatorio(0,mesReferencia-1)
  let nuevoMes = mesReferencia - restarMeses
  nuevoMes = nuevoMes<10 ? '0'+ nuevoMes.toString() : nuevoMes.toString()
  
  let nuevoAnio = anioReferencia-restarAnios
  nuevoAnio = nuevoAnio <10 ? '0' + nuevoAnio.toString() : nuevoAnio.toString()

  
 console.log(fechaReferencia,'restar: ',restarAnios,"Fecha ANT: ",nuevoMes + '-' + nuevoAnio)

return nuevoMes + '/' + nuevoAnio
  
}



const getDatoAleatoriaArray = (unArray) => {
  //Esta la usare para pasar array con datos predeterminados y que me devuelva aleatoriamente uno de los valores contenidos, ejemplo el de categoria de imagenes.
  //Se supone es un array no vacio.
  if (unArray.length > 0)
    return unArray[generarValorAleatorio(0, unArray.length - 1)];
  else return unArray[0];
};

const generarValorAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);


const generarCVU = (cvuGuardados) =>{

  const cvuMin = 111111111111111
  const cvuMax = 999999999999999
  
  const unCVU = generarValorAleatorio(cvuMin,cvuMax)

  //Pregunto si el cvu ya esta dentro de cvuGuardados y si no esta, lo guardo
  if (!cvuGuardados.includes(unCVU)) cvuGuardados.push(unCVU)

}


const generarPaymentCard = () =>{

  let numGuardados = []
  let cantGenerar = 70
  
  //12 numeros
  const numMin = 1000000000000000
  const numMax = 9999999999999999
  
//Genero el numero
for (let i=0; i<cantGenerar;i++){
  const nuevoNum = generarValorAleatorio(numMax,numMin)
  while (numGuardados.includes(nuevoNum)) nuevoNum = generarValorAleatorio(numMax,numMin)
          numGuardados.push(nuevoNum)
}

//ya tengo los numeros, ahora recorro el array y le meto guiones
for (let i=0; i<numGuardados.length;i++){

  numGuardados[i] = numGuardados[i].toString()
  numGuardados[i] = numGuardados[i].slice(0,4)+'-'+
                    numGuardados[i].slice(4,8)+'-'+
                    numGuardados[i].slice(8,12)+'-'+
                    numGuardados[i].slice(12,16)
}
  console.log(numGuardados)


//----------------------
let registros = []

for (let i=0; i<cantGenerar;i++){

  const fechaAleatoriaVencimiento = generarFechaAleatoria()
  

  let unRegistro = {
    idPayMethod: i,
    typeMethod: getDatoAleatoriaArray(['debit','credit']),
    bank: getDatoAleatoriaArray(nombresDeBancos),
    brand: getDatoAleatoriaArray(marcasTarjetasCredito),
    number: '344',
    cashBalance: generarValorAleatorio(0,99999999),
    installmentBalance: generarValorAleatorio(0,99999999),
    issueDate: generarFechaAleatoriaAntesDe(fechaAleatoriaVencimiento),
    expirationDate:fechaAleatoriaVencimiento,
  }

registros.push(unRegistro)

}

//Ahora meto numeros de tarjetas a registros
let j=0

registros.forEach( item =>{

item.number = numGuardados[j]
j++


})

console.log(registros)


}







function creacionDePerfilesAleatorios() {


    const cantidadRegistrosPedidos = 29;
    const urlApiDatos =
      "https://random-data-api.com/api/v2/users?size=" +
      cantidadRegistrosPedidos +
      "&is_xml=true";
  

    fetch(urlApiDatos)
      .then((response) => response.json())
      .then((data) => { 
        
        
        let registros =[]
        let i=2

        registros.push({
          id: 1,
          userName:'guillermo_guardia_1',
          firstName:'Guillermo',
          lastName:'Guardia',
          password: '123456',
          profilePic: 'https://m.media-amazon.com/images/I/51MVxZrGYbL.jpg',
          cvu: '1',
          paymentMethods:[],
          favorites:[],
          operations:[]
        })
        //console.log(data)
        data.forEach(element => {

            const nuevoRegistro ={
              id: i,
              userName:element.first_name + '_' + element.last_name + '_' + i,
              firstName:element.first_name,
              lastName:element.last_name,
              password: '123456',
              profilePic: element.avatar,
              cvu: '1',
              paymentMethods:[],
              favorites:[],
              operations:[]
            }

            registros.push(nuevoRegistro)
            i++
          
        });
      
       console.log(registros)
      
      })

    }
//export {creacionDePerfilesAleatorios, generarCVU}
/*
let arrayCvuGuardados = []

while (arrayCvuGuardados.length < 30){

  const nuevoCvu = generarCVU(arrayCvuGuardados)
}

for (let i=0; i<arrayCvuGuardados.length;i++){

  arrayCvuGuardados[i] = arrayCvuGuardados[i].toString()
  arrayCvuGuardados[i] = arrayCvuGuardados[i].slice(0,2)+'-'+
                         arrayCvuGuardados[i].slice(2,6)+'-'+
                         arrayCvuGuardados[i].slice(6,10)+'-'+
                         arrayCvuGuardados[i].slice(10,14)
}

//console.log(arrayCvuGuardados)

*/
//creacionDePerfilesAleatorios()


let arrayCvuS = [
  '24-2455-2862-2554', '88-4963-7065-5155',
  '61-9620-3668-4664', '22-9704-4787-7219',
  '80-5024-7263-3652', '83-3792-1789-4149',
  '41-7369-1338-1026', '63-6814-3423-8054',
  '79-9063-1566-5310', '49-2710-8803-6750',
  '64-9745-6435-1383', '35-4105-9176-2872',
  '28-1382-7659-6100', '84-8140-6771-0371',
  '41-9249-2953-4175', '12-1834-9204-7873',
  '88-6006-7280-2709', '88-3733-5385-9809',
  '81-3787-5447-5172', '87-3284-6376-6370',
  '18-2422-7461-1319', '56-2930-3509-5496',
  '60-2086-9264-7565', '85-9236-8066-5185',
  '26-2532-0692-5845', '72-6665-3170-4506',
  '97-3853-1520-9664', '13-7989-7124-6874',
  '82-7264-0645-1782', '15-8535-6147-4850'
]




let arrayDatos = [
  {
    id: 1,
    userName: 'guillermo_guardia_1',
    firstName: 'Guillermo',
    lastName: 'Guardia',
    password: '123456',
    profilePic: 'https://m.media-amazon.com/images/I/51MVxZrGYbL.jpg',
    cvu: '24-2455-2862-2554',
    paymentMethods: [],
    favorites: [],
    operations: []
  },
  {
    id: 2,
    userName: 'Piedad_Stokes_2',
    firstName: 'Piedad',
    lastName: 'Stokes',
    password: '123456',
    profilePic: 'https://robohash.org/numquammollitiaet.png?size=300x300&set=set1',
    cvu: '88-4963-7065-5155',
    paymentMethods: [ 2, 20, 30 ],
    favorites: [],
    operations: []
  },
  {
    id: 3,
    userName: 'Britt_Kozey_3',
    firstName: 'Britt',
    lastName: 'Kozey',
    password: '123456',
    profilePic: 'https://robohash.org/estiustounde.png?size=300x300&set=set1',
    cvu: '61-9620-3668-4664',
    paymentMethods: [ 14, 28, 36, 69 ],
    favorites: [],
    operations: []
  },
  {
    id: 4,
    userName: 'Bertha_Weber_4',
    firstName: 'Bertha',
    lastName: 'Weber',
    password: '123456',
    profilePic: 'https://robohash.org/quaeratomnisoptio.png?size=300x300&set=set1',
    cvu: '22-9704-4787-7219',
    paymentMethods: [ 15 ],
    favorites: [],
    operations: []
  },
  {
    id: 5,
    userName: 'Hilton_Jerde_5',
    firstName: 'Hilton',
    lastName: 'Jerde',
    password: '123456',
    profilePic: 'https://robohash.org/officiisdelenititenetur.png?size=300x300&set=set1',
    cvu: '80-5024-7263-3652',
    paymentMethods: [ 18, 38, 55, 65 ],
    favorites: [],
    operations: []
  },
  {
    id: 6,
    userName: 'Takisha_Hartmann_6',
    firstName: 'Takisha',
    lastName: 'Hartmann',
    password: '123456',
    profilePic: 'https://robohash.org/quietin.png?size=300x300&set=set1',
    cvu: '83-3792-1789-4149',
    paymentMethods: [ 9, 34, 42 ],
    favorites: [],
    operations: []
  },
  {
    id: 7,
    userName: 'Myesha_Champlin_7',
    firstName: 'Myesha',
    lastName: 'Champlin',
    password: '123456',
    profilePic: 'https://robohash.org/quoeumet.png?size=300x300&set=set1',
    cvu: '41-7369-1338-1026',
    paymentMethods: [ 23, 27, 41, 47 ],
    favorites: [],
    operations: []
  },
  {
    id: 8,
    userName: 'Damien_Abbott_8',
    firstName: 'Damien',
    lastName: 'Abbott',
    password: '123456',
    profilePic: 'https://robohash.org/consecteturomnisqui.png?size=300x300&set=set1',
    cvu: '63-6814-3423-8054',
    paymentMethods: [ 13, 54 ],
    favorites: [],
    operations: []
  },
  {
    id: 9,
    userName: 'Jenna_Pfannerstill_9',
    firstName: 'Jenna',
    lastName: 'Pfannerstill',
    password: '123456',
    profilePic: 'https://robohash.org/estofficiisesse.png?size=300x300&set=set1',
    cvu: '79-9063-1566-5310',
    paymentMethods: [ 7, 26, 46 ],
    favorites: [],
    operations: []
  },
  {
    id: 10,
    userName: 'Toshia_Runolfsson_10',
    firstName: 'Toshia',
    lastName: 'Runolfsson',
    password: '123456',
    profilePic: 'https://robohash.org/repellendusutsunt.png?size=300x300&set=set1',
    cvu: '49-2710-8803-6750',
    paymentMethods: [ 3, 11, 21, 59 ],
    favorites: [],
    operations: []
  },
  {
    id: 11,
    userName: 'Mason_Schulist_11',
    firstName: 'Mason',
    lastName: 'Schulist',
    password: '123456',
    profilePic: 'https://robohash.org/nobisomnisquam.png?size=300x300&set=set1',
    cvu: '64-9745-6435-1383',
    paymentMethods: [ 31 ],
    favorites: [],
    operations: []
  },
  {
    id: 12,
    userName: 'Sherwood_Hirthe_12',
    firstName: 'Sherwood',
    lastName: 'Hirthe',
    password: '123456',
    profilePic: 'https://robohash.org/quinobisiusto.png?size=300x300&set=set1',
    cvu: '35-4105-9176-2872',
    paymentMethods: [ 10, 50 ],
    favorites: [],
    operations: []
  },
  {
    id: 13,
    userName: 'Norberto_Koch_13',
    firstName: 'Norberto',
    lastName: 'Koch',
    password: '123456',
    profilePic: 'https://robohash.org/illumnonrepudiandae.png?size=300x300&set=set1',
    cvu: '28-1382-7659-6100',
    paymentMethods: [ 33 ],
    favorites: [],
    operations: []
  },
  {
    id: 14,
    userName: 'Hiram_Ondricka_14',
    firstName: 'Hiram',
    lastName: 'Ondricka',
    password: '123456',
    profilePic: 'https://robohash.org/fugaaccusantiumdignissimos.png?size=300x300&set=set1',
    cvu: '84-8140-6771-0371',
    paymentMethods: [ 12, 40, 43, 45, 53 ],
    favorites: [],
    operations: []
  },
  {
    id: 15,
    userName: 'Steve_Kunze_15',
    firstName: 'Steve',
    lastName: 'Kunze',
    password: '123456',
    profilePic: 'https://robohash.org/quossuscipitnihil.png?size=300x300&set=set1',
    cvu: '41-9249-2953-4175',
    paymentMethods: [ 29 ],
    favorites: [],
    operations: []
  },
  {
    id: 16,
    userName: 'Dorine_Lemke_16',
    firstName: 'Dorine',
    lastName: 'Lemke',
    password: '123456',
    profilePic: 'https://robohash.org/debitisdoloribusex.png?size=300x300&set=set1',
    cvu: '12-1834-9204-7873',
    paymentMethods: [ 5, 44 ],
    favorites: [],
    operations: []
  },
  {
    id: 17,
    userName: 'Edgardo_McCullough_17',
    firstName: 'Edgardo',
    lastName: 'McCullough',
    password: '123456',
    profilePic: 'https://robohash.org/commodinonet.png?size=300x300&set=set1',
    cvu: '88-6006-7280-2709',
    paymentMethods: [ 25, 60 ],
    favorites: [],
    operations: []
  },
  {
    id: 18,
    userName: 'Kelsie_Osinski_18',
    firstName: 'Kelsie',
    lastName: 'Osinski',
    password: '123456',
    profilePic: 'https://robohash.org/doloribusvoluptasmodi.png?size=300x300&set=set1',
    cvu: '88-3733-5385-9809',
    paymentMethods: [ 67 ],
    favorites: [],
    operations: []
  },
  {
    id: 19,
    userName: 'Joe_Walker_19',
    firstName: 'Joe',
    lastName: 'Walker',
    password: '123456',
    profilePic: 'https://robohash.org/quasiasperioresveritatis.png?size=300x300&set=set1',
    cvu: '81-3787-5447-5172',
    paymentMethods: [],
    favorites: [],
    operations: []
  },
  {
    id: 20,
    userName: 'Rolland_Harris_20',
    firstName: 'Rolland',
    lastName: 'Harris',
    password: '123456',
    profilePic: 'https://robohash.org/dolorefugiatexplicabo.png?size=300x300&set=set1',
    cvu: '87-3284-6376-6370',
    paymentMethods: [ 22, 63 ],
    favorites: [],
    operations: []
  },
  {
    id: 21,
    userName: 'Harris_Zieme_21',
    firstName: 'Harris',
    lastName: 'Zieme',
    password: '123456',
    profilePic: 'https://robohash.org/inrerumnon.png?size=300x300&set=set1',
    cvu: '18-2422-7461-1319',
    paymentMethods: [ 1, 24, 64 ],
    favorites: [],
    operations: []
  },
  {
    id: 22,
    userName: 'Kristopher_Ledner_22',
    firstName: 'Kristopher',
    lastName: 'Ledner',
    password: '123456',
    profilePic: 'https://robohash.org/voluptatelaboreet.png?size=300x300&set=set1',
    cvu: '56-2930-3509-5496',
    paymentMethods: [ 16, 19, 32 ],
    favorites: [],
    operations: []
  },
  {
    id: 23,
    userName: 'Cierra_Schmitt_23',
    firstName: 'Cierra',
    lastName: 'Schmitt',
    password: '123456',
    profilePic: 'https://robohash.org/teneturfugiatcorrupti.png?size=300x300&set=set1',
    cvu: '60-2086-9264-7565',
    paymentMethods: [ 37, 48, 51, 52, 57, 68 ],
    favorites: [],
    operations: []
  },
  {
    id: 24,
    userName: 'Shanae_Hansen_24',
    firstName: 'Shanae',
    lastName: 'Hansen',
    password: '123456',
    profilePic: 'https://robohash.org/voluptasquasaperiam.png?size=300x300&set=set1',
    cvu: '85-9236-8066-5185',
    paymentMethods: [ 4 ],
    favorites: [],
    operations: []
  },
  {
    id: 25,
    userName: 'Terrell_Schmitt_25',
    firstName: 'Terrell',
    lastName: 'Schmitt',
    password: '123456',
    profilePic: 'https://robohash.org/facerelaboriosamnecessitatibus.png?size=300x300&set=set1',
    cvu: '26-2532-0692-5845',
    paymentMethods: [],
    favorites: [],
    operations: []
  },
  {
    id: 26,
    userName: 'Brande_Block_26',
    firstName: 'Brande',
    lastName: 'Block',
    password: '123456',
    profilePic: 'https://robohash.org/aliquididquisquam.png?size=300x300&set=set1',
    cvu: '72-6665-3170-4506',
    paymentMethods: [ 17, 66 ],
    favorites: [],
    operations: []
  },
  {
    id: 27,
    userName: 'Hong_Goldner_27',
    firstName: 'Hong',
    lastName: 'Goldner',
    password: '123456',
    profilePic: 'https://robohash.org/nonipsamqui.png?size=300x300&set=set1',
    cvu: '97-3853-1520-9664',
    paymentMethods: [ 0, 58 ],
    favorites: [],
    operations: []
  },
  {
    id: 28,
    userName: 'Sam_Heidenreich_28',
    firstName: 'Sam',
    lastName: 'Heidenreich',
    password: '123456',
    profilePic: 'https://robohash.org/impeditetiure.png?size=300x300&set=set1',
    cvu: '13-7989-7124-6874',
    paymentMethods: [ 35, 49 ],
    favorites: [],
    operations: []
  },
  {
    id: 29,
    userName: 'Frank_Turcotte_29',
    firstName: 'Frank',
    lastName: 'Turcotte',
    password: '123456',
    profilePic: 'https://robohash.org/quiexercitationemqui.png?size=300x300&set=set1',
    cvu: '82-7264-0645-1782',
    paymentMethods: [ 6, 8, 62 ],
    favorites: [],
    operations: []
  },
  {
    id: 30,
    userName: 'Ana_Rogahn_30',
    firstName: 'Ana',
    lastName: 'Rogahn',
    password: '123456',
    profilePic: 'https://robohash.org/inciduntearumest.png?size=300x300&set=set1',
    cvu: '15-8535-6147-4850',
    paymentMethods: [ 39, 56, 61 ],
    favorites: [],
    operations: []
  }
]

//A partir de array cvu creo una base de datos con info de los cvu

let infoCVU =[
  {
    cvuNumber: '24-2455-2862-2554',
    balance: 5431971486,
    operations: []
  },
  {
    cvuNumber: '88-4963-7065-5155',
    balance: 5486583879,
    operations: []
  },
  {
    cvuNumber: '61-9620-3668-4664',
    balance: 4813759905,
    operations: []
  },
  {
    cvuNumber: '22-9704-4787-7219',
    balance: 4011045181,
    operations: []
  },
  {
    cvuNumber: '80-5024-7263-3652',
    balance: 4913892002,
    operations: []
  },
  {
    cvuNumber: '83-3792-1789-4149',
    balance: 9609560879,
    operations: []
  },
  {
    cvuNumber: '41-7369-1338-1026',
    balance: 9140822150,
    operations: []
  },
  {
    cvuNumber: '63-6814-3423-8054',
    balance: 5927558595,
    operations: []
  },
  {
    cvuNumber: '79-9063-1566-5310',
    balance: 7304917307,
    operations: []
  },
  {
    cvuNumber: '49-2710-8803-6750',
    balance: 4004289257,
    operations: []
  },
  {
    cvuNumber: '64-9745-6435-1383',
    balance: 3443210747,
    operations: []
  },
  {
    cvuNumber: '35-4105-9176-2872',
    balance: 5039925275,
    operations: []
  },
  {
    cvuNumber: '28-1382-7659-6100',
    balance: 9702599203,
    operations: []
  },
  {
    cvuNumber: '84-8140-6771-0371',
    balance: 4730734827,
    operations: []
  },
  {
    cvuNumber: '41-9249-2953-4175',
    balance: 9515587626,
    operations: []
  },
  {
    cvuNumber: '12-1834-9204-7873',
    balance: 1796576564,
    operations: []
  },
  {
    cvuNumber: '88-6006-7280-2709',
    balance: 1944485826,
    operations: []
  },
  {
    cvuNumber: '88-3733-5385-9809',
    balance: 6378438172,
    operations: []
  },
  {
    cvuNumber: '81-3787-5447-5172',
    balance: 3620161778,
    operations: []
  },
  {
    cvuNumber: '87-3284-6376-6370',
    balance: 1862704531,
    operations: []
  },
  {
    cvuNumber: '18-2422-7461-1319',
    balance: 6706539209,
    operations: []
  },
  {
    cvuNumber: '56-2930-3509-5496',
    balance: 2318023142,
    operations: []
  },
  {
    cvuNumber: '60-2086-9264-7565',
    balance: 5686663395,
    operations: []
  },
  {
    cvuNumber: '85-9236-8066-5185',
    balance: 6075608959,
    operations: []
  },
  {
    cvuNumber: '26-2532-0692-5845',
    balance: 1245316369,
    operations: []
  },
  {
    cvuNumber: '72-6665-3170-4506',
    balance: 5797250345,
    operations: []
  },
  {
    cvuNumber: '97-3853-1520-9664',
    balance: 3796455761,
    operations: []
  },
  {
    cvuNumber: '13-7989-7124-6874',
    balance: 4408437635,
    operations: []
  },
  {
    cvuNumber: '82-7264-0645-1782',
    balance: 9920484927,
    operations: []
  },
  {
    cvuNumber: '15-8535-6147-4850',
    balance: 602956424,
    operations: []
  }
]





const nombresDeBancos = [
  'Banco Santander',
  'BBVA',
  'CaixaBank',
  'Banco de Crédito del Perú',
  'JPMorgan Chase & Co.',
  'HSBC Holdings plc',
  'Wells Fargo & Co.',
  'Bank of America',
  'Deutsche Bank',
  'Banco Itau',
  'Citibank',
  'Banco do Brasil',
  'BNP Paribas',
  'Société Générale',
  'Barclays',
  'UBS Group AG',
  'Credit Suisse',
  'Bank of Montreal',
  'Royal Bank of Canada',
  'Toronto-Dominion Bank',
  'National Australia Bank',
  'Commonwealth Bank of Australia',
  'Westpac Banking Corporation',
  'ING Group',
  'ABN AMRO Bank',
  'KBC Group',
  'UniCredit Group',
  'Intesa Sanpaolo',
  'Banco de Sabadell',
  'Banco Popular Español',
];

// Puedes acceder a los nombres 

const marcasTarjetasCredito = [
  'Visa',
  'Mastercard',
  'American Express',
  'Discover',
  'Diners Club',
  'JCB',
  'Maestro',
  'Visa Electron',
  'UnionPay',
  'Mir',
  'Chase Sapphire',
  'Capital One',
  'Citi',
  'Wells Fargo',
  'Barclays',
  'HSBC',
  'Santander',
  'TD Bank',
  'BBVA',
  'PNC Bank'
];

//generarPaymentCard()
//Ahopra asignare medios de pago entre 0 y 70, si lo asigne lo guardo para no repeti

let cantidad;
let listaArrays=[]
let arrayParaFavoritos=[]
let elegido
for (let h=0; h<29;h++ ){

  //Amigos a generar
   cantidad = generarValorAleatorio(0,10)
   arrayParaFavoritos=[]

   for (let g=0;g<cantidad;g++){ 
    
    
    elegido = generarValorAleatorio(1,30)
    arrayParaFavoritos.push(elegido)
    
    
  }

  //Antes de agregar quito los repetidos.
  arrayParaFavoritos = [...new Set(arrayParaFavoritos)]
  //listaArrays.push(arrayParaFavoritos)
  
  arrayDatos[h].favorites = arrayParaFavoritos

}
//listaArrays.forEach(x => console.log(x, '\n'))
//console.log(arrayDatos)
//arrayDatos.forEach(item => console.log(item.paymentMethods))
console.log(arrayDatos)
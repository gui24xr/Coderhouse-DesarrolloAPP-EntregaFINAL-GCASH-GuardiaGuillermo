
import { StyleSheet, Text, View } from 'react-native'
import StackNavigation from './src/navigation/StackNavigation.js'
import { Provider } from 'react-redux';
import {store} from './src/store/store.js'
import baseDatos from './src/db/dataBaseApp.js';

//let DB = new baseDatos()



export default function App() {
  return (

    <Provider store={store}>
    <StackNavigation/>
  </Provider>
 
   
  );
}

//export {DB}


  /*

 */
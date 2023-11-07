import styles from './LoginBarElements.style'
import { Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';




const LoginBarElements = () => {


  //const dispatch = useDispatch();
 const loggedUserData = useSelector((state) => state.datos.loggedUser);
 

  return (
    <View style={styles.viewLoginBarElements}>
        
        <Pressable style={styles.pressableProfileName}>
           
          
          <Text style={styles.txtProfileName}>Hola, {loggedUserData.firstName} {loggedUserData.lastName}</Text>
          <Image src={loggedUserData.profilePic} style={styles.profilePic} />  
        </Pressable>
      

        
          
            
       

    </View>
  )
}

export default LoginBarElements


import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Card } from '../../../components';
import {  Text, View, Dimensions, Button } from 'react-native'
import { colors } from '../../../constants/constants';

const PointCard = ({pointName, pointDirection,pointContact}) =>{

  return(
    <View style={{backgroundColor: colors.generalColor, padding: 10, marginBottom: 10,alignItems:'center' }}>
    

    <View style={{flexDirection:'row',}}>
      
      <View style={{justifyContent:'flex-start'}}>
        <MaterialCommunityIcons name="map-marker" size={40} color="red" />
       
      </View>
      <View style={{marginHorizontal: 20,}}>
      <Text style={{...styles.textoSubTitles, marginBottom: 1, color: 'white'}}>{pointName}</Text>
        <Text style={{color:'white', fontSize: 16}}>{pointDirection}</Text>
        <View style={{flexDirection:'row', paddingVertical:5}}>
          <Feather style={{alignSelf:'center'}} name="phone" size={14} color="white" />
          <Text style={{paddingLeft: 5, color: 'white', fontSize: 16}}>{pointContact}</Text>
        </View>
        
      </View>
    </View>
    
    </View>
  )
}

export default PointCard
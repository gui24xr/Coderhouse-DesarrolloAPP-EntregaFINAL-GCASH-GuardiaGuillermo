import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Card } from '../../../components';
import {  Text, View, Dimensions, Button } from 'react-native'
import { colors } from '../../../constants/constants';

const PointCard = ({pointName, pointDirection,pointContact}) =>{

  return(
    <View >
    

    <View style={{flexDirection:'row',marginBottom:15}}>
      
      <View style={{justifyContent:'flex-start'}}>
        <MaterialCommunityIcons name="map-marker" size={40} color="red" />
       
      </View>
      <View style={{marginHorizontal: 5,}}>
      <Text style={{...styles.textoSubTitles, marginBottom: 1, }}>{pointName}</Text>
        <Text style={{ fontSize: 16}}>{pointDirection} | <Feather style={{alignSelf:'center',}} name="phone" size={14} color="black" />  {pointContact}</Text>
    
      </View>
    </View>
    
    </View>
  )
}

export default PointCard
import styles from './NotificationsScr.styles'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'
import SliderSelector from '../../components/SliderSelector/SliderSelector'
import { PaymentCard } from '../../components'




const NotificationsScr = () => {

  const [fixedComponentTop, setFixedComponentTop] = useState(0);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setFixedComponentTop(offsetY);
  };

  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {/* Contenido desplazable aquí */}
        <View style={{ height: 2000 }}>
          <Text>Desplázate hacia abajo</Text>
        </View>
      </ScrollView>

      {/* Componente que se "fija" en la parte superior */}
      <View style={[styles.fixedComponent, { top: fixedComponentTop }]}>
        <Text>¡Este componente está fijo en la parte superior!</Text>
      </View>
    </View>
  );
}

export default NotificationsScr


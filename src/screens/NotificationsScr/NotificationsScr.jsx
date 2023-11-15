import styles from './NotificationsScr.styles'
import { ScrollView, View, Text, Animated, Pressable } from 'react-native'
import { useState, useRef } from 'react'
import React from 'react'



const Slider = ({ onValueChange, children }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [sliderWidth, setSliderWidth] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const newX = gestureState.moveX - sliderWidth / 2;
      pan.setValue({ x: newX, y: 0 });
    },
    onPanResponderRelease: () => {
      // Calcular el valor del slider y llamar a la función proporcionada por el usuario
      const value = pan.x.interpolate({
        inputRange: [0, sliderWidth],
        outputRange: [0, 100], // Puedes ajustar este rango según tus necesidades
        extrapolate: 'clamp',
      });
      onValueChange && onValueChange(value);
    },
  });

  const handleLayout = (event) => {
    setSliderWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.slider, { transform: [{ translateX: pan.x }] }]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const NotificationsScr = () => {


  return (
    
      <Text>dgdgdgdgdg</Text>
  );
}

export default NotificationsScr



  import React from 'react';
  import {View, StyleSheet, Text, ImageBackground} from 'react-native';
  






import field from "../assets/images/field.jpg";
import { FontAwesome5 } from '@expo/vector-icons';
import FieldPlayer from './FieldPlayer';


const players: { [key: string]: null[] } = {
    FWD: [null, null, null,],
    MID: [null, null, null, null],
    DEF: [null, null, null, null, null],
    GKC: [null],
};
  const Field = () => {
      return (
          <ImageBackground
              source={field}
              style={{ width: '100%', aspectRatio: 2 / 3, justifyContent: 'space-around', alignItems: 'center' }}
              resizeMode="contain"
          >
              {Object.keys(players).map(position => (
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                      {players[position].map((player) => (
                          <FieldPlayer player={player} position={position}/>
                      ))}
                  </View>
              ))} 
          </ImageBackground>

      );
  }
  
  const styles = StyleSheet.create({})
  
  export default Field;
  
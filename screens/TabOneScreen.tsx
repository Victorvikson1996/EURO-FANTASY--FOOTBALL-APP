import * as React from 'react';
import { StyleSheet,  SafeAreaView, Pressable, Text} from 'react-native';

import Field from '../components/Field'



export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Field/>
       <Pressable style={styles.ButtonContainer}>
       <Text>View Players</Text>
       </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },


  ButtonContainer: {
    backgroundColor: 'orange',
    width: '90%',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 'auto'
  },
  
});

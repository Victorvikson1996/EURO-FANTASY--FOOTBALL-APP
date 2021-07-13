import BottomSheet from '@gorhom/bottom-sheet';
import  React, { useRef } from 'react';
import { StyleSheet,  SafeAreaView, Pressable,View, Text} from 'react-native';

import Field from '../components/Field'
import TeamStats from '../components/TeamStats';

export default function TabOneScreen() {


  const playersBottomSheet = useRef<BottomSheet>(null);


  const viewPlayers = () => {
   playersBottomSheet.current?.expand();
  }


  
  const snapPoints = [0, '50%',]


 
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats/>
      <Field/>
       <Pressable onPress={viewPlayers} style={styles.ButtonContainer}>
       <Text>View Players</Text>
       </Pressable>

       <BottomSheet ref={playersBottomSheet}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>

    </SafeAreaView>
  );   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#72cc5E',
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

  contentContainer: {

  }, 
  
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardResultQuestionnaire } from './components/index'

export default function App() {
  return (
    <View style={styles.container}>
      <CardResultQuestionnaire
        grade={4}
        msgCHU={"PropTypes.string"}
        notifReport={'PropTypes.string,'}
        nextReport={'PropTypes.string,'}
        lastCreatedReport={'PropTypes.string'}
        text1={'PropTypes.string'} 
        text2={'PropTypes.string'} 
        text3={'PropTypes.string'} 
        text4={'PropTypes.string'} 
        text5={'PropTypes.string'} 
        text6={'PropTypes.string'} 
        text7={'PropTypes.string'} 
        text8={'PropTypes.string'} 
        text9={'PropTypes.string'}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

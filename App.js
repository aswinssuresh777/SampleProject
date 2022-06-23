/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Watsapp from './components/Watsapp';
import Statevalue from './components/Statevalue';
import CurrentState from './components/CurrentState';
import Add from './components/Add';
import RestApiGet from './components/RestApiget';
//import LoginScreen from './login/LoginScreen';
import GetApi from './Api/GetApi';
import PostCall from './Api/PostApi';
import RestApiPost from './components/RestApipost';
import Select from './components/Select';
import Student from './components/Student';
import Avatar from './components/Avatar';




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:2}}>
      {/* <Add/> */}
      {/* <Watsapp/> */}
      {/* <Statevalue/> */}
      {/* <CurrentState/> */}
      {/* <RestApiGet/> */}
      {/* <LoginScreen/> */}
      {/* <GetApi/> */}
      {/* <PostCall/> */}
      {/* <RestApiPost/> */}
      <View style={{flex:0.5,backgroundColor:'lightgrey'}}><Avatar/></View>
      <View style={{flex:0.3}}><Select/></View>
      <View style={{flex:1.5}}><Student/></View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

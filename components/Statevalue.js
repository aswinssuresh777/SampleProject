import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const Statevalue = () => {
  const [num, setNum] = useState(10);

   console.log(num);
  const add = () => {
    setNum(num + 1);
    console.log(num);
    
    
  };
  useEffect(() => {
    add();
  }, []);

  

  return (
    <SafeAreaView>
      <View>
       
        <Button title="check" onPress={add} /> 
        <Text>Result= {num}</Text>
       
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default Statevalue;

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

const Add = () => {
//   const [num, setNum] = useState(10);
  const [sum, setSum] = useState('');
//    console.log(num);
  const add = () => {
    // setSum(num);
    // setNum(num + 1);
    // console.log(num);
    // console.log(sum);
    const a = 10;
  const b = 10;

  const c  = a + b;
  setSum(c);
  };
  useEffect(() => {
    // add();
  }, []);

  

  return (
    <SafeAreaView>
      <View>
        <Button title="Add" onPress={add}/>
        {/* <Button title="check" onPress={add} /> */}
        {/* <Text>Result= {num}</Text> */}
        <Text>Result={sum}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default Add;

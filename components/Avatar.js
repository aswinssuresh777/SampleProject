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
  Image,
} from 'react-native';
import avatar from '..//asserts/images/avatar.png';
import forward from '..//asserts/images/forward.png';
import backward from '..//asserts/images/backward.png';

const Avatar = () => {
  const [sum, setSum] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{flex: 0.5}}>
          <Image
            resizeMode="cover"
            style={{
              height: 35,
              width: 35,
              borderRadius: 50,
              marginLeft: 10,
              marginTop: 30,
            }}
            source={backward}
          />
        </View>

        <View style={{flex: 0.7, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              marginLeft: 10,
            }}
            source={avatar}
          />
          <View style={{marginTop: 9}}>
            <Text style={{color: 'red', fontSize: 20}}>Susan Rogers</Text>
            <Text style={{fontSize: 15}}>Susan</Text>
          </View>
        </View>

        <View>
          <Image
            resizeMode="cover"
            style={{
              height: 35,
              width: 35,
              borderRadius: 50,
              marginLeft: 10,
              marginTop: 30,
            }}
            source={forward}
          />
        </View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginTop: 55,
    backgroundColor: 'lightgrey',
  },
});

export default Avatar;

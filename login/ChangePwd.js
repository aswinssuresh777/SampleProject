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
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import IMAGES from '../asserts/image';
import LoginScreen from './LoginScreen';

const ChangePwd = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('Keyboard Hidden');
  const [loginid, SetLoginid] = useState();
  const [password, SetPassword] = useState();
  const [changepwd, setChangepwd] = useState(0);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View>
      <Text>hi bro</Text>
      <TextInput
                    style={styles.passwordstyle}
                    onChangeText={SetOldpassword}
                    value={oldpassword}
                    
                  />
      </View> */}
      {changepwd == 1 ? (
        <LoginScreen />
      ) : (
        <>
          <View style={styles.mainview}>
            <View style={styles.mainview1}>
              <Text style={styles.textstyle}>FACI</Text>
              <Text style={styles.textstyle1}>O</Text>
            </View>
            <View style={styles.inputBackgroundView}>
              <View style={styles.inputView}>
                <Image
                  source={IMAGES.blackMessage}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.loginstyle}
                  onChangeText={SetLoginid}
                  value={loginid}
                  onPressIn={() => setKeyboardStatus('Keyboard Shown')}
                />
              </View>
            </View>
            <View style={styles.inputBackgroundView}>
              <View style={styles.inputView}>
                <Image
                  source={IMAGES.blackLock}
                  style={styles.icon1}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.passwordstyle}
                  onChangeText={SetPassword}
                  value={password}
                  secureTextEntry={true}
                  onPressIn={() => setKeyboardStatus('Keyboard Shown')}
                />
              </View>
            </View>
          </View>
          <View>
            {keyboardStatus === 'Keyboard Hidden' ? (
              <>
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>CONFIRM</Text>
                </TouchableOpacity>
                <View style={styles.passRecoverview}>
                  <Text
                    onPress={() => setChangepwd(1)}
                    style={styles.passText1}>
                    Redirect to login page
                  </Text>
                </View>
              </>
            ) : null}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  buttonStyle: {
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    marginLeft: 24,
    marginRight: 20,
    marginTop: 26,
    marginBottom: 26,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: 'white',
    marginTop: 14,
    marginBottom: 16,
    fontSize: 18,
    fontFamily: 'bold',
  },
  backgroundstyle: {
    flex: 1,
  },
  mainview: {
    flex: 0,
  },
  mainview1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  icon: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    marginRight: 15,
    marginTop: 6,
  },
  icon1: {
    height: 35,
    width: 35,
    marginRight: 15,
    // backgroundColor: 'white',
    marginTop: 6,
  },
  loginidview: {
    flexDirection: 'row',
    width: 300,
    borderRadius: 5,
    marginLeft: 24,
    marginRight: 20,
    marginTop: 26,
    marginBottom: 26,
    // backgroundColor:'white',
    opacity: 0,
  },
  inputBackgroundView: {
    // backgroundColor: 'white',
    // opacity: 0.5,
    marginLeft: 24,
    marginRight: 20,
    borderRadius: 6,
    marginTop: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  inputView: {
    // backgroundColor: 'black',
    flexDirection: 'row',
    // opacity: 0.7,
    padding: 10,
    borderRadius: 6,
  },
  whiteLock: {
    //backgroundColor:'green',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0,
  },
  textstyle: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  textstyle1: {
    fontSize: 50,
    color: 'lightgreen',
    fontWeight: 'bold',
  },
  loginstyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
  },
  passwordstyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
  },
  passRecoverview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  passText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'bold',
  },
  passText1: {
    fontSize: 20,
    color: 'green',
    fontFamily: 'bold',
  },
});

export default ChangePwd;

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
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import mick from '..//asserts/images/mick.png';
import avatar from '..//asserts/images/avatar.png';
const DATA = [
  {
    id: 0,
    title: 'A',
    color: '#FF53DC',
    color0: '#FF53DC1f',
  },
  {
    id: 1,
    title: 'B',
    color: '#50C1F9',
    color0: '#50C1F91f',
  },
  {
    id: 2,
    title: 'C',
    color: '#E62626',
    color0: '#E626261f',
  },
  {
    id: 3,
    title: 'D',
    color: '#ff6804',
    color0: '#ff68041f',
  },
  {
    title: 'E',
    color: '#02C028',
    color0: '#02c0281f',
  },
  {
    id: 4,
    title: 'F',
    color: '#6900F2',
    color0: '#6900f21f',
  },
  {
    id: 5,
    title: 'U',
    color: '#9f9f9f',
    color0: '#9f9f9f47',
  },
];

const Item = ({item, onPress, backgroundColor, textColor, borderColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, backgroundColor, borderColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
const Student = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? item.color : item.color0;

    const color = item.id === selectedId ? 'white' : item.color;

    const borderColor = item.id === selectedId ? item.color0 : item.color;

    return (
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        borderColor={{borderColor}}
        textColor={{color}}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view0}>
        <Text style={styles.Assign}>Assign Grade</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={7}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.Assign}>Comment</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              flex: 0.9,
              height: 150,
              padding: 10,
              textAlignVertical: 'top',
              borderWidth: 2,
              borderColor: 'lightgrey',
              margin: 40,
              fontSize: 25,
            }}
          />

          <Image
            source={mick}
            style={{
              height: 70,
              width: 70,

              // marginTop:75
            }}
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 9}}>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Attachments
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Maximum Upload size is 30 MB
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'blue',
                marginRight: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Attach
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            marginTop: 12,
            borderBottomColor: 'grey',
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 55}}>
          <Image />
          <Text>AssignmentData</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight || 0,
  },
  Assign: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    borderWidth: 2,
  },
  title: {
    fontSize: 32,
  },
});
export default Student;

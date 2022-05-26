import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View,FlatList,TouchableOpacity } from "react-native";
import axios from "axios";

const GetApi = () => {
  const [data, setData] = useState();
  const [selectedId, setSelectedId] = useState(null);


  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log("RES:", response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      });
  };
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
   
    <View style={styles.container}>
      {/* <Button title="Get data" onPress={() => getData()} />
      <Text>ID: {data ? data[0].id : null}</Text>
      <Text>TITLE: {data ? data[0].title : null}</Text>
      <Text>BODY: {data ? data[0].body : null}</Text>
      <Text>ID: {data ? data[1].id : null}</Text>
      <Text>TITLE: {data ? data[1].title : null}</Text>
      <Text>BODY: {data ? data[1].body : null}</Text> */}
      <Button title="Get data" onPress={() => getData()} /> 
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
});

export default GetApi;
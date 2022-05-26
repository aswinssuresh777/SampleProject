import React, {useState,useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
const RestApiGet = () => {
  const [jsonData, setJsonData] = useState(false);
  useEffect(() => {
    fetch(
      'https://localhost:44302/Employee'
      //'https://jsonplaceholder.typicode.com/posts/1'
      , {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        setJsonData(json.id),
        console.log("JSON: ",json)
      })
      .catch(error => {
        console.error("ERROR",error);
      });
  }, []);

  return (
    <View style={{paddingTop: 30}}>
      <Text>DATA:</Text>
      <Text>{jsonData}</Text>
    </View>
  );
};
export default RestApiGet;
import React, {useState,useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
const RestApiGet = () => {
  const [jsonData, setJsonData] = useState(false);
  useEffect(() => {
    fetch(
      'https://parseapi.back4app.com/classes/sample1'
      //'https://jsonplaceholder.typicode.com/posts/1'
      , {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Parse-Application-Id': 'GllsfTJ7vJSvGqz5vjKX0p74UkvoWsGcpw1Qrkqg',
'X-Parse-REST-API-Key': '4BaMDDXuxPiZu1Usvr2ucht876PLnWQC6UH9DQwO',
      
      },
    })
      .then(response => response.json())
      .then(json => {
        setJsonData(json.results[0].objectId),
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
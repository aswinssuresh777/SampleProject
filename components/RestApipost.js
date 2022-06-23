// import React, {useState,useEffect} from 'react';
// import {Text, View, StatusBar} from 'react-native';
// const RestApiPost = () => {
//   const [jsonData, setJsonData] = useState(false);
//   useEffect(() => {
//     fetch('https://example.com/data', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           newName: 'Some Name',
//           id: 123
//         })
//       })
//       .then(response => response.json())
//       .then(json => {
//         setJsonData(json.id),
//         console.log("JSON: ",json)
//       })
//       .catch(error => {
//         console.error("ERROR",error);
//       });
//   }, []);

//   return (
//     <View style={{paddingTop: 30}}>
//       {/* <Text>DATA:</Text>
//       <Text>{jsonData}</Text> */}
//     </View>
//   );
// };
// export default RestApiPost;
import React, {useState,useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
const RestApiPost = () => {
  const [jsonData, setJsonData] = useState(false);
  useEffect(() => {
    fetch('https://parseapi.back4app.com/classes/B4aVehicle', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Parse-Application-Id': 'wswJ3k4f6a4glEOZKGeRoEnFJTWRSNLyVJUEOhrz',
'X-Parse-REST-API-Key': 'gEbsXOGHKthVvfawSNrqZBky45E9QoDmWFiqH9wb',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        //   newName: 'Some Name',
        //   id: 123
        name:'elaya',
        color:'red',
        price:90
        })
      })
      .then(response => response.json())
      .then(json => {
        setJsonData(json.objectID),
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
export default RestApiPost;

import axios from "axios";
import React from "react";
import { Button, Image, StyleSheet, Text, View,FlatList,TouchableOpacity } from "react-native";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState('');

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
      console.log("data:",response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
        console.log("data:",response.data);
      });
  }

//   if (!post) return "No post!"

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
      <Button onPress={createPost} title='create'/>
   </View>
  );
}
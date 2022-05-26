import React, { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const CurrentState = () => {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(10);
  useEffect(() => {
    console.log('data1',data1);
  }, [data1]);

  return (
    <View>
      <Button
        title="Click"
        onPress={() => {
          setData1(20);
        }}
      />
      <Text>{data1}</Text>
      <Button
        title="Click"
        onPress={() => {
          setData2(20);
          console.log('data2',data2);
        }}
      />
      <Text>{data2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CurrentState;
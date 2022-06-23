// import React, {useState, useEffect} from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Button,
// } from 'react-native';
// import SelectDropdown from 'react-native-select-dropdown'
// const Select = () => {

//     const countries = ["Egypt", "Canada", "Australia", "Ireland"]
//   return (
//     <SafeAreaView>
//       <View>
//       <SelectDropdown
// 	data={countries}
// 	onSelect={(selectedItem, index) => {
// 		console.log(selectedItem, index)
// 	}}
// 	buttonTextAfterSelection={(selectedItem, index) => {
// 		// text represented after item is selected
// 		// if data array is an array of objects then return selectedItem.property to render after item is selected
// 		return selectedItem
// 	}}
// 	rowTextForSelection={(item, index) => {
// 		// text represented for each item in dropdown
// 		// if data array is an array of objects then return item.property to represent item in dropdown
// 		return item
// 	}}
//     dropdownIconPosition="right"
//     renderSearchInputRightIcon={yes}
// />
//       </View>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({});

// export default Select;
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {label: 'Language', value: '1'},
  {label: 'Chemistry', value: '2'},
  {label: 'Physics', value: '3'},
];
const data1 = [
  {label: 'Conventions of Standards', value: '1'},
  {label: 'Organic Chemistry', value: '2'},
  {label: 'Quantumn Physics', value: '3'},
];
const data2 = [
  {label: 'K.L.1', value: '1'},
  {label: 'K.L.2', value: '2'},
  {label: 'K.L.3', value: '3'},
];
const Select = () => {
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Unit</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select a Unit' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Subunit</Text>
        <Dropdown
          style={[styles.dropdown, isFocus1 && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data1}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus1 ? 'Select a SubUnit' : '...'}
          searchPlaceholder="Search..."
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setValue1(item.value);
            setIsFocus1(false);
          }}
        />
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Standard</Text>
        <Dropdown
          style={[styles.dropdown, isFocus2 && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data2}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? 'Select a Standard' : '...'}
          searchPlaceholder="Search..."
          value={value2}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setValue2(item.value);
            setIsFocus2(false);
          }}
        />
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignContent: 'space-between',
    // justifyContent:"space-between",
    flexDirection: 'row',
    flex: 1,
  },
  dropdown: {
    height: 50,
    // width:280,

    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 23,
    // margin:15,
    marginRight: 10,
    marginTop: 10,
    // backgroundColor:'grey',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 3,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 20,
  },
  placeholderStyle: {
    fontSize: 24,
  },
  selectedTextStyle: {
    fontSize: 24,
  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 24,
  },
});

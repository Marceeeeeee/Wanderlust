import React, { useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { style } from './style';

const datas = [
  { label: 'Sunset Villa', value: '1' },
  { label: 'Blue Sky Bungalow', value: '2' },
  { label: 'Cherry Blossom Cottage', value: '3' },
  { label: 'Enchanted Echoes Home', value: '4' },
  { label: 'Hearthstone Have', value: '5' },
  { label: 'Orchid Oasis', value: '6' },
  { label: 'Seaside Serenity Cottage', value: '7' },
];

var data = [
  { label: 'VelvetValleyVilla', value: '1' },
  { label: 'Secret Garden ', value: '2' },
  { label: 'Whispering Willow House', value: '3' },
];

export function RentedProperties() {

  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [exampleState, setExampleState] = useState(data);

  async function API(houseName) {
    (await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: houseName,
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
        setLoading(false);
      }));
  }

  function AddElement(name) {
    API(name.label);
    console.log(name);
    console.log(data.toString());
    data.push(name);
    console.log(data.toString());
    setExampleState(data);
    console.log(exampleState);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 30 }}></View>
      <Dropdown
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        iconStyle={style.iconStyle}
        data={datas}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setLoading(true);
          setValue(item.label);
          console.log(item.label);
          AddElement({ label: item.label, value: '3' });
        }}
        renderLeftIcon={() => (
          <AntDesign style={style.icon} color="black" name="Safety" size={20} />
        )} />
      {isLoading ? (<ActivityIndicator />) :
        <FlatList
          data={exampleState}
          renderItem={({ item }) => <Text style={style.cardText}>{item.label}</Text>} />}
    </View>
  );
}

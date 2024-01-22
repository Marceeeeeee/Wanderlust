import React, { useState } from 'react';
import { Text, View, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { style, styleRented } from './style';

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
    <ImageBackground source={require('./img/artwork-2.png')} style={{ flex: 1 }}>
      <View style={{ height: 38 }}></View>
      <View style={styleRented.rentproperty}>
        <Text style={styleRented.title}>Rent a property:</Text>
        <Dropdown
        style={styleRented.dropdown}
        placeholderStyle={styleRented.placeholderStyle}
        selectedTextStyle={styleRented.selectedTextStyle}
        inputSearchStyle={styleRented.inputSearchStyle}
        iconStyle={styleRented.iconStyle}
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
          <AntDesign style={style.icon} color="black" name="carryout" size={20} />
        )} />
      </View>
      <View style= {styleRented.listView}>
      {isLoading ? (<ActivityIndicator />) :
      <FlatList
        style={{marginTop: 12}}
        data={exampleState}
        renderItem={({ item }) => 
        <View style= {styleRented.card}>
          <Text style= {styleRented.houseName}>{item.label}</Text>
          <View style={styleRented.description}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                rented
              </Text>
            </View>
        </View>
        } />}
      </View>
    </ImageBackground>
  );
}

import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { styleDetailScreen } from './style';

export function PropertyDetail({ route, navigation }) {
  const { houseImage, houseName } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image source={JSON.stringify(houseImage)} style={styleDetailScreen.image} />
      <View style={styleDetailScreen.view}>
        <Text style={styleDetailScreen.text}>{JSON.parse(JSON.stringify(houseName))}</Text>
        <Text style={styleDetailScreen.description}>A quaint suburban abode, this two-story house exudes charm with its white picket fence and well-kept lawn. Inside, the bright living room and modern kitchen offer comfort, while cozy bedrooms provide a retreat. A perfect blend of classic aesthetics and modern living.</Text>
        <Pressable style={styleDetailScreen.rent} onPress={() => {}}>
          <Text style={styleDetailScreen.price}>2000/day</Text>
        </Pressable>
        <Pressable style={styleDetailScreen.back} onPress={() => navigation.goBack()}>
          <Text style={styleDetailScreen.price}>back</Text>
        </Pressable>
      </View>
    </View>
  );
}

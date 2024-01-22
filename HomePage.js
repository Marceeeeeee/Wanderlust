import React from 'react';
import { Image, ImageBackground, Text, View, FlatList, Pressable } from 'react-native';
import { style, styleHome, styleRented } from './style';

const homecards = [
  {
    title: "We are wanderlust",
    description: "We want to bring dreams on earth by letting you rent ours property",
    import: "",
  },
  {
    title: "Balance",
    description: "Your curret balance is:",
    import: "34.567,76$",
  },
  {
    title: "Expences",
    description: "Your currets outgoings are:",
    import: "2.763,12$",
  }
]

export function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <ImageBackground source={require('./img/BackgroungLogo.jpg')} style={{ flex: 1 }}>
          <View style={{
            flex: 1, opacity: 0.95, borderRadius: 20, margin: 55, marginBottom: 70, marginTop: 90, justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={require('./img/WanderlustLogo.png')} style={{ height: 220, width: 220, borderRadius: 110, resizeMode: 'contain' }} />
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 3 }}>
        <ImageBackground source={require('./img/artwork-2.png')} style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 12 }}
            data={homecards}
            renderItem={({ item }) =>
              <Pressable style={styleHome.homecard} onPress={() => navigation.navigate('Homecard Detail', { title: item.title, description: item.description, value: item.import }) }>
                <Text style={styleHome.title}>
                  {item.title}
                </Text>
                <Text style={styleHome.description}>
                  {item.description}
                </Text>
                <Text style={styleHome.value}>
                  {item.import}
                </Text>
              </Pressable>
            } />
          <View style={{ height: 24 }}></View>
        </ImageBackground>
      </View>
    </View>
  );
}



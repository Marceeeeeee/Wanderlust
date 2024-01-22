import React from 'react';
import { Image, ImageBackground, Text, View, FlatList } from 'react-native';
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

export function HomePage() {
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
              <View style={styleHome.homecard}>
              <Text style={{ flex: 1, fontSize: 26, marginStart: 24, marginEnd: 10, marginTop: 5 }}>
                {item.title}
              </Text>
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10 }}>
                {item.description}
              </Text>
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10, color: 'green', fontWeight: 'bold' }}>
                {item.import}
              </Text>
            </View>
              } />
          <View style={{ height: 24 }}></View>
        </ImageBackground>
      </View>
    </View>
  );
}

import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { style } from './style';


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
          <View style={style.homecard}>
            <Text style={{ flex: 1, textAlign: 'center', fontSize: 30, marginStart: 10, marginEnd: 10, marginTop: 10 }}>
              We are Wanderlust
            </Text>
            <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10, marginTop: -20 }}>
              We want to bring dreams on earth by letting you rent ours property
            </Text>
          </View>
          <View style={style.homecard}>
            <Text style={{ flex: 1, fontSize: 26, marginStart: 24, marginEnd: 10, marginTop: 5 }}>
              Balance
            </Text>
            <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10 }}>
              Your curret balance is:
            </Text>
            <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10, marginTop: -20 }}>
              34.567,97$
            </Text>
          </View>
          <View style={style.homecard}>
            <Text style={{ flex: 1, fontSize: 26, marginStart: 24, marginEnd: 10, marginTop: 5 }}>
              Expences
            </Text>
            <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10 }}>
              Your curret outgoings are:
            </Text>
            <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, marginStart: 10, marginEnd: 10, marginTop: -20 }}>
              3.072,23$
            </Text>
          </View>
          <View style={{ height: 24 }}></View>
        </ImageBackground>
      </View>
    </View>
  );
}

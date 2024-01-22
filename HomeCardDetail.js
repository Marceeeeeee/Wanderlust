import React from 'react';
import { View, Text } from 'react-native';
import { styleHome, styleHomeCardDetail } from './style';


export function HomeCardDetail({ route, navigation }) {
  const { title, description, value } = route.params;
  if (title == "We are wanderlust") {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styleHomeCardDetail.title}>About us</Text>
        <Text style={styleHomeCardDetail.description}>
          Welcome to Wanderlust Real Estate, your portal to extraordinary living in the metaverse. Discover a curated collection of virtual homes tailored to your wildest dreams. Our seasoned agents guide you through futuristic penthouses, serene retreats, and cyberpunk cityscapes. Immerse yourself in detailed, immersive previews, ensuring the perfect digital domicile. Wanderlust isn't just a real estate agency; it's a key to a new era of homeownership. Step into a world where reality meets imagination, and let Wanderlust be your guide to the limitless possibilities of metaverse living. Welcome home to Wanderlust where dreams become virtual reality.
        </Text>
      </View>
    );
  }
  else {
    return (
      <View style={{ flex: 1, alignContent: 'center' }}>
        <Text style={styleHomeCardDetail.currency}>Your curret {title}</Text>
        <Text style={styleHomeCardDetail.number}>
          {value}
        </Text>
      </View>
    );
  }
}

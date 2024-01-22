import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View, Pressable } from 'react-native';
import { style, styleFull, styleRight } from './style';


export function PropertyListHome({ navigation }) {
  return (
    <ScrollView style={style.scrollview}>
      <ImageBackground source={require('./img/artwork.png')}>
        <View style={{ height: 32 }}></View>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Sunset Villa', houseImage: require('./img/SunsetVilla.jpg') })} style={styleFull.card}>
          <Image source={require('./img/SunsetVilla.jpg')} style={styleFull.cardImage} />
          <View>
            <Text style={styleFull.cardText}>{"Sunset Villa"}</Text>
          </View>
          <View style={styleFull.cardButton}>
            <Text style={{ margin: 5, marginStart: 28 }}>
              explore
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Serenity Cottage', houseImage: require('./img/SerenityCottage.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Serenity Cottage"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/SerenityCottage.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Velvet Valley Villa', houseImage: require('./img/VelvetValleyVilla.jpg') })} style={style.card}>
          <Image source={require('./img/VelvetValleyVilla.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Velvet Valley Villa"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Blue Sky Bungalow', houseImage: require('./img/BlueSkyBungalow.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Blue Sky Bungalow"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/BlueSkyBungalow.jpg')} style={styleRight.cardImage} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Maple Grove \nCottage House', houseImage: require('./img/MapleGroveCottageHouse.jpg') })} style={style.card}>
          <Image source={require('./img/MapleGroveCottageHouse.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Maple Grove \nCottage House"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Whispering Willow House', houseImage: require('./img/WhisperingWillowHouse.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Whispering Willow House"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/WhisperingWillowHouse.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Enchanted Echoes Home', houseImage: require('./img/EnchantedEchoesHome.jpg') })} style={style.card}>
          <Image source={require('./img/EnchantedEchoesHome.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Enchanted Echoes Home"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'secret Garden', houseImage: require('./img/SecretGarden.jpg') })} style={styleFull.card}>
          <Image source={require('./img/SecretGarden.jpg')} style={styleFull.cardImage} />
          <View>
            <Text style={styleFull.cardText}>{"secret Garden"}</Text>
          </View>
          <View style={styleFull.cardButton}>
            <Text style={{ margin: 5, marginStart: 28 }}>
              explore
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Mountain Majesty Manor', houseImage: require('./img/MountainMajestyManor.jpg') })} style={style.card}>
          <Image source={require('./img/MountainMajestyManor.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Mountain Majesty Manor"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Starlight Villa', houseImage: require('./img/StarlightVilla.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Starlight Villa\n"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/StarlightVilla.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Cherry Blossom Cottage', houseImage: require('./img/CherryBlossomCottage.jpg') })} style={style.card}>
          <Image source={require('./img/CherryBlossomCottage.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Cherry Blossom \nCottage"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Orchid Oasis', houseImage: require('./img/OrchidOasis.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Orchid Oasis\n"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/OrchidOasis.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Riverview Retreat', houseImage: require('./img/RiverviewRetreat.jpg') })} style={style.card}>
          <Image source={require('./img/RiverviewRetreat.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Riverview Retreat"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Evergreen Escape', houseImage: require('./img/EvergreenEscape.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Evergreen Escape"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/EvergreenEscape.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Crimson Crest Chalet', houseImage: require('./img/CrimsonCrestChalet.jpg') })} style={style.card}>
          <Image source={require('./img/CrimsonCrestChalet.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Crimson Crest \nChalet"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Seaside Serenity House', houseImage: require('./img/SeasideSerenityHouse.jpg') })} style={styleFull.card}>
          <Image source={require('./img/SeasideSerenityHouse.jpg')} style={styleFull.cardImage} />
          <View>
            <Text style={styleFull.cardText}>{"Seaside Serenity House"}</Text>
          </View>
          <View style={styleFull.cardButton}>
            <Text style={{ margin: 5, marginStart: 28 }}>
              explore
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Hearthstone Haven', houseImage: require('./img/HearthstoneHaven.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Hearthstone Haven"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/HearthstoneHaven.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Breezy Bluff Bungalow', houseImage: require('./img/BreezyBluffBungalow.jpg') })} style={style.card}>
          <Image source={require('./img/BreezyBluffBungalow.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Breezy Bluff \nBungalow"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Golden Gate Home', houseImage: require('./img/GoldenGateHome.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Golden Gate Home"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/GoldenGateHome.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Crystal Cove Cottage', houseImage: require('./img/CrystalCoveCottage.jpg') })} style={style.card}>
          <Image source={require('./img/CrystalCoveCottage.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Crystal Cove \nCottage"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Rosewood Residence', houseImage: require('./img/RosewoodResidenc.jpg') })} style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Rosewood Residence"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/RosewoodResidenc.jpg')} style={styleRight.cardImage} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Property detail', { houseName: 'Sunflower Sanctuary', houseImage: require('./img/SunflowerSanctuary.jpg') })} style={style.card}>
          <Image source={require('./img/SunflowerSanctuary.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Sunflower \nSanctuary"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </Pressable>
      </ImageBackground>

    </ScrollView>
  );
}

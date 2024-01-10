import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Button, Pressable, FlatList } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Property List Home" component={PropertyListHome} options={{ headerShown: false }} />
        <Stack.Screen name="Property detail" component={PropertyDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }
      } />
      <Tab.Screen name="Houses" component={PropertyListHome} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map-marker-multiple" color={color} size={26} />
        ),
      }
      } />
      <Tab.Screen name="Rented" component={RentedProperties} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map-marker-multiple" color={color} size={26} />
        ),
      }
      }/>
    </Tab.Navigator>
  )
}

function HomePage() {
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
  )
}

function PropertyListHome({ navigation }) {
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
  )
}

function PropertyDetail({ route, navigation }) {
  const { houseImage, houseName } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image source={JSON.stringify(houseImage)} style={styleDetailScreen.image} />
      <View style={styleDetailScreen.view}>
        <Text style={styleDetailScreen.text}>{JSON.parse(JSON.stringify(houseName))}</Text>
        <Text style={styleDetailScreen.description}>A quaint suburban abode, this two-story house exudes charm with its white picket fence and well-kept lawn. Inside, the bright living room and modern kitchen offer comfort, while cozy bedrooms provide a retreat. A perfect blend of classic aesthetics and modern living.</Text>
        <Pressable style={styleDetailScreen.rent}>
          <Text style={styleDetailScreen.price}>2000/day</Text>
        </Pressable>
      </View>
    </View>

  )
}

function RentedProperties(){
  return(
    <View style={{flex: 1}}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={style.cardText}>{item.key}</Text>}
      />
    </View>
  )
}

const style = StyleSheet.create({
  homecard: {
    flex: 1,
    marginTop: 24,
    marginStart: 24,
    marginEnd: 24,
    backgroundColor: 'white',
    borderRadius: 24
  },
  scrollview: {
    flex: 1,
    background: './img/artwork-2.png',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 24
  },
  cardImage: {
    width: '45%',
    height: 220,
    margin: 20,
    borderRadius: 16,
  },
  cardColumn: {
    width: 155,
    flexDirection: 'column'
  },
  cardText: {
    marginTop: 40,
    marginStart: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardButton: {
    width: 100,
    height: 30,
    marginTop: 90,
    marginStart: 10,
    borderRadius: 16,
    backgroundColor: 'orange',
    alignContent: 'center'
  },
})

const styleRight = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 24
  },
  cardImage: {
    width: '45%',
    height: 220,
    margin: 20,
    borderRadius: 16
  },
  cardColumn: {
    width: 155,
    flexDirection: 'column'
  },
  cardText: {
    marginTop: 40,
    marginStart: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardButton: {
    width: 100,
    height: 30,
    marginTop: 90,
    marginStart: 50,
    borderRadius: 16,
    backgroundColor: 'orange',
    alignContent: 'center'
  },
})

const styleFull = StyleSheet.create({
  card: {
    height: 360,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 24
  },
  cardImage: {
    height: 220,
    width: '88%',
    margin: 20,
    marginStart: 25,
    borderRadius: 16
  },
  cardColumn: {
    width: 190,
    flexDirection: 'column'
  },
  cardText: {
    marginStart: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardButton: {
    marginStart: '65%',
    backgroundColor: 'orange',
    width: 100,
    borderRadius: 16
  },
})

const styleDetailScreen = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  view: {
    marginTop: -20,
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 26,
    marginStart: 24,
    marginEnd: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    margin: 16,
  },
  rent: {
    height: 50,
    width: 160,
    backgroundColor: 'cyan',
    marginStart: '50%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '600'
  }
})
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={{flex:1}}> 
      <View style={{flex:1.5}}>
        <ImageBackground source={require('./img/BackgroungLogo.jpg')} style={{flex:1}}>
          <View style={{flex:1, backgroundColor: '#f2fdfd',opacity: 0.85,borderRadius: 20,margin:45, marginBottom:60,marginTop:80}}>
            <Text style={{flex:1,height: 'auto',textAlign: 'center',fontSize:32, fontWeight: 'bold',margin:20}}>
              {"We are \nWanderlust"}
            </Text>
            <Text style={{flex:1,textAlign: 'center',fontSize:16, marginStart:10, marginEnd:10}}>
              we want to bring dreams on earth by letting you rent ours property
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex:2}}>
        <View style={{height:2,backgroundColor: 'black'}}></View>
        <ImageBackground source={require('./img/artwork.png')} style={{flex:1}}>
        <ScrollView style={style.scrollview}>
        <View style={styleFull.card}>
          <Image source={require('./img/SunsetVilla.jpg')} style={styleFull.cardImage} />
          <View>
            <Text style={styleFull.cardText}>{"Sunset Villa"}</Text>
          </View>
          <View style={styleFull.cardButton}>
            <Text style={{ margin: 5, marginStart: 28 }}>
              explore
            </Text>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Serenity Cottage"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/SerenityCottage.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/VelvetValleyVilla.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Velvet Valley Villa"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Blue Sky Bungalow"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/BlueSkyBungalow.jpg')} style={styleRight.cardImage} />
        </View>

        <View style={style.card}>
          <Image source={require('./img/MapleGroveCottageHouse.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Maple Grove \nCottage House"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Whispering Willow House"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/WhisperingWillowHouse.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/EnchantedEchoesHome.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Enchanted Echoes Home"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleFull.card}>
          <Image source={require('./img/SecretGarden.jpg')} style={styleFull.cardImage} />
          <View>
            <Text style={styleFull.cardText}>{"secret Garden"}</Text>
          </View>
          <View style={styleFull.cardButton}>
            <Text style={{ margin: 5, marginStart: 28 }}>
              explore
            </Text>
          </View>
        </View>
        <View style={style.card}>
          <Image source={require('./img/MountainMajestyManor.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Mountain Majesty Manor"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Starlight Villa\n"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/StarlightVilla.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/CherryBlossomCottage.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Cherry Blossom \nCottage"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Orchid Oasis\n"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/OrchidOasis.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/RiverviewRetreat.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Riverview Retreat"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Evergreen Escape"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/EvergreenEscape.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/CrimsonCrestChalet.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Crimson Crest \nChalet"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleFull.card}>
          <Image source={require('./img/SeasideSerenityHouse.jpg')} style={styleFull.cardImage} />
          <View>
            <Text style={styleFull.cardText}>{"Seaside Serenity House"}</Text>
          </View>
          <View style={styleFull.cardButton}>
            <Text style={{ margin: 5, marginStart: 28 }}>
              explore
            </Text>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Hearthstone Haven"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/HearthstoneHaven.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/BreezyBluffBungalow.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Breezy Bluff \nBungalow"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Golden Gate Home"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/GoldenGateHome.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/CrystalCoveCottage.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Crystal Cove \nCottage"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
        <View style={styleRight.card}>
          <View style={styleRight.cardColumn}>
            <Text style={styleRight.cardText}>{"Rosewood Residence"}</Text>
            <View style={styleRight.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
          <Image source={require('./img/RosewoodResidenc.jpg')} style={styleRight.cardImage} />
        </View>
        <View style={style.card}>
          <Image source={require('./img/SunflowerSanctuary.jpg')} style={style.cardImage} />
          <View style={style.cardColumn}>
            <Text style={style.cardText}>{"Sunflower \nSanctuary"}</Text>
            <View style={style.cardButton}>
              <Text style={{ margin: 5, marginStart: 28 }}>
                explore
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
        </ImageBackground>
      </View>
      </View>
  );
}

const style = StyleSheet.create({
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
    width: 180,
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
    width: 180,
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
    width: 335, 
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
    marginStart: 260, 
    backgroundColor: 'orange', 
    width: 100, 
    borderRadius: 16 
  },
})
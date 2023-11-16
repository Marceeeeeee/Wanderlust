import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class House {
  constructor(name, image) {
      this.name = name;
      this.image = image;
  }
}

var house1 = new House("Sunset Villa"  )
var house2 = new House("Serenity Cottage"  )
var house3 = new House( "Velvet Valley Villa" )
var house4 = new House( "Blue Sky Bungalow" )
var house5 = new House( "Maple Grove Cottage House" )
var house6 = new House( "Enchanted Echoes Home" )
var house7 = new House( "Mountain Majesty Manor" )
var house8 = new House( "Secret Garden" )
var house9 = new House( "Starlight Villa" )
var house10 = new House("Whispering Willow House"  )
var house11 = new House("Cherry Blossom Cottage"  )
var house12 = new House("Orchid Oasis"  )
var house13 = new House("Riverview Retreat"  )
var house14 = new House("Evergreen Escape"  )
var house15 = new House("Crimson Crest Chalet"  )
var house16 = new House("Hearthstone Haven"  )
var house17 = new House("Breezy Bluff Bungalow"  )
var house18 = new House("Golden Gate Home"  )
var house19 = new House("Crystal Cove Cottage"  )
var house20 = new House("Rosewood Residence"  )
var house21 = new House("Sunflower Sanctuary"  )

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        
          <Image source={require('./img/check.png')} />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

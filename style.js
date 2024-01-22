import { StyleSheet } from 'react-native';


export const style = StyleSheet.create({
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
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export const styleRight = StyleSheet.create({
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
});

export const styleFull = StyleSheet.create({
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
});

export const styleDetailScreen = StyleSheet.create({
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
});

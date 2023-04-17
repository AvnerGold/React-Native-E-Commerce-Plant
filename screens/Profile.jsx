import { View, Text,StyleSheet,Image,FlatList } from 'react-native'
import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ItemsContext';
import BoughtItems from '../components/BoughtItems';

export default function Profile() {
  const {bought} = useContext(ProductsContext);
  return (
    <View>
      <View style={styles.card}>
      <Image source={{ uri: "https://wow.zamimg.com/uploads/screenshots/small/661494.jpg" }} style={styles.image} />
      <Text style={styles.name}>user</Text>
      
    </View>
      {bought? (
         <FlatList
         data={bought}
         renderItem={({item}) => <BoughtItems {...item} />}
         keyExtractor={item => item.id}
       /> ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  occupation: {
    fontSize: 16,
    color: '#888',
  },
});

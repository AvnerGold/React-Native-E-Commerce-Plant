import { View, Text, StyleSheet, ImageBackground,Image, TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ItemsContext'


export default function CartCard({id,name,image,price,quantity}) {

    const {bought,SetBought,addToBought} = useContext(ProductsContext);
    const now = new Date();
    const formattedDate = now.toLocaleString();

    
  return (
    <View style={styles.card}>
    <ImageBackground
      source={{ uri: image }}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
      <Text style={[styles.title,styles.pad]}>id:{id}</Text>
        <Text style={[styles.price,styles.pad]}>{name}</Text>
        <Text style={[styles.price,styles.pad]}>${price * quantity}</Text>
        <Text style={[styles.price,styles.pad]}>Quantity:{quantity}</Text>
      </View> 
      <TouchableOpacity  onPress={()=> {addToBought(id,image,quantity,formattedDate)}} style={styles.button}>
      <Text>buy</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  )
}


const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 5,
      marginBottom: 10,
    },
    imageBackground: {
      height: 200,
      justifyContent: 'flex-end',
    },
    overlay: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: 20,
      margin: 'auto',
    },
    pad: {},
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    price: {
      fontSize: 18,
      color: '#fff',
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 5,
        borderRadius: 5,
        width:70
      },
  });

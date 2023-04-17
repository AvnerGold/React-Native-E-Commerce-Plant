import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ItemsContext'

export default function AdminItemFilter({ image,quantity,formattedDate,info,id}) {
    const {AdminChangeOrder,} = useContext(ProductsContext);
    let changeInfo;
    if (info == "in order") {
        changeInfo = "in package";
    }
    else if (info == "in package") {
        changeInfo = "client received"
    }
  return (
    <View>
       <View style={styles.cardContainer}>
      <Image source={{ uri: image}} style={styles.cardImage} resizeMode="cover" />
      <Text style={styles.cardTitle}>info:{info}    id:{id}</Text>
      <Text style={styles.cardDescription}>{formattedDate}</Text>
      <Text style={styles.cardDescription}>Quantity: {quantity}</Text>
      <TouchableOpacity  onPress={()=> {AdminChangeOrder(id,changeInfo)}} style={styles.button}>
      {info == "in order" ? <Text>change to in package</Text>: null}
      {info == "in package" ? <Text>change to client recieve</Text>: null}
      {info == "client received" ?  null: null}
      </TouchableOpacity> 
     
     
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
         flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    cardDescription: {
        fontSize: 16,
        marginTop: 5,
    },
});

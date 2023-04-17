import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function BoughtItems({image,quantity,formattedDate,info,id}) {
    console.log(image,"damn");
  return (
    <View>
       <View style={styles.cardContainer}>
      <Image source={{ uri: image}} style={styles.cardImage} resizeMode="cover" />
      <Text style={styles.cardTitle}>info:{info}    id:{id}</Text>
      <Text style={styles.cardDescription}>{formattedDate}</Text>
      <Text style={styles.cardDescription}>Quantity: {quantity}</Text>
     
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex:1,
        //width:"150%",
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

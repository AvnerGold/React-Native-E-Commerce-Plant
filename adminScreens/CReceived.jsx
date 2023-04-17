import { View, Text ,StyleSheet,FlatList} from 'react-native';
import React, { useContext } from 'react';
import AdminItemFilter from '../components/AdminItemFilter';
import { ProductsContext } from '../Context/ItemsContext';

export default function CReceived() {
    const {bought} = useContext(ProductsContext);
    let inOrder;
    if (bought) {
        
         inOrder = bought.filter((item) => item.info === "client received")
        console.log(inOrder, " bpb");
    }
    return (
    <View>
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}> name: user 1</Text>
            <Text style={styles.cardTitle}> Number: 123456789 </Text>
            <Text style={styles.cardDescription}>in order</Text>
    
            <FlatList 
             data={inOrder}
             renderItem={({item})=><AdminItemFilter {...item}/>}  
             keyExtractor={(item)=> item.id}  
            />
        </View>
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
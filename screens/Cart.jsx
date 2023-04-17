import { View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { ProductsContext } from '../Context/ItemsContext'
import CartCard from '../components/CartCard'

export default function Cart() {

  const {cart} = useContext(ProductsContext)
  return (
    
    <View>
       <FlatList 
         data={cart}
         renderItem={({item})=><CartCard {...item}/>}  
         keyExtractor={(item)=> item.id}  
        />
    </View>
  )
}
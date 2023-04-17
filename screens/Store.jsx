import { View, Text,FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../Context/ItemsContext'
import ProductCard from '../components/ProductCard'

export default function Store() {
    const {products} = useContext(ProductsContext);
    
  return (
    
        <FlatList 
         data={products}
         renderItem={({item})=><ProductCard {...item}/>}  
         keyExtractor={(item)=> item.id}  
        />
  
  )
}
import { createContext,useState,useEffect } from "react";
import items from '../Data/products.json'

export const ProductsContext = createContext();

export default function ProductsContextProvider({children}){
    const [products,SetProducts] = useState([]);
    const [cart,SetCart] = useState([]);
    const [bought,SetBought] = useState([]);
    const [randomNumbers, setRandomNumbers] = useState([]);

    const LoadProducts = async () => {
        try {
        SetProducts(items);
        } catch (error){
            console.error("errorrrrrr" ,error);
        } 
    }
    

    const addToCart = async (id) => { 
    const item = products.find((item) => item.id === id);
    
    if (!item) {
      console.log(`Item with ID ${id} not found in products list.`);
      return;
    }
    
    const existingItem = cart.find((u) => u.id === item.id);
  
    if (existingItem) {
      // If the item already exists in the cart, update the quantity
      const updatedCart = cart.map((u) => {
        if (u.id === item.id) {
          return { ...u, quantity: u.quantity + 1 };
        }
        return u;
      });
      SetCart(updatedCart);
    } else {
      // If the item does not exist in the cart, add it with quantity 1
      SetCart([...cart, { ...item, quantity: 1 }]);
    }
  };

 

   const addToBought = async (id,image,quantity,formattedDate) =>
   {  
    const generateRandomNumber = () =>
    {
        let newRandomNumber = Math.floor(Math.random() * 10000) + 1;
    
        if (randomNumbers.includes(newRandomNumber)) {
            // If the new random number is already in the array, generate a new one
            generateRandomNumber();
        } else {
            // Otherwise, add the new random number to the array
            setRandomNumbers([...randomNumbers, newRandomNumber]);
            let item = 
            {
            image,
            quantity,
            formattedDate,
            info:"in order",
            id:newRandomNumber
            }
          
            SetBought([...bought,item]);
            const updatedCart = cart.filter((u) => u.id !== id);
            SetCart(updatedCart);
        }

    }
     generateRandomNumber();
   } 


   const AdminChangeOrder = async (id, inprocces) => 
   {
        const updateBought = bought.map((item) => {
        if (item.id === id) 
        {
            item.info = inprocces;
        }
        return item;
    });
    SetBought(updateBought);
   }
  
   
    useEffect(() => {     
        LoadProducts();       
    },[])

    useEffect(() => {
    },[cart,bought])

    const value = {    
        cart,
        products,
        bought,
        SetProducts,
        SetCart,
        addToCart,
        addToBought,
        SetBought,
        AdminChangeOrder
    }
    return (
        <ProductsContext.Provider value={value}>
        {children}
        </ProductsContext.Provider>
    ) 
}
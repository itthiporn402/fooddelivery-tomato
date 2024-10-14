import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) { 
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
            
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); 
        }
    }

    const removeFromCart = (itemId, count = 1) => {
        setCartItem((prevCart) => {
          const updatedCart = { ...prevCart };
      
          if (count >= updatedCart[itemId]) {
            delete updatedCart[itemId];
          } else {
            updatedCart[itemId] -= count;
          }
      
          return updatedCart;
        });
      };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItem) {
            const itemInfo = food_list.find(
                (product) => String(product._id) === String(itemId)
            );
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItem[itemId];
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItem, // Use cartItem to match the state
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

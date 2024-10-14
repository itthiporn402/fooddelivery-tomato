import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({}); // Correctly named state

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) { // Use cartItem instead of cartItems
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
            
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // Correct function name
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId]; // Remove the item if its quantity reaches 0
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

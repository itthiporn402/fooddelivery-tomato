import React, { useContext } from 'react';
import './FoodItem.css'
import { StoreContext } from "../../context/StoreContext";
import { assets } from '../../assets/assets';

const FoodItem = ({id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
   
    // Safely access cartItems
    const itemCount = cartItems && cartItems[id] ? cartItems[id] : 0;

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {itemCount === 0 
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add item" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove item" />
                        <p>{itemCount}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add item" />
                    </div>
                }
            </div>
            
            <div className="food-item-info">
                <div className="food-item-name-rating"> 
                    <p>{name}</p> 
                    <img src={assets.rating_starts} alt="Rating"/>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem

// import React, { useContext, useState, useEffect } from 'react';
// import './FoodItem.css';
// import { StoreContext } from "../../context/StoreContext";
// import { assets } from '../../assets/assets';
// import PropTypes from 'prop-types';

// const FoodItem = ({ id, name, price, description, image }) => {
//     const [itemCount, setItemCount] = useState(0);
//     const { cartItems = {}, addToCart, removeFromCart } = useContext(StoreContext);

//     // Sync itemCount with cartItems if it exists
//     useEffect(() => {
//         if (cartItems[id]) {
//             setItemCount(cartItems[id].quantity || 0); // Set item count based on cartItems[id]
//         }
//     }, [cartItems, id]);

//     const handleAddItem = () => {
//         const newCount = itemCount + 1;
//         setItemCount(newCount);
//         addToCart(id, newCount); // Update cart with new item count
//     };

//     const handleRemoveItem = () => {
//         if (itemCount > 1) {
//             const newCount = itemCount - 1;
//             setItemCount(newCount);
//             addToCart(id, newCount); // Update cart with decreased count
//         } else {
//             setItemCount(0);
//             removeFromCart(id); // Remove item from cart when count reaches 0
//         }

        
//     };

//     FoodItem.propTypes = {
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         description: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//       };

//     return (
        // <div className='food-item'>
        //     <div className="food-item-img-container">
        //         <img className='food-item-image' src={image} alt={name} />
        //         {!cartItems[id] || cartItems[id].quantity === 0 ? (
        //             <img className='add' onClick={handleAddItem} src={assets.add_icon_white} alt="Add item" />
        //         ) : (
        //             <div className='food-item-counter'>
        //                 <img onClick={handleRemoveItem} src={assets.remove_icon_red} alt="Remove item" />
        //                 <p>{itemCount}</p>
        //                 <img onClick={handleAddItem} src={assets.add_icon_green} alt="Add item" />
        //             </div>
        //         )}
        //     </div>

//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="Rating" />
//                 </div>
//                 <p className="food-item-desc">{description}</p>
//                 <p className="food-item-price">${price}</p>
//             </div>
//         </div>
//     );
// };

// export default FoodItem;

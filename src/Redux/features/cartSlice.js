import { createSlice } from "@reduxjs/toolkit";



/**usage of local storage is done to prevent data lost on page reloading */
// Load cart data from localStorage if available

const loadCartDataFromLocalStorage = () => {
    

    /**parsing  cartData object on retreiving data */
    /**it is also called rehudrating of persisted data in local storage */
    const storedData = JSON.parse(localStorage.getItem("cartData")) || {};
    /**destructuring the properties */
    const { cart = [], totalQuantity = 0, totalPrice = 0 } = storedData;

    return { cart, totalQuantity, totalPrice };//return destructured array
};



/**intial state object */
const initialState = {
    carts: loadCartDataFromLocalStorage().cart,
    totalQuantity: loadCartDataFromLocalStorage().totalQuantity,
    totalPrice: loadCartDataFromLocalStorage().totalPrice,
    Products: [],
    filteredProducts: [],
    minPrice: 25,
    maxPrice: 1600,

};

// cart slice
const cartSlice = createSlice({

    name: "cartslice",
    initialState,
    reducers: {

        // add to cart => it will handle both first time addition and subsequent increments
        /** we will update carts  state */
        /**spread operator will keep previous values of state carts if present, and action.payload 
         * will push updated value in carts array (state)
         */


        addToCart: (state, action) => {
            console.log("on dispatch ,data receiving in action's payload property is", action);

            /**we will apply check here if dispatched product already exists then quantity should increase 
             * otherwise quantity will be one
            */

            /**when first attempt will be made to add product in cart
             * -1 index is obtained will depict that product already is not existing
             * otherwise 0 index is obtained will depict that product already is  existing
             */
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            console.log("Item index  ", ItemIndex);
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1 // if product already is  existing ,then quantity will increment
            }
            else {
                const firstadd = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, firstadd] // if product already is not  existing ,then quantity will become 1

            }


            // Update totalQuantity(total number of Items in Cart)  and totalPrice(total price of all items in carts)
            state.totalQuantity += 1;
            console.log("totalQuantity inside addtocart", state.totalQuantity)

            state.totalPrice += action.payload.price;

            /**creating single object and saving into localStorage */
            const cartData = {
                cart: state.carts,

                totalQuantity: state.totalQuantity,
                totalPrice: state.totalPrice
            };

            localStorage.setItem("cartData", JSON.stringify(cartData));


        },

        /**minimum price change reducer */
        minPriceChange: (state, action) => {
            state.minPrice = action.payload;

        },

        /**maximum price change reducer */
        maxPriceChange: (state, action) => {
            state.maxPrice = action.payload;

        },
        
        /**Products data reducer */
        setProducts: (state, action) => {
            state.Products = action.payload;
        },

        /**Filter Particular Products on the basis of Price range */
        filterProductsByPrice: (state, action) => {
            const { minPrice, maxPrice } = action.payload;

            // Filter products based on the price range
            state.filteredProducts = state.Products.filter(
                (product) => product.price >= minPrice && product.price <= maxPrice
            );
        },


        /*delete perticular item*/
        removeFromCart: (state, action) => {
            const data = state.carts.filter((item) => item.id !== action.payload);
            state.carts = data;

            // Recalculate totalQuantity and totalPrice by iterating reduce method on array of objects
            //(each object is a product)
            state.totalQuantity = state.carts.reduce((accumelator, product) => accumelator + product.qnty, 0);
            state.totalPrice = state.carts.reduce((accumelator, product) => accumelator + product.qnty * product.price, 0);

            /**creating single object and saving into localStorage */
            const cartData = {
                cart: state.carts,
                totalQuantity: state.totalQuantity,
                totalPrice: state.totalPrice
            };

            localStorage.setItem("cartData", JSON.stringify(cartData));
        },

        // decrement quantity of item of particular product in cart
        decrementCart: (state, action) => {
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

            if (state.carts[ItemIndex_dec].qnty >= 1) {
                state.carts[ItemIndex_dec].qnty -= 1;

                // Update totalQuantity(total number of Items in Cart)  and totalPrice(total price of all items in carts)
                state.totalQuantity -= 1;
                state.totalPrice -= state.carts[ItemIndex_dec].price;
            }

            /**creating single object and saving into localStorage */
            const cartData = {
                cart: state.carts,
                totalQuantity: state.totalQuantity,
                totalPrice: state.totalPrice
            };

            localStorage.setItem("cartData", JSON.stringify(cartData));

        },


        // clear cart
        emptycart: (state, action) => {
            state.carts = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;



            // Clear cart's data from localStorage when cart will be cleared
            localStorage.removeItem("cartData");

        },
    }

});

export const { addToCart, removeFromCart, decrementCart, emptycart,setProducts,filterProductsByPrice,maxPriceChange } = cartSlice.actions;
export default cartSlice.reducer;

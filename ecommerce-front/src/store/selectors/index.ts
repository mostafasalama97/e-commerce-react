import { createSelector } from "@reduxjs/toolkit";

// Created an input selector selectCartItems to extract the items property from the Redux state.
const selectCartItems = (state: any) => {
    return state.cartSlice.items
};
// createSelector function to accept two arguments: 
// the first argument is the input selector
// and the second argument is the transform function.


// createSelector is used here to create a memoized selector, getCartTotalQuantity, 
// which efficiently computes the total quantity of items in the cart.
// By memoizing the selector, it ensures that the computation is only performed 
// when the input selector (selectCartItems) changes, 
// preventing unnecessary recalculations and optimizing performance.
// This helps to avoid redundant calculations, especially in complex applications 
// with large state trees, leading to better performance and improved user experience.
const getCartTotalQuantitySelector = createSelector(
    selectCartItems,
    (items) => {
        const totalQuantity = Object.values(items).reduce((total: number, item: any) => {
            return total + item;
        }, 0);
        return totalQuantity;
    }
);

export { getCartTotalQuantitySelector }
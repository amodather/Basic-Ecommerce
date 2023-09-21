import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const failure = (product) => {
    Swal.fire({
        icon: 'info',
        text: `${product} is already in Cart`,
    })
}
export const cartSlice = createSlice({
    initialState: [],
    name: "productSlice",
    reducers: {
        addtoCart: (state, action) => {
            const product = state.find((product) => product.id === action.payload.id);
            if (product)
                failure(action.payload.title)
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        deletefromCart: (state, action) => {
            const product = state.find((product) => product.id === action.payload.id)
            return state.filter((x) => x.id !== product.id)
        },
        increaseQt: (state, action) => {
            const product = state.find((product) => product.id === action.payload.id)
            product.quantity = product.quantity + 1;
        },
        decreaseQt: (state, action) => {
            const product = state.find((product) => product.id === action.payload.id)
            if (product.quantity > 1) { product.quantity = product.quantity - 1; }
        },
        clearCart: (state, action) => {
            return state = []
        }
    }
})

export const { addtoCart, deletefromCart, clearCart, increaseQt, decreaseQt } = cartSlice.actions;
export default cartSlice.reducer;
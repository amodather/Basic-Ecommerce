import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts' , async () =>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})
export const productsSlice = createSlice ({
    initialState: [],
    name: "productSlice",
    reducers:{
        addProduct : (state, action) => {
            state.push(action.payload)
        },
        getProduct: (state, action) =>{
            return state
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            return state = action.payload
        })
    }
})

export const {addProduct, getProduct} = productsSlice.actions;
export default productsSlice.reducer;
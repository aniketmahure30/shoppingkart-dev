import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../apis/Axios";

const initialState = {
  productList: [],
  currentProduct: [],
  searchedProducts: [],
  error: "",
};


//TODO BEGIN :: MERCHANT MODULE FUNCTIONS

export const fetchMerchantProducts = createAsyncThunk("products/fetchMerchantProducts", (merchId)=>{
  return fetch(
    `http://localhost:8080/shopping-kart-ty-api-0.0.1-SNAPSHOT/products/merchant/${merchId}`
  ).then(res => res.json());

})

//TODO END :: MERCHANT MODULE FUNCTIONS


//BEGIN :: USER MODULE FUNCTIONS

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return fetch(
    "http://localhost:8080/shopping-kart-ty-api-0.0.1-SNAPSHOT/products"
  ).then(res => res.json());
});
export const getCurrentProduct = createAsyncThunk(
  "product/getCurrentProduct",
  id => {
    return Axios.get(`/products/${id}`);
  }
);

//END :: USER MODULE FUNCTIONS


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },
  extraReducers: {
    // * BEGIN :: CUSTOMER MODULE REDUCERS
    [fetchProducts.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
    },
    [getCurrentProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload.data;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [getCurrentProduct.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    // * END :: CUSTOMER MODULE REDUCERS

    // * BEGIN :: MERCHANT MODULE REDUCERS
    [fetchMerchantProducts.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
    },
    [fetchMerchantProducts.rejected]: (state,action)=>{
      state.error = action.error.message;
    }

    // * END :: CUSTOMER MODULE REDUCERS
  },
});
export default productSlice.reducer;
export const {searchProducts}=productSlice.actions

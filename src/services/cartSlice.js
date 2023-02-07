import { createSlice } from "@reduxjs/toolkit";

export const nfttSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemsInfo: {
      productName: "",
      productId: "",
      noofProducts: "",
      price: "",
      totalPrice: "",
      quantity: "",
    },
  
    cartError: "",
  },
  reducers: {
    setCartInfo: (state, action) => {
      state.cartItemsInfo.productName = action.payload.productName;
      state.cartItemsInfo.productId = action.payload.productId;
      state.cartItemsInfo.noofProducts = action.payload.noofProducts;
    },
  },
});

export const { setNftInfo, setNftQuantity, setEthExchangeRate} = nfttSlice.actions;

export default nfttSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk('/cart/cartItems', async (token) => {
  try {
    const { data } = await axios.get('/api/cart', {
      headers: {
        Authorization: token,
      },
    });
    return data.order_items;
  } catch (err) {
    console.log(err);
  }
});
export const addToCart = createAsyncThunk(
  '/cart/addToCart',
  async ({quantity, productId, token}) => {
    try {
      await axios.put(
        '/api/cart/',
        { quantity, productId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { data } = await axios.get('/api/cart', {
        headers: {
          Authorization: token,
        },
      });
      return data.order_items;
  
      // return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      return payload
    });
  },
});

export const selectCartItems = (state) => state.cartItems;
export default cartSlice.reducer;

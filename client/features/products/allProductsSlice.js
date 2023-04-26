import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk(
  '/products/fetchAll',
  async () => {
    try {
      const { data } = await axios.get(
        'https://maverick-merchants.onrender.com/api/products'
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteSingleProduct = createAsyncThunk(
  '/product/deleteProduct',
  async (productId) => {
    try {
      const { data } = await axios.delete(
        `https://maverick-merchants.onrender.com/api/products/${productId}`
      );
      return { id: productId };
    } catch (err) {
      console.log(err);
    }
  }
);

export const addProduct = createAsyncThunk(
  '/product/addProduct',
  async (product) => {
    try {
      const newProduct = { ...product };
      const { data } = await axios.post(
        'https://maverick-merchants.onrender.com/api/products',
        newProduct
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchMainCategory = createAsyncThunk(
  '/products/mainCategory',
  async (main_type) => {
    try {
      const { data } = await axios.get(
        `https://maverick-merchants.onrender.com/api/product-tags/maintype/${main_type}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (student) => {
    try {
      const { data } = await axios.put(
        `https://maverick-merchants.onrender.com/api/products/${student.id}`,
        student
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchMainCategory.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteSingleProduct.fulfilled, (state, action) => {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      const newProduct = action.payload;
      return [...state, newProduct];
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state[index].name = updatedProduct.name;
        state[index].price = updatedProduct.price;
        state[index].description = updatedProduct.description;
        state[index].stock_qty = updatedProduct.stock_qty;
        state[index].per_unit = updatedProduct.per_unit;
      }
    });
  },
});

export const selectAllProducts = (state) => state.allProducts;
export default allProductsSlice.reducer;

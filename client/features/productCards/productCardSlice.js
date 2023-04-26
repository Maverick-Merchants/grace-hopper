import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductType = createAsyncThunk('/home', async () => {
  try {
    const { data } = await axios.get();
  } catch (err) {
    console.log(err);
  }
});

const productCardSlice = createSlice({
  name: 'mainTypes',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductType.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectMainTypes = (state) => state.mainTypes;
export default productCardSlice.reducer;

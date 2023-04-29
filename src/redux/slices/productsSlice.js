import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHeadphones = createAsyncThunk('products/fetchHeadphones', async () => {
  const { data } = await axios.get(`http://localhost:3002/headphones/`);

  return data;
});

export const fetchWireless = createAsyncThunk('products/fetchWireless', async () => {
  const { data } = await axios.get(`http://localhost:3002/wireless/`);

  return data;
});

const initialState = {
  headphones: {
    items: [],
    status: 'loading',
  },
  wireles: {
    items: [],
    status: 'loading',
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeadphones.pending, (state) => {
      state.headphones.status = 'loading';
    });
    builder.addCase(fetchHeadphones.fulfilled, (state, action) => {
      state.headphones.items = action.payload;
      state.headphones.status = 'success';
    });
    builder.addCase(fetchHeadphones.rejected, (state) => {
      state.headphones.status = 'error';
    });

    builder.addCase(fetchWireless.pending, (state) => {
      state.wireles.status = 'loading';
    });
    builder.addCase(fetchWireless.fulfilled, (state, action) => {
      state.wireles.items = action.payload;
      state.wireles.status = 'success';
    });
    builder.addCase(fetchWireless.rejected, (state) => {
      state.wireles.status = 'error';
    });
  },
});

export const productReducer = productSlice.reducer;

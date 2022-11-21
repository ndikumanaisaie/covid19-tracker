/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api';

export const getCovidData = createAsyncThunk('covid/getCovidData', async () => {
  try {
    const response = await api.getCovidData();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const covidDataSlice = createSlice({
  name: 'covid',
  initialState: {
    status: 'idle' || 'loading' || 'succeeded' || 'failed',
    covidData: [],
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getCovidData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCovidData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.covidData = action.payload;
      })
      .addCase(getCovidData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const { addBook, removeBook, updatedBook } = bookSlice.actions;

export default covidDataSlice.reducer;

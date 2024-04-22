import {createSlice} from "@reduxjs/toolkit";


const initialState = {

}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {

  }
});

export const {actions} = filterSlice;

export default filterSlice.reducer;
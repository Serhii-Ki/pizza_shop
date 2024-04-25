import {createSlice} from "@reduxjs/toolkit";

export type SortNameType = 'популярности' | 'цене' | 'алфавиту';

export type sortPropertyType = 'rating' | 'price' | 'title';

type SortType = {
  name: SortNameType;
  sortProperty: sortPropertyType;
}

export type FilterStateType = {
  categoryId: number;
  sort: SortType;
}


const initialState: FilterStateType = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  }
} as FilterStateType;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setCategoryId(state: FilterStateType, action) {
      state.categoryId = action.payload;
    },

    setSortProperty(state: FilterStateType, action) {
      state.sort = action.payload;
    }
  }
});

export const {setCategoryId, setSortProperty} = filterSlice.actions;

export default filterSlice.reducer;
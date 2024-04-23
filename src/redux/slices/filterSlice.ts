import {createSlice} from "@reduxjs/toolkit";

type SortNameType = 'популярности' | 'цене' | 'алфавиту';

type sortPropertyType = 'rating' | 'price' | 'title';

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
    }
  }
});

export const {setCategoryId} = filterSlice.actions;

export default filterSlice.reducer;
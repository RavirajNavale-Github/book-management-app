import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import filterSliderReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    bookFilter: filterSliderReducer,
  },
});
import { configureStore } from "@reduxjs/toolkit";

// Example of a placeholder reducer
const placeholderReducer = (state = {}, action) => state;

const store = configureStore({
  reducer: {
    placeholder: placeholderReducer, // A placeholder reducer
  }
});

export default store;

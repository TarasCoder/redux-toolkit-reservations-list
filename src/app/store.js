import { configureStore } from "@reduxjs/toolkit";
import addingPeopleSlice from "../features/addingPeople/addingPeopleSlice";
import customerSlice from "../features/addingPeople/customerSlice";

export const store = configureStore({
  reducer: {
    addingPeopleSlice,
    customerSlice
  },
});

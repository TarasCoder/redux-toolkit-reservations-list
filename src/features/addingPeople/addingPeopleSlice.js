import { createSlice, current } from "@reduxjs/toolkit";

const addingPeopleSlice = createSlice({
  name: "addingPeople",
  initialState: { value: [] },
  reducers: {
    addPeopleToList: (state, action) => {
      state.value.push({ id: action.payload.id, name: action.payload.name });
    },
    removePeopleFromList: (state, action) => {
      state.value = current(state).value.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const {
  addPeopleToList,
  removePeopleFromList,
} = addingPeopleSlice.actions;
export default addingPeopleSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: { value: [] },
  reducers: {
    addPeopleToCustomers: (state, action) => {
      state.value.push(action.payload);
    },
    addFood: (state, action) => {
        state.value = current(state).value.map((item)=>{
            if (item.id === action.payload.id){
                return {
                    ...item,
                    food: [...item.food, action.payload.value]
                }
            }
            return item;
        })
    },
  },
});

export const { addPeopleToCustomers, addFood } = customersSlice.actions;
export default customersSlice.reducer;

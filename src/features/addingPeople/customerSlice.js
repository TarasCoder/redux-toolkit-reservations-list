import { createSlice, current } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: { value: [] },
  reducers: {
    addPeopleToCustomers: (state, action) => {
      state.value.push(action.payload);
      console.log("State in customer slice: ", current(state).value)
    },
    addFood: (state, action) => {
        console.log("PAYLOAD",action.payload.id)
        state.value = current(state).value.map((item)=>{
            console.log("inside map ",item)
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

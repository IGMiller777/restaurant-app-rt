import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        incrementDish: (state: any, {payload}) => {
            state[payload] = state[payload] ? state[payload] + 1 : 1;
        },
        decrementDish: (state: any, {payload}) => {
            state[payload] = state[payload] !== 0 ? state[payload] - 1 : 0
        }
    }
});
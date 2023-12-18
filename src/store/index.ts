import { userSlice } from "./entities/user";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reviewSlice } from "./entities/review";
import { restaurantSlice } from "./entities/restaurant";
import { cartSlice } from "./cart";
import { dishSlice } from "./entities/dish";

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
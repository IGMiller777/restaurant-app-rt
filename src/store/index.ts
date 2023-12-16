import { userSlice } from "./entities/user";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reviewSlice } from "./entities/review";
import { restaurantSlice } from "./entities/restaurant";

const rootReducer = combineReducers({
    restaurant: restaurantSlice.reducer,
    user: userSlice.reducer,
    review: reviewSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
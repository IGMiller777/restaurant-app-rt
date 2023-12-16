import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadDishesByRestaurantId } from "./thunks/loadDishesByRestaurant";
import { loadDishes } from "./thunks/loadDishes";
import { loadDishById } from "./thunks/loadDishById";

export const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dish",
    initialState: dishEntityAdapter.getInitialState({
        status: REQUEST_STATUSES.idle,
    }),
    extraReducers: (build) =>
        build
            .addCase(loadDishesByRestaurantId.pending, (state: any) => {
                state.loadingStatus = REQUEST_STATUSES.loading;
            })
            .addCase(loadDishesByRestaurantId.fulfilled, (state: any, { payload }) => {
                dishEntityAdapter.upsertMany(state, payload);
                state.loadingStatus = REQUEST_STATUSES.success;
            })
            .addCase(loadDishesByRestaurantId.rejected, (state: any, { payload }) => {
                state.loadingStatus =
                    payload === REQUEST_STATUSES.earlyLoaded
                        ? REQUEST_STATUSES.success
                        : REQUEST_STATUSES.failed;
            })
            .addCase(loadDishes.pending, (state: any) => {
                state.loadingStatus = REQUEST_STATUSES.loading;
            })
            .addCase(loadDishes.fulfilled, (state: any, { payload }) => {
                dishEntityAdapter.upsertMany(state, payload);
                state.loadingStatus = REQUEST_STATUSES.success;
            })
            .addCase(loadDishes.rejected, (state: any) => {
                state.loadingStatus = REQUEST_STATUSES.failed;
            })
            .addCase(loadDishById.pending, (state: any) => {
                state.loadingStatus = REQUEST_STATUSES.loading;
            })
            .addCase(loadDishById.fulfilled, (state: any, { payload }) => {
                dishEntityAdapter.upsertOne(state, payload);
                state.loadingStatus = REQUEST_STATUSES.success;
            })
            .addCase(loadDishById.rejected, (state: any, { payload }) => {
                state.loadingStatus =
                    payload === REQUEST_STATUSES.earlyLoaded
                        ? REQUEST_STATUSES.success
                        : REQUEST_STATUSES.failed;
            }),
    reducers: {}
});

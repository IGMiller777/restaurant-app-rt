import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { AppState } from "../../../types/store.type";

export const loadRestaurantIfNotExist = createAsyncThunk(
    "restaurant",
    async (_, { getState, rejectWithValue }) => {
        const restaurantIds = selectRestaurantIds(getState() as AppState);

        if (restaurantIds.length) {
            return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
        }

        const response = await fetch("http://localhost:3001/api/restaurants/");

        return await response.json();
    }
);

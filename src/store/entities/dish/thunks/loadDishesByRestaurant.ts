import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";
import { AppState } from "../../../types/store.type";

export const loadDishesByRestaurantId = createAsyncThunk(
    `dish/loadDishesByRestaurantId`,
    async (restaurantId, { getState, rejectWithValue }) => {
        const state = getState() as AppState;
        const restaurantDishIds = selectRestaurantMenuById(state, { restaurantId } as any) as any;
        const loadedDishIds = selectDishIds(state as any);

        if (
            restaurantDishIds.every((restaurantDishId: any) =>
                loadedDishIds.includes(restaurantDishId)
            )
        ) {
            return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
        }

        const response = await fetch(
            `http://localhost:3001/api/products?restaurantId=${restaurantId}`
        );

        return await response.json();
    }
);

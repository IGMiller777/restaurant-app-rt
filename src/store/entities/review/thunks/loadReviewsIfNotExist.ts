import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";
import { AppState } from "../../../types/store.type";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

export const loadReviewsIfNotExist: any = createAsyncThunk(
    'review/loadReviewsIfNotExist',
    async (restaurantId, {getState, rejectWithValue}) => {
        const state = getState() as AppState;
        const restaurantReviewIds = selectRestaurantReviewsById(state, {
            restaurantId
        }) as any;
        const loadedReviewIds = selectReviewIds(state);

        if (
            restaurantReviewIds.every((restaurantReviewId: string) =>
                loadedReviewIds.includes(restaurantReviewId)
            )
        ) {
            return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
        }

        const response = await fetch(
            `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
        );

        return await response.json();
    }
)
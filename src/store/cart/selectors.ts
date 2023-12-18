import { createSelector } from "reselect";
import { AppState } from "../types/store.type";

export const selectCartModule = (state: AppState) => state.cart;

export const selectDishCount = (state: AppState, { dishId }: any) =>
    selectCartModule(state)[dishId] || 0;

export const selectCartIds = createSelector(selectCartModule, (state) =>
    Object.keys(state)
);

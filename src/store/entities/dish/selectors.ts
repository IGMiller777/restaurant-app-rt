import { dishEntityAdapter } from "./index";
import { AppState } from "../../types/store.type";
import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectDishModule = (state: AppState) => state.dish;
const dishSelectors = dishEntityAdapter.getSelectors(selectDishModule as any);

export const selectDishById = (state: any, { dishId }: any) =>
    dishSelectors.selectById(state, dishId) as any;

export const selectDishNameById = (state: any, { dishId }: any) =>
    selectDishById(state, { dishId })?.name;

export const selectDishIds = dishSelectors.selectIds;
export const selectDishes = dishSelectors.selectAll;

export const selectDishLoadingStatus = (state: AppState) =>
    selectDishModule(state).status;

export const selectIsDishLoading = (state: AppState) =>
    selectDishLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsDishLoaded = (state: AppState) =>
    selectDishLoadingStatus(state) === REQUEST_STATUSES.success;

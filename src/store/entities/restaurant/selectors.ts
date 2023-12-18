import { AppState } from "../../types/store.type";
import { createSelector } from "reselect";
import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectRestaurantModule = (state: AppState) => state.restaurant;

export const selectRestaurantById = (state: AppState, {restaurantId}: { restaurantId: any }) =>
    selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantIds = (state: AppState) =>
    selectRestaurantModule(state).ids;

export const selectRestaurantEntities = (state: AppState) =>
    selectRestaurantModule(state).entities;

export const selectRestaurantsFilteredByName = createSelector(
    [selectRestaurantEntities, (_, {searchValue}) => searchValue],
    (entities, searchValue) => {
        return Object.values(entities).filter(
            ({name}: any) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
    }
);

export const createSelectRestaurantsFilteredByName = () =>
    createSelector(
        [selectRestaurantEntities, (_, {searchValue}) => searchValue],
        (entities, searchValue) => {
            return Object.values(entities).filter(
                ({name}: any) =>
                    name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
            );
        }
    );


export const selectRestaurantMenuById = (state: AppState, { restaurantId }: {restaurantId: string}) =>
    selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantReviewsById = (state: AppState, { restaurantId }: any) =>
    selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatus = (state: AppState) =>
    selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state: AppState) =>
    selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsRestaurantLoaded = (state: AppState) =>
    selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.success;

export const selectRestaurantIdsFilteredByDishId = (state: AppState, { dishId }: {dishId: string}) =>
    selectRestaurantIds(state).filter((restaurantId) => {
        const restaurant = selectRestaurantById(state, { restaurantId }) as any;

        return !!restaurant?.menu.includes(dishId);
    });

import {
    INormalizedDishes,
    INormalizedRestaurants,
    INormalizedReviews,
    INormalizedUsers
} from "../../constants/normalized-fixtures.interface";

export type AppState = {
    entities: any; //TODO - ????
    review: ReviewState;
    user: UserState;
    dish: DishState;
    restaurant: RestaurantsState;
}

type StateEntitiesCommon<T> = {
    ids: string[];
    entities: { [key: string]: T }[];
    loadingStatus: string;
    status: string;
}

export type ReviewState = StateEntitiesCommon<INormalizedReviews>;
export type UserState = StateEntitiesCommon<INormalizedUsers>;
export type DishState = StateEntitiesCommon<INormalizedDishes>;
export type RestaurantsState = StateEntitiesCommon<INormalizedRestaurants>;
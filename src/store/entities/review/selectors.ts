import { AppState } from "../../types/store.type";
import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectReviewModule = (state: AppState) => state.review;

export const selectReviews = (state: AppState) =>
    Object.values(selectReviewModule(state).entities);

export const selectReviewIds = (state: AppState) => selectReviewModule(state).ids;

export const selectReviewById = (state: AppState, {reviewId}: {reviewId: number}) =>
    selectReviewModule(state).entities[reviewId];

export const selectReviewLoadingStatus = (state: AppState) =>
    selectReviewModule(state).status;

export const selectIsReviewLoading = (state: any) =>
    selectReviewLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsReviewLoaded = (state: any) =>
    selectReviewLoadingStatus(state) === REQUEST_STATUSES.success;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { selectIsReviewLoading } from "../../store/entities/review/selectors";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunks/loadReviewsIfNotExist";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";
import { AppState } from "../../store/types/store.type";
import { loadUserIfNotExist } from "../../store/entities/user/thunks/loadUserIfNotExist";

export const Reviews = () => {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const reviews = useSelector((state: AppState) =>
        selectRestaurantReviewsById(state, { restaurantId })
    ) as any;
    const isLoading = useSelector(selectIsReviewLoading);

    useEffect(() => {
        dispatch(loadReviewsIfNotExist(restaurantId));
    }, [restaurantId]);

    useEffect(() => {
        dispatch(loadUserIfNotExist());
    }, []);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div>
            <h3>Reviews</h3>
            <div className={styles.reviews}>
                {reviews?.map((id: string) => (
                    <Review className={styles.review} reviewId={id} />
                ))}
            </div>
        </div>
    );
};

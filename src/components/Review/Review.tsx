import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { SIZE } from "../../constants/size";
import { selectReviewById } from "../../store/entities/review/selectors";
import { Rating } from "../Rating/Rating";
import { User } from "../User/User";

import styles from "./styles.module.css";
import { AppState } from "../../store/types/store.type";

export const Review = ({reviewId, className}: { reviewId: string, className: string }) => {
    const review = useSelector((state: AppState) => selectReviewById(state, {reviewId})) as any;

    if (!review) {
        return null;
    }

    const {text, rating, userId} = review;
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <User userId={userId}/>
                <Rating value={rating} size={SIZE.s}/>
            </div>
            <div>{text}</div>
        </div>
    );
};

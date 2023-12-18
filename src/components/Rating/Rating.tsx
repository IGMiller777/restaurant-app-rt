import styles from "./styles.module.css";
import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";
import { SIZE } from "../../constants/size";
import classNames from "classnames";

export const Rating = ({value, size = SIZE.m, onChange, maxRating = 5, className}: {
    value: number,
    size?: string,
    onChange?: Function,
    maxRating?: number,
    className?: string
}) => {
    return (
        <div className={classNames(className)}>
            {maxRating > 0 &&
                new Array(maxRating)
                    .fill(null)
                    .map((_, index) => (
                        <img src={index >= value ? Star : GoldStar}
                             className={classNames(styles.star, styles[size])}
                             onClick={() => onChange?.(index + 1)}
                             alt={index >= value ? "black logo" : "gold logo"}/>
                    ))}
        </div>
    );
};

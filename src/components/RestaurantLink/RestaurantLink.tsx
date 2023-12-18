import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { AppState } from "../../store/types/store.type";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const RestaurantLink = ({ restaurantId, className }: {restaurantId: string, className: string}) => {
    const restaurant = useSelector((state: AppState) =>
        selectRestaurantById(state, { restaurantId })
    ) as any;

    if (!restaurant) {
        return null;
    }

    return (
        <Link
            to={`/restaurants/${restaurantId}`}
            className={classNames(styles.root, className)}
        >
            {restaurant.name}
        </Link>
    );
};

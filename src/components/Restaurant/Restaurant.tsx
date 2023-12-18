import styles from "./styles.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { AppState } from "../../store/types/store.type";
import classNames from "classnames";
import { INormalizedRestaurants } from "../../constants/normalized-fixtures.interface";

const tabs = ["menu", "reviews"];

export const Restaurant = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state: AppState) =>
        selectRestaurantById(state, { restaurantId })
    ) as any;

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <div>
            <h2>{name}</h2>
            <div>
                {tabs.map((tab) => (
                    <NavLink
                        key={tab}
                        to={tab}
                        className={({ isActive }) =>
                            classNames(styles.tab, { [styles.active]: isActive })
                        }
                    >
                        {tab}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

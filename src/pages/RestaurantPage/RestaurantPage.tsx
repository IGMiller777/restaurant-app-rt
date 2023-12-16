import { useDispatch, useSelector } from "react-redux";
import { selectIsRestaurantLoading } from "../../store/entities/restaurant/selectors";
import { useEffect } from "react";
import { loadRestaurantIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";

import styles from "./style.module.css";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Outlet } from "react-router-dom";

export const RestaurantPage = () => {
    const dispatch = useDispatch() as any;

    const isLoading = useSelector(selectIsRestaurantLoading);

    useEffect(() => {
        dispatch(loadRestaurantIfNotExist());
    }, []);

    if(isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div className={styles.root}>
            <div>
                <RestaurantTabs/>

                <Outlet/>
            </div>
        </div>
    );
};

import styles from "./styles.module.css";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../store/entities/restaurant/selectors";
import { AppState } from "../../store/types/store.type";
import { selectIsDishLoading } from "../../store/entities/dish/selectors";
import { loadDishesByRestaurantId } from "../../store/entities/dish/thunks/loadDishesByRestaurant";
import { Button } from "../Button/Button";
import { Dish } from "../Dish/Dish";


export const Menu = () => {
    const ref = useRef();
    let {restaurantId} = useParams() as {restaurantId: string};
    const dispatch = useDispatch();
    const menu: any = useSelector((state: AppState) =>
        selectRestaurantMenuById(state, {restaurantId}));
    const isLoading = useSelector(selectIsDishLoading);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadDishesByRestaurantId(restaurantId))
    }, [restaurantId]);

    const onRender = useCallback(() => {}, []);

    if(isLoading) {
        return <span>Loading...</span>
    }

    return (
        <div ref={onRender}>
            <h3>Menu</h3>
            <Button onClick={() => clearInterval(ref.current)}>Cancel</Button>
            <div className={styles.dishes}>
                {menu?.map((dishId: string) => (
                    <Dish dishId={dishId} key={dishId} className={styles.dish}/>
                ))}
                <Button onClick={() => navigate("/cart")}>Перейти к заказу</Button>
            </div>
        </div>
    );
};

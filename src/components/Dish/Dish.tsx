import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDishCount } from "../../store/cart/selectors";
import { selectDishById } from "../../store/entities/dish/selectors";
import { AppState } from "../../store/types/store.type";
import { cartSlice } from "../../store/cart";
import { INormalizedDishes } from "../../constants/normalized-fixtures.interface";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { memo } from "react";


export const Dish = ({dishId, route, className}: { dishId: string, route?: string, className: string }) => {
    const dish = useSelector((state: AppState) => selectDishById(state, {dishId})) as INormalizedDishes;
    const count = useSelector((state: AppState) => selectDishCount(state, {dishId})) as number;
    const dispatch = useDispatch();

    if (!dish) {
        return null;
    }

    const decrement = () => dispatch(cartSlice.actions.decrementDish(dishId));
    const increment = () => dispatch(cartSlice.actions.incrementDish(dishId));

    const {name, ingredients} = dish;


    return (
        <div className={classNames(styles.root, className, {
            [styles.rootBig]: count > 4
        })}>
            <div>
                {route ? (
                    <Link to={route} className={classNames(styles.name, styles.link)}>
                        {name}
                    </Link>
                ) : (
                    <span className={styles.name}>{name}</span>
                )}
                <div>{ingredients?.join(', ')}</div>
            </div>
            <div className={styles.actions}>
                <Button onClick={decrement}>-</Button>
                <span className={styles.count}>{count}</span>
                <Button onClick={increment}>+</Button>
            </div>

        </div>
    );
};

export const DishWithMemo = memo(Dish);

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectCartIds } from "../../store/cart/selectors";
import { Dish } from "../Dish/Dish";


export const Cart = () => {
    const cart = useSelector(selectCartIds);
    return (
        <div className={styles.root}>
            {cart.map((dishId) => (
                <Dish className={styles.dish} dishId={dishId}/>
            ))}
        </div>
    );
};

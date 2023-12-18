import styles from "./styles.module.css";
import { Cart } from "../../components/Cart/Cart";


export const CartPage = () => {
    return (
        <div className={styles.root}>
            <h2>Cart</h2>
            <Cart/>
        </div>
    );
};

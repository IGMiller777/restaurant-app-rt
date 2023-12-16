import styles from './styles.module.css';
import { SIZE } from "../../constants/size";
import { BUTTON_VIEW_VARIANT } from "../../constants/view-style-variant";
import classNames from "classnames";

export interface IButton {
    children: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    size?: string;
    viewVariant?: string;
}

export const Button = ({
                           children,
                           onClick,
                           disabled,
                           className,
                           size = SIZE.m,
                           viewVariant = BUTTON_VIEW_VARIANT.primary,
                       }: IButton) => {
    return (
        <button
            className={classNames(
                styles.root,
                styles[size],
                styles[viewVariant],
                className,
                {
                    [styles.disabled]: disabled,
                }
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

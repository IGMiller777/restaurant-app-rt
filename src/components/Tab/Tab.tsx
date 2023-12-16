import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import React from "react";

interface TabProps {
    to: string;
    title: string;
    className?: string; // Making className optional
}


export const Tab: React.FC<TabProps> = ({to, title, className}) => {
    return (
        <NavLink to={to}
                 title={title}
                 className={className}>
            {({isActive}) =>
                <Button disabled={isActive}>
                    {title}
                </Button>}
        </NavLink>
    );
};

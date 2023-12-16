import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Reviews } from "./components/Reviews/Reviews";
import { CartPage } from "./pages/CartPage/CartPage";
import { DishPage } from "./pages/DishPage/DishPage";
import { DishesPage } from "./pages/DishesPage/DishesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Menu } from "./components/Menu/Menu";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="restaurants" element={<RestaurantPage />}>
                        <Route index element={<span>Select restaurant</span>} />
                        <Route path=":restaurantId" element={<Restaurant />}>
                            <Route index element={<Navigate to="menu" replace />} />
                            <Route path="menu" element={<Menu />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                    </Route>
                    <Route path="cart" element={<CartPage />} />
                    <Route path="redirect" element={<Navigate to="/" replace />} />
                    <Route path="dish/:dishId" element={<DishPage />} />
                    <Route path="dishes" element={<DishesPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

export interface INormalizedRestaurants {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}

export interface INormalizedReviews {
    id: string;
    userId: string;
    text: string;
    rating: number;
}
export interface INormalizedDishes {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}

export interface INormalizedUsers {
    id: string;
    name: string;
}
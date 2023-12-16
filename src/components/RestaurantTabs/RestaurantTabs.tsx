import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantsFilteredByName } from "../../store/entities/restaurant/selectors";
import { Tabs } from "../Tabs/Tabs";

export const RestaurantTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const restaurants = useSelector((state) =>
        selectRestaurantsFilteredByName(state, {
            searchValue: searchParams.get("search") || "",
        }));

    const restaurantaTabs = restaurants.map(({id, name}) => ({
        id,
        title: name
    })) as any[];


    return (
        <div>
            <input value={searchParams.get("search") || ""}
                   onChange={(event) => setSearchParams({search: event.target.value})}
            />
            <Tabs tabs={restaurantaTabs}/>

        </div>
    );
};

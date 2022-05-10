import { useNavigate } from "react-router-dom";
import { MealItem } from "./Mealitem";

function MealList({ meals }) {
    const navigate = useNavigate();
    return (
        <>
            <button
                className="btn"
                style={{ marginBottom: "1rem" }}
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
            <div className="list">
                {meals.map((meal) => (
                    <MealItem key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
    );
}

export { MealList };

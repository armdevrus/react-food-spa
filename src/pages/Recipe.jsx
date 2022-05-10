import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";
import { RecipeList } from "../components/RecipeList";

function Recipe() {
    const { id } = useParams();
    const [recipes, setRecipe] = useState([]);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals));
    }, [id]);
    
    return (
        <>
            {recipes.length ? <RecipeList recipes={recipes} /> : <Preloader />}
        </>
    );    
}

export { Recipe };

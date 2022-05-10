import { RecipeItem } from "../components/RecipeItem";

function RecipeList({recipes = []}) {

     return(
         <div>
             {recipes?.map((recipe) => (
                 <RecipeItem key={recipe.idMeal} {...recipe}/>
             ))}
         </div>
     )


}

export { RecipeList };

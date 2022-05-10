import { useEffect, useState } from 'react';   
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category(){
    const name = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    },[name])

    return(
        <>
            {
                meals.length ? <MealList meals={meals}/> : (
                    <Preloader/>
                )
            }
        </>

    )
}

export {Category}
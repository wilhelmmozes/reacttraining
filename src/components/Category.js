import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
// import Detail from './components/Detail';

const Category = () => {
    // const [categories, setCategories] = useState(null);
    const [meals, setMeals] = useState(null);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const result = await data.json();
        setMeals(result.meals);
        console.log('ini res', result.meals);
    }

    useEffect(() => {
        fetchData();
    },[])
    console.log('ini meals' , meals);

    return(
        <div className="meals">
            Seafood
            {
                meals ? (
                    <div>
                        <table className="mealsTable">
                            <tbody>
                                {
                                    meals.map(meal => (
                                        <tr className="mealsRow">
                                            <td><img src={meal.strMealThumb} width="100" height="100"></img></td>
                                            <td>
                                                <Link to={`/meal/${meal.idMeal}`}>
                                                    {meal.strMeal}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : <p>loading</p>
            }
        </div>
    )
}

export default Category
import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    console.log('param', params.idMeal);
    const [details, setDetails] = useState(null);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+params.idMeal);
        const result = await data.json();
        setDetails(result.meals)
        console.log('ini res', result.meals[0]);
    }

    useEffect(() => {
        fetchData();
    },[])
    console.log(details);
    return(
        <div>
            <table>
            {
                details ? ( details.map(detail => (
                    <tbody>
                        <tr>
                            <td><img src={detail.strMealThumb} width="450" height="450"></img></td>
                            <td><iframe width="450" height="450" src={detail.strYoutube}></iframe></td>
                        </tr>
                        <tr>
                            <td colSpan="2">{detail.strMeal}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">{detail.strInstructions}</td>
                        </tr>
                    </tbody>
                ))):(
                    <p>loading</p>
                )
                    
            }
            </table>
        </div>
    )
}

export default Detail
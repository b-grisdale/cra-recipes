import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(
    () => {
        getPopular();
    }, []
  )

  const getPopular = async () => {
    const apiUrl = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await apiUrl.json();
    setPopular(data.recipes);
  }

  return (
    <div>
        <div>Popular</div>
        {
            popular.map((recipe) => {
                return(
                    <Link to={'/recipe/' + recipe.id} key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Popular
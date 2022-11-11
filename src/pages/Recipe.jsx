import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState([]);

  const fetchDetails = async (name) => {
    const apiUrl = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await apiUrl.json();
    console.log(detailData)

    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails(params.name)
  }, [params.name])

  return (
    <div>
        <h2>{details.title}</h2>
        <img src={details.image}/>
    </div>
  )
}

export default Recipe
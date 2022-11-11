import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe';

function Pages() {

  let location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
  )
}

export default Pages
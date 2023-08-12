import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Pages/Home';
import Recipe from './Pages/Recipe';
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom'
import RecipeDetail from './Component/RecipeDetail';

function App() {

  return (
    <>

<HashRouter>
<Header/>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/recipe" element={<Recipe/>}/> 
<Route path='/recipe/:recipeId' element={<RecipeDetail/>}/>
</Routes>
</HashRouter>

    </>
  )
}

export default App
